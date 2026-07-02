import React from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-stone-950 text-stone-200 font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* 1. BACKGROUND ENVIRONMENT */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black opacity-90" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* 2. CONSOLIDATED TOP DASHBOARD */}
      <header className="absolute top-0 left-0 right-0 z-20 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 p-6 bg-gradient-to-b from-black/60 via-black/20 to-transparent">
        
        {/* Profile Card & Local Navigation Bundle */}
        <div className="flex items-center space-x-4">
          {/* User Status Badge */}
          <div className="flex items-center space-x-3 bg-stone-900/70 backdrop-blur-md border border-stone-800 p-2 px-4 rounded-md shadow-inner">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/50 bg-stone-950 text-xs font-bold text-amber-500">
              Lv.1
            </div>
            <div>
              <div className="text-sm font-bold tracking-wider uppercase text-stone-100">Dev_Jesse</div>
              <div className="text-[10px] text-stone-500 tracking-widest font-mono">ID: 2026-A222</div>
            </div>
          </div>

          {/* Horizontal Navbar Links */}
          <nav className="flex items-center space-x-2 bg-stone-900/40 backdrop-blur-sm border border-stone-800/80 p-1.5 rounded-lg">
            {[
              { label: 'Projects', icon: '⌂' },
              { label: 'Achievements', icon: '⚿' },
              { label: 'Sandbox', icon: '⛭' },
              { label: 'Logs', icon: '✉' },
            ].map((item, idx) => (
              <button 
                key={idx} 
                className="group flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-stone-900/80 border border-transparent hover:border-stone-800 transition-all duration-200"
              >
                <span className="text-sm text-stone-400 group-hover:text-amber-400 transition-colors">{item.icon}</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-stone-200 font-mono transition-colors hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Global Hub Action Counters (Top Right) */}
        <div className="flex items-center space-x-3 text-xs font-mono self-end md:self-auto">
          
          {/* GitHub Portal (Replaced Compiler Counter) */}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 bg-stone-900/70 backdrop-blur-md border border-stone-800 hover:border-amber-500/40 p-2 px-3 rounded transition-all duration-200 shadow-md"
          >
            <span className="text-stone-500 group-hover:text-amber-500 transition-colors">⚡ GITHUB_HUB</span>
            <span className="text-stone-300 font-bold group-hover:text-white transition-colors">↗</span>
          </a>

          {/* Repository Total State */}
          <div className="flex items-center space-x-2 bg-stone-900/70 backdrop-blur-md border border-stone-800 p-2 px-3 rounded shadow-md">
            <span className="text-stone-500">⭐ REPOS</span>
            <span className="text-amber-500 font-bold">24</span>
          </div>

          {/* Action Call for Resume */}
          <a 
            href="#resume" 
            className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold p-2 px-4 rounded transition-all duration-200 tracking-wider font-sans shadow-lg shadow-amber-900/20 hover:scale-[1.02]"
          >
            RESUME.PDF
          </a>
        </div>
      </header>

      {/* 3. CENTER HERO AREA (Shifted to the left) */}
      <section className="absolute inset-0 z-10 flex items-center justify-start pl-12 md:pl-32 lg:pl-48 pointer-events-none">
        <div className="relative w-full max-w-sm h-[70vh] flex flex-col justify-end pb-12 text-left pointer-events-auto">
          {/* Ambient glow adjusted to sit behind the shifted content */}
          <div className="absolute inset-0 m-auto w-72 h-72 bg-amber-500/5 rounded-full blur-3xl -z-10" />
          
          {/* Main Visual Placeholder (Aligned left) */}
          <div className="w-64 h-96 mb-6 bg-gradient-to-t from-stone-900/80 to-transparent border-b border-stone-800 flex items-center justify-center text-stone-600 italic text-sm">
            [ Insert Minimalist Graphic / Avatar Illustration Here ]
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-stone-100 sm:text-5xl uppercase font-serif">
            Jesse Ulbenario
          </h1>
          <p className="mt-2 text-sm font-mono tracking-widest text-amber-500/80">
            SOFTWARE ENGINEER / FRONTEND DEVELOPER
          </p>
        </div>
      </section>

{/* 4. RIGHT ACTION PANELS (Smooth Expansion Hover Layout) */}
      <section className="absolute right-20 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-5 w-72">
        
        {/* CARD 1: MAIN TICKET BANNER */}
        <a href="#" className="group block relative overflow-hidden bg-stone-950 text-stone-200 border border-stone-800 p-5 rounded-lg bg-[radial-gradient(circle_at_bottom_left,#ffffff03_35%,transparent_36%)] transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:border-amber-500/40 card-glow cursor-pointer select-none">
          <div className="absolute top-0 right-0 p-2 text-[9px] font-mono text-stone-600 group-hover:text-amber-500/50">
            01 / MAIN
          </div>
          <div className="text-[10px] tracking-widest font-mono text-amber-500 uppercase">Featured Work</div>
          <h3 className="text-xl font-bold font-serif tracking-wide mt-1 text-stone-200 group-hover:text-white">
            ENTER THE SHOW →
          </h3>
          <p className="text-xs text-stone-500 mt-2 line-clamp-2">
            Explore the Space Library, algorithmic interactive deployments, and web architectures.
          </p>
          <div className="mt-4 border-t border-dashed border-stone-800 pt-2 flex justify-between text-[10px] font-mono text-stone-500">
            <span>STATUS: ACTIVE</span>
            <span>VER: 2026.4</span>
          </div>
        </a>

        {/* CARDS 2 & 3: SMALLER EXPANDING PANELS */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Change the <a> tag to a Next.js <Link> */}
          <Link href="/projects" className="group block bg-stone-950 border border-stone-800 p-3 rounded-lg transition-all duration-300 ease-out hover:scale-[1.05] hover:-translate-y-0.5 hover:border-amber-500/40 card-glow cursor-pointer select-none">
          <span className="text-[9px] text-stone-500 block font-mono">📂 COLLECTION</span>
          <span className="text-sm font-bold tracking-wide mt-1 block text-stone-300 group-hover:text-amber-400">Archive</span>
          </Link>

          <a href="#" className="group block bg-stone-950 border border-stone-800 p-3 rounded-lg transition-all duration-300 ease-out hover:scale-[1.05] hover:-translate-y-0.5 hover:border-amber-500/40 card-glow cursor-pointer select-none">
            <span className="text-[9px] text-stone-500 block font-mono">🧪 LABS</span>
            <span className="text-sm font-bold tracking-wide mt-1 block text-stone-300 group-hover:text-amber-400">Sandbox</span>
          </a>

        </div>

        {/* CARD 4: TRANSMISSION CALL TO ACTION */}
        <a href="#" className="group block relative overflow-hidden bg-gradient-to-r from-amber-950/10 to-stone-950 border border-amber-900/40 p-4 rounded-lg transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:border-amber-500/50 card-glow cursor-pointer select-none">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[9px] tracking-widest font-mono text-amber-500 block">TRANSMISSION</span>
              <h4 className="text-md font-bold tracking-wider text-stone-200 uppercase mt-0.5">Summon Connection</h4>
            </div>
            <div className="h-7 w-7 rounded-full border border-amber-600/30 flex items-center justify-center bg-stone-950 text-amber-500 text-xs group-hover:bg-amber-600 group-hover:text-stone-950 transition-all duration-300">
              ✦
            </div>
          </div>
        </a>

      </section>

      {/* Decorative Bottom Corner Watermark */}
      <footer className="absolute bottom-4 left-6 z-20 text-[10px] font-mono text-stone-600 tracking-widest">
        SYSTEM CONFIGURATION // SECURE_HUB_v1.0
      </footer>

    </main>
  );
}