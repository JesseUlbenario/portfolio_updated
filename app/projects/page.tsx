import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-stone-900 text-stone-100 p-12">
      <h1 className="text-3xl font-serif text-amber-500">PROJECTS LOG</h1>
      <p className="mt-4 text-stone-400">Welcome to the archive directory.</p>
      
      <Link href="/app/page.tsx" className="inline-block mt-8 text-xs font-mono text-stone-500 hover:text-amber-400">
        ← RETURN TO MAIN HUB
      </Link>
    </main>
  );
}