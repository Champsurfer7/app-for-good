// app/page.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { auth } from '../utils/firebase'; // Import your Firebase engine
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import the database tools

// Initialize the database
const db = getFirestore(auth.app);

export default function Home() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [subEmail, setSubEmail] = useState("");
  const [subMessage, setSubMessage] = useState("");

  // Function to save a subscriber's email
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Save the email to the 'subscribers' collection in Firestore
      await addDoc(collection(db, "subscribers"), {
        email: subEmail,
        subscribedAt: new Date()
      });
      setSubMessage("Thank you for subscribing! We will be in touch.");
      setSubEmail(""); // Clear the box
    } catch (error: any) {
      setSubMessage("Error: " + error.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-3xl text-center space-y-8 mb-24">
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight">
          Build a Better Tomorrow
        </h1>
        <p className="text-2xl text-gray-600 leading-relaxed">
          A space dedicated to helping you grow, heal, and become the best version of yourself. One step at a time.
        </p>

        <div className="flex gap-6 justify-center pt-4">
          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300
shadow-lg hover:shadow-xl">
              Join the Community
            </button>
          </Link>

          <Link href="/blog">
            <button className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-xl text-lg border-2 border-gray-200
transition-all duration-300">
              Read the Blog
            </button>
          </Link>
        </div>
      </div>

      {/* Newsletter Subscribe Section - NEW! */}
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay Encouraged</h2>
        <p className="text-gray-600 mb-6">Subscribe to receive updates, stories, and guidance directly to your inbox.</p>

        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            required
            value={subEmail}
            onChange={(e) => setSubEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="w-full py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 font-bold transition duration-300 shadow-md"
          >
            Subscribe
          </button>
        </form>

        {subMessage && (
          <p className="mt-4 text-sm text-green-600 font-medium">{subMessage}</p>
        )}
      </div>
    </main>
  );
}