// app/blog/page.tsx
import Link from "next/link";

const posts = [
  {
    slug: "repocraft-genesis",
    title: "From Zero to GitHub in 60 Seconds: The Birth of RepoCraft & Genesis Engine",
    excerpt: "How a developer from Durban turned a family legacy into free, open‑source tools for the world.",
    date: "29 April 2026",
  },
  {
    slug: "first-post",
    title: "Welcome to App For Good",
    excerpt: "A new platform dedicated to helping you grow, heal, and become the best version of yourself.",
    date: "April 2026",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1E1B4B] via-[#312E81] to-[#1E1B4B] text-white py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-extrabold text-center">📖 Blog</h1>
        <div className="space-y-6 mt-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[#3730A3] hover:bg-[#4C1D95] rounded-2xl p-6 transition shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#E0E7FF]">{post.title}</h2>
              <p className="text-[#C4B5FD] mt-2">{post.excerpt}</p>
              <p className="text-[#818CF8] text-sm mt-3">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}