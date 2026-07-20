"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, FolderGit2, Briefcase, Cpu, GraduationCap, Award, Mail } from "lucide-react";
import { playSound } from "@/utils/soundEffects";

interface FloatingNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: "hero", label: "Core", icon: Home, key: "1" },
  { id: "projects", label: "Projects", icon: FolderGit2, key: "2" },
  { id: "experience", label: "Experience", icon: Briefcase, key: "3" },
  { id: "skills", label: "Skills", icon: Cpu, key: "4" },
  { id: "education", label: "Education", icon: GraduationCap, key: "5" },
  { id: "certificates", label: "Credentials", icon: Award, key: "6" },
  { id: "contact", label: "Connect", icon: Mail, key: "7" },
];

export default function FloatingNav({ activeSection, setActiveSection }: FloatingNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in input fields
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const item = navItems.find((item) => item.key === e.key);
      if (item) {
        e.preventDefault();
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(item.id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setActiveSection]);

  // Track scroll position to change background transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    playSound.playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[96%] sm:w-auto`}
    >
      <nav
        className={`glass-nav rounded-full px-2 py-1.5 sm:px-3 sm:py-2 flex items-center justify-between sm:justify-center gap-0.5 sm:gap-2 transition-all duration-300 w-full sm:w-auto ${
          isScrolled ? "bg-opacity-80 py-1 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-opacity-40"
        }`}
      >
        {/* Subtle Brand Logo */}
        <div
          onClick={() => handleNavClick("hero")}
          onMouseEnter={() => playSound.playHover()}
          className="hidden md:flex items-center gap-2 pl-3 pr-2 mr-2 border-r border-white/10 cursor-pointer select-none"
        >
          <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="font-display font-semibold tracking-wider text-xs uppercase text-indigo-400">
            GK.AI
          </span>
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={() => playSound.playHover()}
              className="relative px-1 py-1 sm:px-3.5 sm:py-2 rounded-full text-[8px] sm:text-xs font-medium tracking-wide transition-all duration-300 flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5 outline-none group flex-1 sm:flex-initial text-center"
            >
              {/* Active Background Slide */}
              {isActive && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/10 -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* Icon */}
              <Icon
                className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-colors duration-300 ${
                  isActive ? "text-indigo-400" : "text-slate-400 group-hover:text-slate-200"
                }`}
              />

              {/* Label */}
              <span
                className={`transition-colors duration-300 font-sans text-[7.5px] xs:text-[8px] sm:text-xs tracking-tight sm:tracking-normal ${
                  isActive ? "text-white font-semibold" : "text-slate-400 group-hover:text-slate-200"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </motion.header>
  );
}
