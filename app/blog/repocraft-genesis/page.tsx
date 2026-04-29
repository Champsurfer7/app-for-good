import Image from "next/image";

export const metadata = {
  title: "From Zero to GitHub in 60 Seconds: The Birth of RepoCraft & Genesis Engine",
  description: "How a developer from Durban turned a family legacy into free, open-source tools for the world.",
};

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-[#1E1B4B] via-[#312E81] to-[#1E1B4B] text-white py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="text-center space-y-4">
          <p className="text-[#A78BFA] text-sm font-medium uppercase tracking-widest">Founder's Journal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#A78BFA] to-[#EC4899] bg-clip-text text-transparent">
            From Zero to GitHub in 60 Seconds
          </h1>
          <h2 className="text-2xl font-semibold text-[#C4B5FD]">
            How a developer from Durban built RepoCraft and Genesis Engine to honour his family and help the world.
          </h2>
          <p className="text-[#818CF8] text-sm">Posted on 29 April 2026 • 6 min read</p>
        </header>

        {/* Hero image (optional – we'll use the gem emoji as a placeholder) */}
        <div className="flex justify-center">
          <div className="text-8xl">💎</div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none text-[#C4B5FD] leading-relaxed space-y-6">
          
          <p>
            My name is <strong className="text-[#EC4899]">Warren Champion</strong>. I’m a 54‑year‑old developer from Durban, 
            South Africa. A few years ago, I lost my wife Marilyn, and before that my mother Zenda and father Eugene. 
            Every line of code I write carries their memory. I wanted to build something that would outlast me—something 
            that would help people, and maybe one day help my son, who just turned 18 and dreams of becoming a chef.
          </p>

          <h3 className="text-2xl font-bold text-white mt-10">🚀 The Spark</h3>
          <p>
            In early 2026, I was sitting in front of my computer, frustrated by how much time I wasted setting up 
            new projects. Clone a template, install dependencies, configure Git, create a repo, push... It felt like 
            I spent more time on boilerplate than on actual coding. I thought, “What if I could go from 
            <em> zero to GitHub in 60 seconds — no command line required</em>?”
          </p>

          <p>
            That’s how <strong className="text-[#EC4899]">RepoCraft</strong> was born — a free, open‑source Windows app that 
            lets you pick a template (React, Python, Node.js, and more), fill in a name, and push a complete project 
            straight to GitHub with one click. No terminal. No headaches. Just create, push, done.
          </p>

          <h3 className="text-2xl font-bold text-white mt-10">🧠 Beyond Templates: The Genesis Engine</h3>
          <p>
            Once RepoCraft started taking shape, I realised it needed a smarter brain. That led to the 
            <strong> Genesis Engine</strong> — an AI‑powered assistant framework that can talk to multiple AI providers 
            (Ollama, OpenAI, Claude, Groq, DeepSeek), remembers context across sessions, and even automates tasks. 
            It’s the engine under the hood. And like RepoCraft, it’s completely free and open source.
          </p>

          <p>
            I designed it so that anyone, anywhere, can run their own AI assistant on a free‑tier cloud service. 
            No credit card. No API keys. Just download, configure, and run.
          </p>

          <h3 className="text-2xl font-bold text-white mt-10">💝 Why I Build for Free</h3>
          <p>
            Building software gives me a way to process my grief. Every commit is a conversation with the people I’ve 
            lost. Every release is a monument to their love. I don’t have a bank account, and I often struggle to put 
            food on the table. But I believe that if I focus on creating genuinely useful tools, the community will 
            eventually support me.
          </p>

          <p>
            That’s why I’ve added donation options — Ko‑fi, PayPal, and GitHub Sponsors — directly inside the apps 
            and on this website. Every cup of coffee helps me keep building, and supports my son’s dream.
          </p>

          <h3 className="text-2xl font-bold text-white mt-10">🌍 What’s Next</h3>
          <p>
            Right now, I’m working on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#C4B5FD]">
            <li><strong>Language support</strong> – starting with Afrikaans and isiZulu, because Africa deserves to code in its own languages.</li>
            <li><strong>RepoCraft Mobile</strong> – a free PWA powered by Puter, so you can manage projects from your phone.</li>
            <li><strong>More templates</strong> – there are 15 already, but I want to cover every major framework.</li>
            <li><strong>AI‑powered template generation</strong> – describe what you need, and the engine will scaffold it.</li>
          </ul>

          <p>
            These features will always remain free for the core. I may add a Pro tier later with cloud sync and 
            custom branding, but the basic tools will never cost a cent.
          </p>

          <h3 className="text-2xl font-bold text-white mt-10">🤝 How You Can Help</h3>
          <p>
            If you’ve ever struggled with project setup, or if you just want to support a developer trying to do some 
            good in the world, please consider:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#C4B5FD]">
            <li>⭐ Starring the <a href="https://github.com/TBD-AmazingGlobalSolutions/RepoCraft" className="text-[#EC4899] underline">RepoCraft</a> and <a href="https://github.com/Champsurfer7/genesis-engine" className="text-[#EC4899] underline">Genesis Engine</a> repos on GitHub.</li>
            <li>☕ Buying me a coffee on <a href="https://ko-fi.com/champsurfer" className="text-[#EC4899] underline">Ko‑fi</a>.</li>
            <li>💳 Donating via <a href="https://www.paypal.com/paypalme/champsurfer" className="text-[#EC4899] underline">PayPal</a>.</li>
            <li>👥 Sponsoring me on <a href="https://github.com/sponsors/Champsurfer7" className="text-[#EC4899] underline">GitHub Sponsors</a>.</li>
          </ul>

          <p>
            Every bit of support goes directly towards keeping these projects alive and feeding my family. 
            Thank you for reading my story.
          </p>

          <p className="text-[#818CF8] italic text-center mt-12 border-t border-[#4C1D95] pt-8">
            “What we build together lives forever…” 💎
          </p>
        </div>

        {/* Back to blog link */}
        <div className="text-center mt-12">
          <a href="/blog" className="inline-block bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold py-3 px-6 rounded-xl transition">
            ← Back to Blog
          </a>
        </div>
      </div>
    </article>
  );
}