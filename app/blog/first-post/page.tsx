// app/blog/first-post/page.tsx
import Link from 'next/link';

export default function FirstPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">
      <article className="max-w-3xl w-full">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Taking the First Step
        </h1>
        <p className="text-sm text-gray-400 mb-8 border-b-2 pb-4">
          Written by Champ • {new Date().toLocaleDateString()}
        </p>

        <div className="prose lg:prose-xl text-gray-700 space-y-6 leading-relaxed">
          <p>
            When we are going through difficult times, the world can feel overwhelming. The mountain ahead looks too steep, and the path
forward feels impossible to find.
          </p>
          <p>
            But the secret to healing isn't about making giant leaps. It's about taking one small, simple step forward today. Just one.
          </p>
          <p>
            Whether that step is writing a line of code, going for a short walk, or simply taking a deep breath—you are moving forward. You
are building a better tomorrow, piece by piece.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-800">
            "You don't have to see the whole staircase, just take the first step." — Martin Luther King Jr.
          </blockquote>
          <p>
            Keep going. You are doing better than you think.
          </p>
        </div>

        <div className="mt-12">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to The Blog
          </Link>
        </div>
      </article>
    </main>
  );
}