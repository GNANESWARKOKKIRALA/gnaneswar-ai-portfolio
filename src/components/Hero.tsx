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
            {/* Subtle blue/cyan pulsing glowing effect behind the square */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 to-blue-500/15 rounded-3xl blur-3xl pointer-events-none"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Radar/Sonar Pulse Effect (Digital Pulses) - Square shape */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-cyan-500/25 pointer-events-none z-0"
              animate={{
                scale: [1, 1.12, 1.25],
                opacity: [0.6, 0.3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl border border-purple-500/20 pointer-events-none z-0"
              animate={{
                scale: [1, 1.16, 1.32],
                opacity: [0.4, 0.15, 0],
              }}
              transition={{
                duration: 4,
                delay: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            {/* Futuristic Multi-Layered HUD SVG */}
            <svg
              className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none z-0"
              viewBox="0 0 100 100"
            >
              <defs>
                {/* Neon Cyan to Purple gradients */}
                <linearGradient id="hud-outer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" /> {/* Neon Cyan */}
                  <stop offset="50%" stopColor="#3b82f6" /> {/* Neon Blue */}
                  <stop offset="100%" stopColor="#c084fc" /> {/* Purple */}
                </linearGradient>
                <linearGradient id="hud-inner-grad" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" /> {/* Purple */}
                  <stop offset="50%" stopColor="#3b82f6" /> {/* Neon Blue */}
                  <stop offset="100%" stopColor="#22d3ee" /> {/* Neon Cyan */}
                </linearGradient>
              </defs>

              {/* 1. Outer Ring: Clockwise rotation */}
              <motion.g
                style={{ transformOrigin: "50px 50px" }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                {/* Thick segmented outer ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="url(#hud-outer-grad)"
                  strokeWidth="1.8"
                  fill="none"
                  strokeDasharray="40 10 15 8 75 12 30 10"
                  className="opacity-90 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                />
                
                {/* Dotted tracking orbit ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="47.5"
                  stroke="#22d3ee"
                  strokeWidth="0.4"
                  fill="none"
                  strokeDasharray="2 6"
                  className="opacity-50"
                />

                {/* Orbiting glowing particle 1 */}
                <circle
                  cx="50"
                  cy="4"
                  r="1.2"
                  fill="#22d3ee"
                  className="drop-shadow-[0_0_5px_#22d3ee]"
                />
              </motion.g>

              {/* 2. Inner Ring: Counter-clockwise rotation */}
              <motion.g
                style={{ transformOrigin: "50px 50px" }}
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              >
                {/* Inner Segmented Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="url(#hud-inner-grad)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeDasharray="25 15 50 10 15 12 40 8"
                  className="opacity-80 drop-shadow-[0_0_6px_rgba(192,132,252,0.5)]"
                />

                {/* Inner dotted accent line */}
                <circle
                  cx="50"
                  cy="50"
                  r="40.5"
                  stroke="#c084fc"
                  strokeWidth="0.4"
                  fill="none"
                  strokeDasharray="1 4"
                  className="opacity-45"
                />

                {/* Orbiting glowing particle 2 */}
                <circle
                  cx="50"
                  cy="8"
                  r="1"
                  fill="#e879f9"
                  className="drop-shadow-[0_0_4px_#e879f9]"
                />
              </motion.g>
            </svg>

            {/* Static Telemetry Ticks / Outer Crosshair accents */}
            <div className="absolute inset-0 pointer-events-none z-10 scale-105 opacity-80">
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400/40" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400/40" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400/40" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400/40" />
            </div>

            {/* Square DP Container (Transparent background outside, perfect border, soft glow) */}
            <div className="relative w-full h-full rounded-2xl border border-cyan-500/20 overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-500 group-hover:border-cyan-400/45 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] z-10 bg-slate-950/40 backdrop-blur-[2px]">
              <img
                src="/profile.png"
                alt={portfolioData.fullName}
                className="w-full h-full object-cover rounded-2xl scale-[1.55] object-[center_36%] transition-all duration-500"
              />

              {/* Scanning light sweeps */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-20">
                <motion.div
                  className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
                  animate={{
                    top: ["-25%", "110%"]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-x-0 h-[1.5px] bg-cyan-400/30 shadow-[0_0_6px_rgba(34,211,238,0.5)]"
                  animate={{
                    top: ["-25%", "110%"]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Soft overlay gradient to blend bottom edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
