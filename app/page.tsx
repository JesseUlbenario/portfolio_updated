"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // 1. Keep track of which section is currently visible on screen
  const [activeSection, setActiveSection] = useState('#overview-section');

  useEffect(() => {
    const sections = ['#overview-section', '#projects-section', '#certificates-section', '#Awards-section', '#Education-section'];
    
    const observerOptions = {
      root: null, // uses the browser viewport
      rootMargin: '-40% 0px -50% 0px', // triggers when the section occupies the center area of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Track each section element present on the page
    sections.forEach((id) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-y-auto bg-stone-950 text-stone-200 font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* 1. BACKGROUND ENVIRONMENT */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black opacity-90" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Primary Section Container View */}
      <div id="overview-section" className="relative w-full h-screen">
        
        {/* 2. CONSOLIDATED TOP DASHBOARD */}
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 p-6 bg-gradient-to-b from-black/60 via-black/20 to-transparent">
          
          {/* Profile Card & Local Navigation Bundle */}
          <div className="flex items-center space-x-4">
            {/* User Status Badge */}
            <div className="flex items-center space-x-3 bg-stone-900/70 backdrop-blur-md border border-stone-800 p-2 px-4 rounded-md shadow-inner">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/50 bg-stone-950 text-xs font-bold text-amber-500">
                Lv.1
              </div>
              <div>
                <div className="text-sm font-bold tracking-wider uppercase text-stone-100">Dev_Jesse</div>
                <div className="text-[10px] text-stone-500 tracking-widest font-mono">ID: 2022111005-A221</div>
              </div>
            </div>

            {/* Horizontal Navbar Links */}
            <nav className="flex items-center space-x-2 bg-stone-900/40 backdrop-blur-sm border border-stone-800/80 p-1.5 rounded-lg">
              {[
                { label: 'Overview', icon: '⌂', href: '#overview-section' },
                { label: 'Projects', icon: '⧉', href: '#projects-section' },
                { label: 'Certificates', icon: '❂', href: '#certificates-section' },
                { label: 'Awards', icon: '✦', href: '#Awards-section' },
                { label: 'Education', icon: '🕮', href: '#Education-section' },
              ].map((item, idx) => {
                const isActive = activeSection === item.href;

                return (
                  <a 
                    key={idx} 
                    href={item.href}
                    className={`group flex items-center space-x-2 px-3 py-2 rounded-md border transition-all duration-200 cursor-pointer select-none
                      ${isActive 
                        ? 'bg-stone-900 text-amber-500 border-stone-800 shadow-md shadow-black/20' 
                        : 'bg-transparent text-stone-400 border-transparent hover:bg-stone-900/80 hover:border-stone-800 hover:text-stone-200'
                      }`}
                  >
                    <span className={`text-sm transition-colors ${isActive ? 'text-amber-500' : 'text-stone-400 group-hover:text-amber-400'}`}>
                      {item.icon}
                    </span>
                    <span className={`text-[10px] uppercase tracking-widest font-mono transition-colors hidden sm:inline ${isActive ? 'text-amber-500 font-bold' : 'text-stone-400 group-hover:text-stone-200'}`}>
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Global Hub Action Counters (Top Right) */}
          <div className="flex items-center space-x-3 text-xs font-mono self-end md:self-auto">
            <a 
              href="https://github.com/JesseUlbenario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-stone-900/70 backdrop-blur-md border border-stone-800 hover:border-amber-500/40 p-2 px-3 rounded transition-all duration-200 shadow-md"
            >
              <span className="text-stone-500 group-hover:text-amber-500 transition-colors">⚡ GITHUB</span>
              <span className="text-stone-300 font-bold group-hover:text-white transition-colors">↗</span>
            </a>

            <a 
              href="#resume" 
              className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold p-2 px-4 rounded transition-all duration-200 tracking-wider font-sans shadow-lg shadow-amber-900/20 hover:scale-[1.02]"
            >
              RESUME.PDF
            </a>
          </div>
        </header>

        {/* 3. CENTER HERO AREA (Shifted to the left) */}
        <section className="absolute inset-0 z-10 flex items-center justify-start pl-4 md:pl-12 lg:pl-16 pointer-events-none">
          <div className="relative w-full max-w-xl h-[70vh] flex flex-col justify-start pb-0 text-left pointer-events-auto">
            <div className="absolute inset-0 m-auto w-72 h-72 bg-amber-500/5 rounded-full blur-3xl -z-10" />
    
              <div className="w-64 h-96 mb-6 relative overflow-hidden bg-gradient-to-t from-stone-900/80 to-transparent border-b border-stone-800">
                <Image 
                  src="/Photos/GradPhoto.png"
                  alt="Jesse Ulbenario Graduation Photo"
                  fill
                  className="object-cover object-center mix-blend-luminosity opacity-80" 
                />
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-stone-100 sm:text-5xl uppercase font-serif">
                Jesse Ulbenario
              </h1>
              <p className="mt-2 text-[10px] text-justify not-first:font-mono tracking-widest text-amber-500/80">
                Jesse is currently pursuing a bachelor's degree in computer science in Mapua Malayan Colleges Mindanao.
                She has experienced with multiple languages and a knack for frontend and backend development.
                With an eye for design and detail, her strive for making not only appealing but projects that would also benefit communities.
              </p>
          </div>
        </section>

        {/* 4. RIGHT ACTION PANELS (Smooth Expansion Hover Layout) */}
        <section className="absolute right-20 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-5 w-72">
          <a href="#projects-section" className="group block relative overflow-hidden bg-stone-950 text-stone-200 border border-stone-800 p-5 rounded-lg bg-[radial-gradient(circle_at_bottom_left,#ffffff03_35%,transparent_36%)] transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:border-amber-500/40 card-glow cursor-pointer select-none">
            <div className="absolute top-0 right-0 p-2 text-[9px] font-mono text-stone-600 group-hover:text-amber-500/50">
              01 / MAIN
            </div>
            <div className="text-[10px] tracking-widest font-mono text-amber-500 uppercase">Featured Work</div>
            <h3 className="text-xl font-bold font-serif tracking-wide mt-1 text-stone-200 group-hover:text-white">
              SEE MY WORK →
            </h3>
            <p className="text-xs text-stone-500 mt-2 line-clamp-2">
              Explore the Library of past deployments and web designs.
            </p>
            <div className="mt-4 border-t border-dashed border-stone-800 pt-2 flex justify-between text-[10px] font-mono text-stone-500">
              <span>STATUS: ACTIVE</span>
              <span>VER: 2026.4</span>
            </div>
          </a>

          <div className="grid grid-cols-2 gap-4">
            <a href="#certificates-section" className="group block bg-stone-950 border border-stone-800 p-3 rounded-lg transition-all duration-300 ease-out hover:scale-[1.05] hover:-translate-y-0.5 hover:border-amber-500/40 card-glow cursor-pointer select-none">
              <span className="text-[9px] text-stone-500 block font-mono">🗁 COLLECTION</span>
              <span className="text-sm font-bold tracking-wide mt-1 block text-stone-300 group-hover:text-amber-400">Certificates</span>
            </a>

            <a href="#Awards-section" className="group block bg-stone-950 border border-stone-800 p-3 rounded-lg transition-all duration-300 ease-out hover:scale-[1.05] hover:-translate-y-0.5 hover:border-amber-500/40 card-glow cursor-pointer select-none">
              <span className="text-[9px] text-stone-500 block font-mono">🎖 AWARDS</span>
              <span className="text-sm font-bold tracking-wide mt-1 block text-stone-300 group-hover:text-amber-400">Awards</span>
            </a>
          </div>

          <a href="#Education-section" className="group block relative overflow-hidden bg-gradient-to-r from-amber-950/10 to-stone-950 border border-amber-900/40 p-4 rounded-lg transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:border-amber-500/50 card-glow cursor-pointer select-none">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[9px] tracking-widest font-mono text-amber-500 block">TO THE FUTURE</span>
                <h4 className="text-md font-bold tracking-wider text-stone-200 uppercase mt-0.5">See my Journey</h4>
              </div>
              <div className="h-7 w-7 rounded-full border border-amber-600/30 flex items-center justify-center bg-stone-950 text-amber-500 text-xs group-hover:bg-amber-600 group-hover:text-stone-950 transition-all duration-300">
                ✦
              </div>
            </div>
          </a>
        </section>
      </div>

      {/* 5. NEW SCROLLABLE CONTENT AREA */}
      <section 
        id="projects-section" 
        className="relative min-h-screen w-full bg-stone-900 border-t border-stone-800 p-12 md:p-24 z-30"
      >
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="flex items-center space-x-4 mb-16">
            <span className="text-amber-500 font-mono text-xs tracking-widest">[ DEPLOYED_LOG_01 ]</span>
            <h2 className="text-3xl font-serif tracking-wide text-stone-100 uppercase">Project Directory</h2>
          </div>

          {/* Vertical Stack Layout for Expanding Folders */}
          <div className="flex flex-col space-y-6 items-start">
            {[
              {
                id: "solar-kapit-bahay",
                name: "SolarKapitBahay",
                link: "https://solarkapitbahay.vercel.app/",
                coverImage: "/Photos/Background/SolarPanel.jpg",
                description: "A peer-to-peer energy sgaring platform for Philippine Barangay and Communities in Rural areas.",
                tags: ["IoT INTEGRATION", "ENERGY SHARING", "GREEDY ALGORITHM ALLOCATION"],
                placeholders: [
                  "/Photos/SolarKapitBahay/LogIn.png",
                  "/Photos/SolarKapitBahay/Dashboard.png",
                  "/Photos/SolarKapitBahay/EnergyTransfer.png",
                  "/Photos/SolarKapitBahay/Simulation.png",
                  "/Photos/SolarKapitBahay/Households.png",
                  "/Photos/SolarKapitBahay/Alerts.png",
                  "/Photos/SolarKapitBahay/Settings.png"
                ]
              },
              {
                id: "space-library",
                name: "Space Library",
                link: "https://thespacelibrary.vercel.app/",
                coverImage: "/Photos/Background/SpaceBackground.jpg",
                description: "A dynamic, responsive planetary registry platform built to fetch and display real-time astronomical data sets from orbital telemetry clusters.",
                tags: ["NEXT.JS", "TAILWIND CSS", "API_FETCH"],
                placeholders: [
                  "/Photos/SpaceLibrary/Stars.png", 
                  "/Photos/SpaceLibrary/Galaxies.png", 
                  "/Photos/SpaceLibrary/Planets.png"
                ]
              }
            ].map((project) => {
              // Create an explicit check to see if THIS specific folder card is open
              const isFolderOpen = activeSection === `#project-${project.id}`;

              return (
                <button
                  key={project.id}
                  onClick={() => {
                    // Toggle open by updating the state hook we made earlier
                    if (isFolderOpen) {
                      setActiveSection("#projects-section");
                    } else {
                      setActiveSection(`#project-${project.id}`);
                    }
                  }}
                  className={`relative h-80 flex text-left transition-all duration-500 ease-out select-none focus:outline-none group w-full max-w-3xl`}
                >
                  
                  {/* 1. EXTENDED DARK INNER BACKING PANEL */}
                  <div
                    className={`absolute bottom-0 right-0 h-[94%] bg-[#1c1206] rounded-r-md p-6 flex flex-col justify-between transition-all duration-500 ease-out border border-amber-950/40 shadow-xl
                      ${isFolderOpen ? "w-[78%] opacity-100 translate-x-0" : "w-[88%] opacity-0 translate-x-4 pointer-events-none"}`}
                  >
                    <div className={`transition-all duration-300 delay-150 flex flex-col h-full justify-between ${isFolderOpen ? "opacity-100" : "opacity-0"}`}>
                      <div>
                        <h3 className="text-lg font-bold text-stone-100 font-serif tracking-wide">{project.name}</h3>
                        <p className="text-xs text-stone-400 mt-1 font-sans max-w-xl leading-relaxed">{project.description}</p>
                      </div>

                      {/* Dynamic Scrollable Picture Block Container */}
                      <div className="mt-2">
                        {/* Horizontal Scroll Wrapper */}
                        <div className="flex space-x-4 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-amber-800/60 scrollbar-track-stone-950/40">
                          {project.placeholders.map((imagePath, i) => (
                          <div 
                          key={i} 
                          /* UPDATED SIZE CLASSES AND REMOVED THE OVERLAY MIX BLEND */
                          className="h-44 w-64 shrink-0 rounded border border-amber-900/10 p-3 flex flex-col justify-between shadow-md hover:scale-[1.02] transition-transform bg-cover bg-center bg-no-repeat bg-stone-800"
                          style={{ backgroundImage: `url('${imagePath}')` }}
                          >
                          {/* Optional text labels styled with text-shadow for readability without an overlay */}
                          <span className="text-xs text-stone-100 font-mono leading-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Screenshot {i+1}
                          </span>
                        </div>
                      ))}
                      </div>
                    </div>
                    </div>
                  </div>

                  {/* 2. OVERLYING FRONT TAB COVER */}
                  <div
                    className={`absolute bottom-0 left-0 h-[94%] bg-[#543206] border border-amber-800/40 text-stone-100 p-5 flex flex-col justify-between shadow-2xl transition-all duration-500 ease-out rounded-l-md
                      ${isFolderOpen ? "w-[22%] rounded-r-none" : "w-full rounded-r-md group-hover:border-amber-500/30"}`}
                  >
                    
                    {/* 👇 COINCIDED ADDITION: TOP-RIGHT LINK BUTTON MOVED INTO MAIN FLOW */}
                    {!isFolderOpen && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} 
                        className="absolute top-4 right-4 z-30 text-[9px] font-mono text-amber-500/70 hover:text-amber-400 bg-black/40 hover:bg-black/60 border border-amber-900/40 p-1 px-2 rounded flex items-center space-x-1 transition-all duration-200 pointer-events-auto"
                      >
                        <span>LIVE SITE</span>
                        <span>↗</span>
                      </a>
                    )}

                    <div>
                      <span className={`font-serif tracking-wide block transition-all duration-300 ${isFolderOpen ? "text-xs font-bold text-amber-400 tracking-normal" : "text-xl font-bold text-stone-100"}`}>
                        {project.name}
                      </span>
                      
                      {!isFolderOpen && (
                        <p className="text-xs text-amber-100/50 mt-1 font-sans max-w-md line-clamp-1 group-hover:text-stone-300 transition-colors">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[9px] font-mono bg-black/40 text-amber-500/90 px-1.5 py-0.5 rounded border border-amber-900/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Placeholder sections for the remaining navbar targets */}
      <section id="certificates-section" className="relative min-h-screen w-full bg-stone-950 border-t border-stone-900 p-12 md:p-24 z-30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-100 uppercase">Certifications & Achievements</h2>
        </div>
      </section>

      <section id="Awards-section" className="relative min-h-screen w-full bg-stone-900 border-t border-stone-800 p-12 md:p-24 z-30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-100 uppercase">Accomplishments & Awards</h2>
        </div>
      </section>

      {/* Placeholder sections for the remaining navbar targets */}
      <section id="Education-section" className="relative min-h-screen w-full bg-stone-950 border-t border-stone-900 p-12 md:p-24 z-30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-100 uppercase">Skills & Education</h2>
        </div>
      </section>

      {/* Decorative Bottom Corner Watermark */}
      <footer className="fixed bottom-4 left-6 z-50 text-[10px] font-mono text-stone-600 tracking-widest pointer-events-none">
        SYSTEM CONFIGURATION // SECURE_HUB_v1.0
      </footer>

    </main>
  );
}