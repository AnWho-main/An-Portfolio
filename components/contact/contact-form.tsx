"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setStatus("error");
        setErrorMessage(data.error || "Failed to deliver message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "success" && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <div>
            <div className="font-bold">Message Delivered Successfully!</div>
            <div className="text-xs text-emerald-300">Thank you for reaching out. Anshuman will respond shortly.</div>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <div className="text-xs font-mono">{errorMessage}</div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-txt-muted font-semibold mb-1.5">
            YOUR NAME <span className="text-accent-primary">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Mercer"
            required
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark text-slate-900 dark:text-txt-main placeholder:text-slate-400 dark:placeholder:text-txt-subtle text-sm focus:outline-none focus:border-indigo-600 dark:focus:border-accent-primary transition-colors shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-600 dark:text-txt-muted font-semibold mb-1.5">
            YOUR EMAIL <span className="text-indigo-600 dark:text-accent-primary">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            required
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark text-slate-900 dark:text-txt-main placeholder:text-slate-400 dark:placeholder:text-txt-subtle text-sm focus:outline-none focus:border-indigo-600 dark:focus:border-accent-primary transition-colors shadow-sm"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="block text-xs font-mono text-slate-600 dark:text-txt-muted font-semibold">
            SUBJECT
          </label>
          <span className="text-[11px] font-mono text-slate-400 dark:text-txt-subtle">Quick Select Topic:</span>
        </div>

        {/* Quick Topic Chips */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {["Backend Architecture", "AI Agents & Automation", "Full-Stack App", "Consultation"].map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => setFormData({ ...formData, subject: topic })}
              className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                formData.subject === topic
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-accent-primary border-indigo-500/50"
                  : "bg-slate-50 dark:bg-bg-elevated text-slate-600 dark:text-txt-muted border-slate-200 dark:border-border-dark hover:border-slate-300 dark:hover:border-sky-700"
              }`}
            >
              + {topic}
            </button>
          ))}
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. System Architecture / Consultation / Project Inquiry"
          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark text-slate-900 dark:text-txt-main placeholder:text-slate-400 dark:placeholder:text-txt-subtle text-sm focus:outline-none focus:border-indigo-600 dark:focus:border-accent-primary transition-colors shadow-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-600 dark:text-txt-muted font-semibold mb-1.5">
          MESSAGE <span className="text-indigo-600 dark:text-accent-primary">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project goals, technical requirements, or inquiry..."
          required
          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark text-slate-900 dark:text-txt-main placeholder:text-slate-400 dark:placeholder:text-txt-subtle text-sm focus:outline-none focus:border-indigo-600 dark:focus:border-accent-primary transition-colors resize-none shadow-sm"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="w-full cursor-pointer"
        icon={
          status === "submitting" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )
        }
      >
        {status === "submitting" ? "Sending Message..." : "Send Message"}
      </Button>
    </form>
  );
};
