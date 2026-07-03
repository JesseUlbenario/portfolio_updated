"use client";

import React from 'react';

// 1. Define the structural Types for the props coming into the card
interface CertificateCardProps {
  name: string;
  image: string;
}

export default function CertificateCard({ name, image }: CertificateCardProps) {
  return (
    <div className="relative w-full aspect-square max-w-sm bg-[#221503] border border-amber-900/20 p-4 rounded-[2rem] flex flex-col justify-between shadow-2xl group hover:border-amber-600/30 transition-all duration-300 select-none">
      
      {/* Inner Accent Vector Thin Border Outline */}
      <div className="absolute inset-2 border border-amber-600/30 rounded-[1.6rem] pointer-events-none group-hover:border-amber-500/50 transition-colors" />

      {/* Top Picture Container Box */}
      <div 
        className="w-full h-[68%] bg-[#f2dfc4] rounded-[1.2rem] flex items-center justify-center p-4 text-center border border-amber-950/10 shadow-md bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-[1.01]"
        style={image ? { backgroundImage: `url('${image}')` } : {}}
      >
        {!image && (
          <p className="text-sm text-stone-800/70 font-sans leading-relaxed tracking-wide">
            Placeholder<br />for picture
          </p>
        )}
      </div>

      {/* Bottom Caption Area */}
      <div className="h-[28%] flex items-center justify-center pb-2 px-4 z-10">
        <h3 className="text-xl font-medium tracking-wide text-stone-100 text-center font-sans">
          {name}
        </h3>
      </div>

    </div>
  );
}