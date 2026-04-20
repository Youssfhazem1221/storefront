"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function WelcomeAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Only run the animation once per session
    const hasSeenAnimation = sessionStorage.getItem("hasSeenWelcome");
    if (hasSeenAnimation) {
      setIsVisible(false);
      return;
    }

    // Start the fade out sequence
    const timer1 = setTimeout(() => {
      setIsAnimating(true);
    }, 2000);

    // Completely remove from DOM
    const timer2 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }, 3000); // 2000 + 1000ms transition

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isAnimating ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative w-80 h-40 sm:w-96 sm:h-48 mix-blend-screen animate-pulse">
        <Image 
          src="/images/logo.jpeg" 
          alt="Loading..." 
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
