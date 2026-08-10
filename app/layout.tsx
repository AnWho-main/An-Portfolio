import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { AIAssistantWidget } from "@/components/ai-assistant/ai-assistant-widget";

export const metadata: Metadata = {
  title: "Anshuman Singh Somvanshi | Software Engineer",
  description:
    "Portfolio of Anshuman Singh Somvanshi, a Software Engineer specializing in Laravel, PHP, backend systems, APIs, AI-powered solutions, automation, Next.js and blockchain/Web3 applications.",
  keywords: [
    "Anshuman Singh Somvanshi",
    "Software Engineer",
    "Backend Engineer",
    "Laravel Developer",
    "PHP Engineer",
    "MySQL Architecture",
    "REST APIs",
    "BBPS Integration",
    "AI Agents",
    "Web3 Developer",
    "BEP-20",
    "Next.js Developer",
  ],
  authors: [{ name: "Anshuman Singh Somvanshi" }],
  openGraph: {
    title: "Anshuman Singh Somvanshi | Software Engineer",
    description:
      "Software Engineer specializing in scalable backend systems, REST APIs, AI automation, and blockchain applications.",
    type: "website",
    locale: "en_US",
    siteName: "Anshuman Singh Somvanshi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshuman Singh Somvanshi | Software Engineer",
    description:
      "Software Engineer building scalable backend systems, APIs, AI solutions, and Web3 applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anshuman Singh Somvanshi",
    jobTitle: "Software Engineer",
    knowsAbout: [
      "Software Engineering",
      "Backend Architecture",
      "Laravel",
      "PHP",
      "MySQL",
      "REST APIs",
      "BBPS Integrations",
      "AI Agents",
      "Web3",
      "Smart Contracts",
      "Next.js",
    ],
    url: "https://somvanshi.dev",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="bg-white dark:bg-bg-dark text-txt-main font-sans antialiased min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AIAssistantWidget />
      </body>
    </html>
  );
};
