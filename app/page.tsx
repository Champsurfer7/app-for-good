// app/page.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase & Firestore only on client side
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
  const [subEmail, setSubEmail] = useState("");
  const [subMessage, setSubMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "subscribers"), {
        email: subEmail,
        subscribedAt: new Date()
      });
      setSubMessage("Thank you for subscribing! We will be in touch.");
      setSubEmail("");
    } catch (error: any) {
      setSubMessage("Error: " + error.message);
    }
  };

  // ... rest of the component remains the same
 

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1E1B4B] via-[#312E81] to-[#1E1B4B] text-white">
      
      {/* ────────── HERO ────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="text-6xl mb-4">💎</div>
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#A78BFA] to-[#EC4899] bg-clip-text text-transparent">
          App For Good
        </h1>
        <p className="mt-4 text-xl text-[#C4B5FD] max-w-2xl mx-auto leading-relaxed">
          A suite of free, open‑source tools built to help people, developers, and communities — one project at a time.
        </p>
        <p className="mt-2 text-sm text-[#818CF8] italic">
          “What we build together lives forever...”
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link href="/blog">
            <span className="inline-block bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold py-3 px-8 rounded-xl text-lg transition cursor-pointer">
              📖 Read the Blog
            </span>
          </Link>
          <a href="https://repocraft.puter.site" target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-[#EC4899] hover:bg-[#DB2777] text-white font-bold py-3 px-8 rounded-xl text-lg transition cursor-pointer">
              🚀 Try RepoCraft
            </span>
          </a>
        </div>
      </section>

      {/* ────────── PROJECT CARDS ────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-[#E0E7FF] mb-10">✨ Our Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* RepoCraft Card */}
          <div className="bg-[#3730A3] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border border-[#4C1D95]">
            <div className="text-4xl mb-3">💎</div>
            <h3 className="text-2xl font-bold">RepoCraft</h3>
            <p className="text-[#C4B5FD] mt-2 leading-relaxed">
              From Zero to GitHub in 60 seconds — no command line required. Create professional projects from templates and push to GitHub with one click.
            </p>
            <div className="mt-5 flex gap-3 flex-wrap">
              <a href="https://repocraft.puter.site" target="_blank" rel="noopener noreferrer">
                <span className="inline-block bg-[#EC4899] hover:bg-[#DB2777] text-white font-semibold py-2 px-5 rounded-lg text-sm transition cursor-pointer">
                  🌐 Visit Site
                </span>
              </a>
              <a href="https://github.com/TBD-AmazingGlobalSolutions/RepoCraft" target="_blank" rel="noopener noreferrer">
                <span className="inline-block bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold py-2 px-5 rounded-lg text-sm transition cursor-pointer">
                  ⭐ GitHub
                </span>
              </a>
            </div>
          </div>

          {/* Future Project Placeholder */}
          <div className="bg-[#1E1B4B] rounded-2xl p-8 border-2 border-dashed border-[#4C1D95] flex flex-col items-center justify-center text-center">
            <div className="text-5xl mb-3">🔮</div>
            <h3 className="text-xl font-bold text-[#A78BFA]">Coming Soon</h3>
            <p className="text-[#818CF8] mt-2">
              More free tools are on the way. Stay tuned via the blog or newsletter below.
            </p>
          </div>
        </div>
      </section>

      {/* ────────── ABOUT WARREN ────────── */}
      <section className="bg-[#1E1B4B] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#E0E7FF] mb-6">💎 About the Builder</h2>
          <p className="text-[#C4B5FD] leading-relaxed text-lg">
            I’m <span className="text-[#EC4899] font-bold">Warren Champion</span>, a developer from Durban, South Africa. 
            I build these tools in memory of my mother Zenda, my father Eugene and my wife Marilyn. 
            Every project here is part of a legacy I’m creating for my son, who dreams of becoming a chef.
          </p>
          <p className="text-[#818CF8] italic mt-4">
            “What we build together lives forever...”
          </p>
        </div>
      </section>

      {/* ────────── SUPPORT BANNER ────────── */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6 bg-[#312E81] rounded-2xl p-8 text-center shadow-xl">
                    {/* GitHub Sponsor Card */}
          <div className="mb-6 flex justify-center">
            <iframe src="https://github.com/sponsors/Champsurfer7/card" 
                    title="Sponsor Champsurfer7" 
                    height="225" width="600" 
                    style={{ border: '0', borderRadius: '12px' }}>
            </iframe>
          </div>
	<h2 className="text-2xl font-bold text-white mb-2">💝 Support This Project</h2>
          <p className="text-[#C4B5FD] mb-6">Every contribution helps me build more free tools and support my son’s future.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://ko-fi.com/champsurfer" target="_blank" rel="noopener noreferrer">
              <span className="inline-block bg-[#EC4899] hover:bg-[#DB2777] text-white font-bold py-3 px-8 rounded-xl text-lg transition cursor-pointer">
                ☕ Buy Me a Ko‑fi
              </span>
            </a>
                        <div>
              <style>{`.pp-EUKMUZENATT26{text-align:center;border:none;border-radius:1.5rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}`}</style>
              <form action="https://www.paypal.com/ncp/payment/EUKMUZENATT26" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;">
                <input class="pp-EUKMUZENATT26" type="submit" value="Contribute Here" />
                <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── NEWSLETTER (functional) ────────── */}
      <section className="py-16 bg-[#1E1B4B]">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">📬 Stay Updated</h2>
          <p className="text-[#C4B5FD] mb-6">
            Subscribe to hear about new projects, templates, and updates.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-4">
           <input
  type="email"
  required
  value={subEmail}
  onChange={(e) => setSubEmail(e.target.value)}
  className="w-full px-4 py-3 border border-[#4C1D95] rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
  placeholder="Enter your email"
/>
            <button
              type="submit"
              className="w-full py-3 text-white bg-[#059669] rounded-lg hover:bg-[#047857] font-bold transition duration-300 shadow-md"
            >
              Subscribe
            </button>
          </form>
          {subMessage && (
            <p className="mt-4 text-sm text-[#34D399] font-medium">{subMessage}</p>
          )}
        </div>
      </section>

      {/* ────────── FOOTER ────────── */}
      <footer className="py-8 text-center text-[#818CF8] text-sm border-t border-[#312E81]">
        <p>© {new Date().getFullYear()} Warren Champion | Amazing Global Solutions</p>
        <p className="mt-1">Built with ❤️ in Durban, South Africa</p>
        <p className="mt-2 italic">“What we build together lives forever...” 💎</p>
      </footer>

    </main>
  );
      }
