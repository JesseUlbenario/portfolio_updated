"use client";

import React, { useState } from "react";

export default function ProjectCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center p-8 bg-stone-100 min-h-[500px]">
      
      {/* CARD CONTAINER BUTTON */}
      {/* The master wrapper handles the relative positioning and transitions its width */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative h-96 flex text-left transition-all duration-500 ease-out select-none focus:outline-none group
          ${isOpen ? "w-[650px]" : "w-44"}`}
      >
        
        {/* 1. THE DARK BACKGROUND FOLDER PANEL */}
        {/* This mimics your dark brown backing structure. It expands outwards when open. */}
        <div
          className={`absolute bottom-0 right-0 h-[94%] bg-[#2b1a04] rounded-r-md p-6 pt-8 flex flex-col justify-between transition-all duration-500 ease-out border border-amber-900/20 shadow-xl
            ${isOpen ? "w-[83%] opacity-100 translate-x-0" : "w-[90%] opacity-80 translate-x-2"}`}
        >
          {/* INNER EXPANDED CONTENT (Only fully visible when open) */}
          <div
            className={`transition-all duration-300 delay-150 flex flex-col h-full justify-between
              ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          >
            {/* Header Text Group */}
            <div>
              <h3 className="text-xl font-bold text-stone-100 font-serif tracking-wide">
                Project Name
              </h3>
              <p className="text-xs text-stone-400 mt-1 font-sans">
                Project Description goes here. Describe your design architectures or code specs.
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

        {/* 2. THE LIGHTER FRONT COVER TABS */}
        {/* This represents your main light brown card component block holding the title */}
        <div
          className={`absolute bottom-0 left-0 h-[94%] bg-[#6e4208] border border-amber-700/30 text-stone-100 p-4 flex flex-col justify-end shadow-2xl transition-all duration-500 ease-out rounded-l-md
            ${isOpen ? "w-[22%] rounded-r-none" : "w-[90%] rounded-r-md group-hover:-translate-x-1"}`}
        >
          {/* Cover Label (Rotates or rearranges text dynamically based on state) */}
          <div className="w-full">
            <span
              className={`font-serif tracking-wide block transition-all duration-300
                ${isOpen ? "text-xs font-bold text-amber-400/80 truncate" : "text-lg font-bold"}`}
            >
              Project Name
            </span>
            
            {/* Tiny interactive action signal visible when closed */}
            {!isOpen && (
              <span className="text-[9px] font-mono text-amber-500/60 block mt-1 animate-pulse">
                CLICK TO OPEN // ↗
              </span>
            )}
          </div>
        </div>

      </button>
    </div>
  );
}