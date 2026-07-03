"use client";

import React from 'react';

interface AwardCardProps {
  name: string;
  image: string;
  reflection: string;
}

export default function AwardCard({ name, image, reflection }: AwardCardProps) {
  return (
    <div className="relative w-full bg-[#221503] border border-amber-900/20 p-5 rounded-[2rem] flex flex-col md:flex-row gap-6 shadow-2xl group hover:border-amber-600/30 transition-all duration-300 select-none">
      
      {/* Inner Accent Vector Thin Border Outline */}
      <div className="absolute inset-2 border border-amber-600/30 rounded-[1.6rem] pointer-events-none group-hover:border-amber-500/50 transition-colors" />

      {/* Left-Side Picture Container Box */}
      <div 
        className="w-full md:w-[45%] aspect-[4/3] md:aspect-auto md:h-64 bg-[#f2dfc4] rounded-[1.2rem] flex items-center justify-center p-4 text-center border border-amber-950/10 shadow-md bg-cover bg-center bg-no-repeat shrink-0 transition-transform duration-300 group-hover:scale-[1.01]"
        style={image ? { backgroundImage: `url('${image}')` } : {}}
      >
        {!image && (
          <p className="text-sm text-stone-800/70 font-sans leading-relaxed tracking-wide">
            Placeholder<br />for picture
          </p>
        )}
      </div>

      {/* Right-Side Content Panel Area */}
      <div className="flex-1 flex flex-col pt-2 pb-2 pr-2 z-10 text-left">
        {/* Award Title Header */}
        <h3 className="text-2xl font-serif tracking-wide text-stone-100 font-medium mb-6 group-hover:text-amber-400 transition-colors">
          {name}
        </h3>

        {/* Reflection Divider & Label */}
        <div className="border-b border-amber-600/30 pb-1 mb-3">
          <span className="text-base font-serif tracking-wide text-stone-200 block">
            Reflection
          </span>
        </div>

        {/* Reflection Body Text Paragraph */}
        <p className="text-sm text-stone-400 font-sans leading-relaxed tracking-wide text-justify">
          {reflection || "No reflection logged for this accomplishment yet."}
        </p>
      </div>

    </div>
  );
}