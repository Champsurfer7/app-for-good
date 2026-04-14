// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "./components/Chatbot"; // This brings in your chatbot

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App For Good",
  description: "Created with love by Champ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Chatbot /> {/* This makes the chatbot appear on every page */}
      </body>
    </html>
  );
}