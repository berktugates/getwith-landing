"use client";
import React from "react";
import Image from "next/image";
import { AppPromotion } from "./AppPromotion";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

export const HeroSection: React.FC = () => {
  return (
    <div
      id="hero-section"
      className="flex flex-col items-center justify-center"
    >
      <div
        id="slogan-section"
        className="w-full flex flex-col items-center relative justify-center border border-gray-200 rounded-xl mt-12 px-6 py-12"
      >
        <span className="flex flex-col text-center text-white text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
          Swipe. Match.
        </span>
        <span className="text-green-500 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl mb-4">
          Get Hired!
        </span>
        <AnimatedTextCycle
          words={[
            "Project Manager",
            "DevOps Engineer",
            "FullStack Engineer",
            "Backend Engineer",
          ]}
        />
        <div
          id="dot-status-section"
          className="flex items-center justify-center gap-1 mt-4"
        >
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400"></span>
          </span>
          <p className="text-xs text-orange-400">Currently in development.</p>
        </div>
        <Image
          src={"home/corner-top-left.svg"}
          width={10}
          height={10}
          className="size-10 absolute -top-2.5 -left-2.5"
          alt="top-left"
        />
        <Image
          src={"home/corner-top-right.svg"}
          width={10}
          height={10}
          className="size-10 absolute -top-2.5 -right-2.5"
          alt="top-right"
        />
        <Image
          src={"home/corner-bottom-left.svg"}
          width={10}
          height={10}
          className="size-10 absolute -bottom-2.5 -left-2.5"
          alt="bottom-left"
        />
        <Image
          src={"home/corner-bottom-right.svg"}
          width={10}
          height={10}
          className="size-10 absolute -bottom-2.5 -right-2.5"
          alt="bottom-right"
        />
      </div>
      <AppPromotion />
    </div>
  );
};
