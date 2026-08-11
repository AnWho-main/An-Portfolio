"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Play, Trash2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

interface TerminalLog {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLog[]>([
    {
      command: "whoami",
      output: <span className="text-emerald-400">anshuman-singh-somvanshi</span>,
    },
    {
      command: "role",
      output: <span className="text-accent-primary font-bold">Software Engineer</span>,
    },
    {
      command: "stack",
      output: (
        <span className="text-slate-300">
          Laravel • PHP • CodeIgniter • MySQL • JavaScript • Next.js • AI Agents • Web3
        </span>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div>Available commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-accent-primary font-bold mt-1">
              <span>• whoami</span>
              <span>• role</span>
              <span>• stack</span>
              <span>• build</span>
              <span>• projects</span>
              <span>• skills</span>
              <span>• contact</span>
              <span>• clear</span>
            </div>
          </div>
        );
        break;
      case "whoami":
        outputNode = <span className="text-emerald-400 font-bold">anshuman-singh-somvanshi</span>;
        break;
      case "role":
        outputNode = <span className="text-accent-primary font-bold">Software Engineer (Backend Systems & AI/Web3)</span>;
        break;
      case "stack":
        outputNode = (
          <div className="text-slate-300">
            <span className="text-amber-400 font-bold">Backend:</span> PHP, Laravel, CodeIgniter, MySQL, REST APIs, JWT, OAuth, Cron Jobs
            <br />
            <span className="text-sky-400 font-bold">Frontend:</span> JavaScript, Next.js 14, HTML, CSS, Tailwind
            <br />
            <span className="text-purple-400 font-bold">AI & Web3:</span> AI Agents, Generative Workflows, Solidity, BEP-20, BSC Testnet
          </div>
        );
        break;
      case "build":
        outputNode = <span className="text-cyan-400 font-bold">Scalable Web Applications, Backend Architecture, APIs, AI Agents, Payment Integrations, Web3 Applications</span>;
        break;
      case "projects":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div>1. Recharge & Bill Payment Platform [Payments]</div>
            <div>2. BBPS Integration Infrastructure [APIs]</div>
            <div>3. Outreach & Email Automation Platform [Automation]</div>
            <div>4. INDI Token & Royalty Distributor [Web3]</div>
            <div>5. AI Price Comparison Agent [AI]</div>
          </div>
        );
        break;
      case "skills":
        outputNode = (
          <div className="text-slate-300">
            Backend Engineering • Relational Databases • API Gateway Architecture • Payment Rails • Cron Schedulers • Smart Contracts
          </div>
        );
        break;
      case "contact":
        outputNode = (
          <div className="text-slate-300">
            Email: <span className="text-accent-primary">anshuman357main@gmail.com</span>
            <br />
            LinkedIn: <span className="text-accent-primary">linkedin.com/in/anshuman-singh-somvanshi-4a150b1bb</span>
            <br />
            GitHub: <span className="text-accent-primary">github.com/AnWho-main</span>
          </div>
        );
        break;
      default:
        outputNode = (
          <span className="text-rose-400">
            Command not recognized: &quot;{trimmed}&quot;. Type &quot;help&quot; for options.
          </span>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: outputNode }]);
    setInput("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const presetChips = ["whoami", "role", "stack", "build", "projects", "contact", "clear"];

  return (
    <section className="relative py-16 bg-white dark:bg-bg-dark border-b border-slate-200 dark:border-border-dark transition-colors duration-300">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden font-mono text-xs shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:shadow-2xl">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-slate-700 dark:text-slate-400 font-bold flex items-center gap-1.5 text-xs">
                  <TerminalIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-accent-primary" />
                  anshuman@engineer-terminal:~
                </span>
              </div>

              <button
                onClick={() => setHistory([])}
                className="text-slate-500 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400 transition-colors p-1"
                title="Clear Terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Action Chips */}
            <div className="px-4 py-2 bg-slate-100/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Quick Exec:</span>
              {presetChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleCommand(chip)}
                  className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 text-indigo-600 dark:text-slate-300 border border-slate-200 dark:border-transparent text-[11px] transition-colors cursor-pointer shadow-sm"
                >
                  ${chip}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 min-h-[220px] max-h-[340px] overflow-y-auto space-y-4">
              {history.map((log, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">$</span>
                    <span className="text-slate-900 dark:text-white font-bold">{log.command}</span>
                  </div>
                  <div className="pl-4 leading-relaxed">{log.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Bar */}
            <form onSubmit={onSubmit} className="p-3 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold pl-2">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type command ('help', 'stack', 'projects')..."
                className="flex-1 bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none text-xs font-mono"
              />
              <button
                type="submit"
                className="p-1.5 rounded bg-indigo-600 text-white font-bold hover:bg-indigo-700 dark:bg-accent-primary dark:text-bg-dark dark:hover:bg-sky-400 transition-colors"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
