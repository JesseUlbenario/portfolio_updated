"use client";

import React, { useState } from "react";

export default function ProjectCard() {
  const [isOpen, setIsOpen] = useState(false);

  // Mock data for testing inside this standalone card component
  const project = {
    name: "Project Name",
    link: "https://your-landing-page.com",
    // 👇 Tip: Add the image path directly to your data structure later!
    coverImage: "/Photos/GradPhoto.png", 
    description: "Project Description goes here. Describe your design architectures or code specs.",
    tags: ["NEXT.JS", "TAILWIND CSS", "API_FETCH"]
  };

  return (
    <div className="flex items-center justify-center p-8 bg-stone-100 min-h-[500px]">
      
      {/* CARD CONTAINER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative h-96 flex text-left transition-all duration-500 ease-out select-none focus:outline-none group
          ${isOpen ? "w-[650px]" : "w-44"}`}
      >
        
        {/* 1. THE DARK BACKGROUND FOLDER PANEL */}
        <div
          className={`absolute bottom-0 right-0 h-[94%] bg-[#2b1a04] rounded-r-md p-6 pt-8 flex flex-col justify-between transition-all duration-500 ease-out border border-amber-900/20 shadow-xl
            ${isOpen ? "w-[83%] opacity-100 translate-x-0" : "w-[90%] opacity-80 translate-x-2"}`}
        >
          {/* INNER EXPANDED CONTENT */}
          <div
            className={`transition-all duration-300 delay-150 flex flex-col h-full justify-between
              ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          >
            <div>
              <h3 className="text-xl font-bold text-stone-100 font-serif tracking-wide">
                {project.name}
              </h3>
              <p className="text-xs text-stone-400 mt-1 font-sans">
                {project.description}
              </p>
            </div>

            {/* Picture Placeholders Row */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="bg-[#edd6b1] h-36 rounded border border-amber-900/10 p-2 flex items-end shadow-sm hover:scale-[1.02] transition-transform"
                >
                  <span className="text-[10px] text-amber-900/70 font-mono leading-tight">
                    Placeholder for picture
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. OVERLYING FRONT TAB COVER */}
        <div
          className={`absolute bottom-0 left-0 h-[94%] border border-amber-800/40 text-stone-100 p-5 flex flex-col justify-between shadow-2xl transition-all duration-500 ease-out rounded-l-md
          ${isFolderOpen ? "w-[22%] rounded-r-none" : "w-full rounded-r-md group-hover:border-amber-500/30"}
          bg-cover bg-center bg-no-repeat bg-stone-900 bg-gradient-to-t from-black/90 via-black/40 to-black/20 bg-blend-overlay`}
          style={{ backgroundImage: `url('${project.coverImage}')` }} // 👈 DRAWS FROM DATA ARRAY ABOVE
        >
          
          {/* FIXED: Uses 'isOpen' instead of 'isFolderOpen' */}
          {!isOpen && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} 
              className="absolute top-4 right-4 z-30 text-[9px] font-mono text-amber-500/70 hover:text-amber-400 bg-black/60 hover:bg-black/80 border border-amber-900/40 p-1 px-2 rounded flex items-center space-x-1 transition-all duration-200 pointer-events-auto"
            >
              <span>LIVE SITE</span>
              <span>↗</span>
            </a>
          )}

          <div>
            <span className={`font-serif tracking-wide block transition-all duration-300 ${isOpen ? "text-xs font-bold text-amber-400 tracking-normal" : "text-xl font-bold text-stone-100"}`}>
              {project.name}
            </span>
            
            {!isOpen && (
              <p className="text-xs text-amber-100/80 mt-1 font-sans max-w-md line-clamp-1 group-hover:text-stone-200 transition-colors">
                {project.description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[9px] font-mono bg-black/60 text-amber-500/90 px-1.5 py-0.5 rounded border border-amber-900/30">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </button>
    </div>
  );
}