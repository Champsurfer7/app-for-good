import Link from "next/link";

export const metadata = {
  title: "Premium Templates – RepoCraft",
  description: "Get 10 exclusive, production‑ready templates to speed up your workflow. Pay once, download instantly.",
};

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1E1B4B] via-[#312E81] to-[#1E1B4B] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#A78BFA] to-[#EC4899] bg-clip-text text-transparent">
            Premium Templates
          </h1>
          <p className="text-xl text-[#C4B5FD] max-w-2xl mx-auto">
            10 extra‑special, production‑ready templates for React, Node.js, Python, and more.
            Start building faster and ship sooner.
          </p>
        </section>

        {/* What’s inside */}
        <section className="grid md:grid-cols-2 gap-6">
          {[
            "React + TypeScript dashboard",
            "Node.js REST API with JWT auth",
            "Python FastAPI microservice",
            "Vue 3 + Vite starter",
            "Next.js blog with MDX",
            "Express + MongoDB backend",
            "Flask + SQLite boilerplate",
            "SvelteKit e‑commerce skeleton",
            "Electron desktop app template",
            "GitHub Actions CI/CD pipeline"
          ].map((item, idx) => (
            <div key={idx} className="bg-[#3730A3] rounded-xl p-6 flex items-center gap-4">
              <span className="text-2xl">📁</span>
              <span className="text-[#E0E7FF] font-medium">{item}</span>
            </div>
          ))}
        </section>

        {/* Pricing & Buy */}
        <section className="text-center bg-[#312E81] rounded-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold">One‑time Purchase – $9.99</h2>
          <p className="text-[#C4B5FD]">
            Pay once, download instantly. No subscription. Includes lifetime updates.
          </p>
          <div className="flex justify-center">
            {/* Ko‑fi buy button – replace with your real Ko‑fi product link */}
            <a
              href="https://ko-fi.com/s/9fe6b9d6db"   // ← Replace with your Ko‑fi product URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#EC4899] hover:bg-[#DB2777] text-white font-bold py-4 px-10 rounded-xl text-xl transition shadow-lg"
            >
              💳 Buy Premium Pack
            </a>
          </div>
          <p className="text-sm text-[#818CF8]">
            After payment, Ko‑fi will instantly send you the download link.
          </p>
        </section>

        {/* Free trial / preview */}
        <section className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-[#E0E7FF]">Try Before You Buy</h3>
          <p className="text-[#C4B5FD]">
            Download <span className="text-[#EC4899] font-semibold">2 free templates</span> from our GitHub repo,
            and see the quality for yourself.
          </p>
          <a
            href="https://github.com/TBD-AmazingGlobalSolutions/RepoCraft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold py-3 px-8 rounded-xl transition"
          >
            ⭐ Get Free Templates on GitHub
          </a>
        </section>

        {/* Back to blog / home */}
        <div className="text-center">
          <Link href="/" className="text-[#A78BFA] underline hover:text-white transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}