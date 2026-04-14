// app/blog/page.tsx
import Link from 'next/link';

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10 border-b-2 pb-4">
          The Blog
        </h1>

        <p className="text-xl text-gray-600 mb-12">
          Thoughts, stories, and guides to help you grow and heal.
        </p>

        {/* Here is our list of blog posts */}
        <div className="space-y-8">

          {/* Link to our first post */}
          <Link href="/blog/first-post" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition
duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Taking the First Step</h2>
            <p className="text-gray-600">Healing and growing doesn't happen overnight. It starts with one small step forward.</p>
            <span className="text-sm text-gray-400 mt-3 block">Read more →</span>
          </Link>

        </div>

        {/* Link back to the home page */}
        <div className="mt-12">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}