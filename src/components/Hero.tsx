"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Github, Linkedin, Mail, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { playSound } from "@/utils/soundEffects";

export default function Hero() {
  const scrollSection = (id: string) => {
    playSound.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-grid-overlay"
    >
      {/* Background soft glowing lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Asymmetric typography and content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Animated Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6 text-xs text-slate-300 font-sans shadow-[0_4px_12px_rgba(0,0,0,0.2)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="font-display font-semibold tracking-wider uppercase text-[9px] text-indigo-400">
              Aspiring Python & Gen AI Developer
            </span>
          </motion.div>
          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-bold tracking-tight leading-none text-white">
              Full Stack Python &
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Generative AI Developer
              </span>
            </h1>
            <p className="font-display text-base sm:text-lg font-medium tracking-wide text-slate-400 mt-2">
              {portfolioData.fullName} {"//"} B.Tech CSE Graduate 2026
            </p>
          </motion.div>

          {/* Objective Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mt-6"
          >
            A Computer Science & Engineering graduate from Tirumala Engineering College, specializing in Full Stack Python & Generative AI development. Experienced in building relational database schemas and deploying RAG-powered LLM applications. Developed production-ready document Q&A agents and personalized fitness recommendation models during academic labs and internship training.
          </motion.p>

          {/* Call to action & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <button
              onClick={() => scrollSection("projects")}
              onMouseEnter={() => playSound.playHover()}
              className="px-6 py-3 rounded-full bg-white text-black font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-slate-200 shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center gap-2 group cursor-pointer"
            >
              Explore Projects
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </button>

            <a
              href="/Gnaneswar_Kokkirala_resume.pdf"
              download="Gnaneswar_Kokkirala_Resume.pdf"
              onClick={() => playSound.playClick()}
              onMouseEnter={() => playSound.playHover()}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 group cursor-pointer backdrop-blur-sm"
            >
              <Download className="h-4 w-4 text-indigo-400 group-hover:animate-bounce" />
              Download Resume
            </a>

            <button
              onClick={() => scrollSection("contact")}
              onMouseEnter={() => playSound.playHover()}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 group cursor-pointer backdrop-blur-sm"
            >
              <Terminal className="h-4 w-4 text-indigo-400 group-hover:animate-pulse" />
              Inference Console
            </button>

            <div className="flex items-center gap-3 ml-2 sm:ml-4 border-l border-white/10 pl-4 sm:pl-6 h-8">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound.playClick()}
                onMouseEnter={() => playSound.playHover()}
                className="text-slate-400 hover:text-white transition-colors duration-200"
                title="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound.playClick()}
                onMouseEnter={() => playSound.playHover()}
                className="text-slate-400 hover:text-white transition-colors duration-200"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                onClick={() => playSound.playClick()}
                onMouseEnter={() => playSound.playHover()}
                className="text-slate-400 hover:text-white transition-colors duration-200"
                title="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Dynamic glowing brain/orb core and System Telemetry */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center mt-8 lg:mt-0">
          
          {/* Animated Profile Photo with AI Glow Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center mb-8 group"
          >
            {/* Soft glowing ambient rings (circular) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            {/* Outer Rotating HUD Coil (Clockwise) */}
            <motion.svg
              className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none z-0"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              <defs>
                <linearGradient id="cyber-coil-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Concentric broken outer ring */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#cyber-coil-grad-1)"
                strokeWidth="1.2"
                fill="none"
                strokeDasharray="15 8 5 8 40 10"
                className="opacity-60 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]"
              />
              {/* Orbiting tech ticks */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="#6366f1"
                strokeWidth="0.6"
                fill="none"
                strokeDasharray="2 12"
                className="opacity-40"
              />
            </motion.svg>

            {/* Middle Rotating HUD Coil (Counter-Clockwise) */}
            <motion.svg
              className="absolute -inset-5 w-[calc(100%+40px)] h-[calc(100%+40px)] pointer-events-none z-0"
              viewBox="0 0 100 100"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              <defs>
                <linearGradient id="cyber-coil-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* Futuristic cog/coil-style ring */}
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="url(#cyber-coil-grad-2)"
                strokeWidth="1.8"
                fill="none"
                strokeDasharray="8 6"
                className="opacity-50 drop-shadow-[0_0_4px_rgba(6,182,212,0.4)]"
              />
              <circle
                cx="50"
                cy="50"
                r="43"
                stroke="#06b6d4"
                strokeWidth="0.8"
                fill="none"
                strokeDasharray="80 20 40 20"
                className="opacity-70"
              />
            </motion.svg>

            {/* Inner Cyber Border (Clockwise) */}
            <motion.svg
              className="absolute -inset-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] pointer-events-none z-0"
              viewBox="0 0 100 100"
              animate={{ rotate: 180 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
              <circle
                cx="50"
                cy="50"
                r="47"
                stroke="#a855f7"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 20 15 10"
                className="opacity-50"
              />
            </motion.svg>
            
            {/* Circular glass photo container */}
            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-500 group-hover:border-cyan-400/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] z-10 bg-slate-950/80">
              <img
                src="/profile.png"
                alt={portfolioData.fullName}
                className="w-full h-full object-cover rounded-full scale-100 group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Bottom gradient overlay adapted for circle */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              {/* Tech grid overlay to enhance cyber look */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:8px_8px] mix-blend-overlay pointer-events-none opacity-60" />
            </div>

            {/* Orbiting detail nodes on the circle bounds */}
            <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1] animate-pulse z-20 border border-white/10" />
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] animate-pulse z-20 border border-white/10" style={{ animationDelay: "1s" }} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
