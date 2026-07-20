"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Database, Network, Code, Settings, Terminal, Workflow, Binary } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { playSound } from "@/utils/soundEffects";

export default function Skills() {

  // Icon selector based on category name
  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("generative")) {
      return <BrainCircuit className="h-5 w-5 text-indigo-400" />;
    }
    if (cat.includes("languages")) {
      return <Cpu className="h-5 w-5 text-violet-400" />;
    }
    if (cat.includes("libraries")) {
      return <Database className="h-5 w-5 text-purple-400" />;
    }
    if (cat.includes("fundamentals")) {
      return <Network className="h-5 w-5 text-cyan-400" />;
    }
    if (cat.includes("frontend")) {
      return <Code className="h-5 w-5 text-blue-400" />;
    }
    return <Settings className="h-5 w-5 text-emerald-400" />;
  };

  // Small logo selector for individual skills
  const getSkillIcon = (name: string) => {
    const skill = name.toLowerCase();
    
    // Programming Languages & Databases
    if (skill === "python") {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-4 w-4 object-contain" />;
    }
    if (skill.includes("sql")) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" className="h-4 w-4 object-contain" />;
    }
    
    // Generative AI & LLMs
    if (skill.includes("openai")) {
      return <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg" alt="OpenAI" className="h-4 w-4 object-contain invert" />;
    }
    if (skill.includes("langchain")) {
      return <img src="https://raw.githubusercontent.com/langchain-ai/langchain/main/docs/static/img/langchain_logo.png" alt="LangChain" className="h-4 w-4 object-contain rounded" />;
    }
    if (skill.includes("llamaindex")) {
      return <span className="h-4 w-4 flex items-center justify-center text-[10px] font-bold bg-amber-500/10 text-amber-400 rounded-md border border-amber-500/20">🦙</span>;
    }
    if (skill.includes("rag") || skill.includes("retrieval")) {
      return <Network className="h-3.5 w-3.5 text-cyan-400" />;
    }
    if (skill.includes("prompt")) {
      return <Terminal className="h-3.5 w-3.5 text-purple-400" />;
    }
    if (skill.includes("agent") || skill.includes("workflow")) {
      return <Workflow className="h-3.5 w-3.5 text-indigo-400" />;
    }
    if (skill.includes("vector") || skill.includes("database")) {
      return <Database className="h-3.5 w-3.5 text-blue-400" />;
    }
    if (skill.includes("groq")) {
      return <Cpu className="h-3.5 w-3.5 text-orange-400" />;
    }
    
    // Libraries & Fundamentals
    if (skill === "numpy") {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" alt="NumPy" className="h-4 w-4 object-contain" />;
    }
    if (skill === "pandas") {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" className="h-4 w-4 object-contain" />;
    }
    if (skill === "scikit-learn") {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-Learn" className="h-4 w-4 object-contain" />;
    }
    if (skill === "matplotlib") {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib" className="h-4 w-4 object-contain" />;
    }
    if (skill === "git") {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="h-4 w-4 object-contain" />;
    }
    if (skill.includes("machine learning") || skill.includes("deep learning") || skill.includes("neural")) {
      return <BrainCircuit className="h-3.5 w-3.5 text-violet-400" />;
    }
    if (skill.includes("structure") || skill.includes("algorithm")) {
      return <Binary className="h-3.5 w-3.5 text-cyan-400" />;
    }
    
    // Frontend
    if (skill === "html") {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="h-4 w-4 object-contain" />;
    }
    if (skill === "css") {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="h-4 w-4 object-contain" />;
    }
    if (skill === "javascript") {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-4 w-4 object-contain rounded-sm" />;
    }
    
    // Tools & IDEs
    if (skill.includes("code") || skill.includes("studio")) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="h-4 w-4 object-contain" />;
    }
    if (skill === "github") {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="h-4 w-4 object-contain invert" />;
    }
    
    // Fallback icon
    return <Cpu className="h-3.5 w-3.5 text-indigo-400" />;
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-grid-overlay border-y border-white/5">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left space-y-3">
            <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-semibold">
              Technical Expertise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Skills & Tooling
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-400 max-w-md mt-4 md:mt-0 leading-relaxed">
            Hover over any node to witness how programming paradigms, AI models, data systems, and tooling link together.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-panel rounded-2xl p-6 border border-white/5 flex flex-col justify-between relative group hover:border-white/10 transition-all duration-300 h-full"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                  {getCategoryIcon(category.category)}
                  <h3 className="font-display font-semibold text-base text-white tracking-wide">
                    {category.category}
                  </h3>
                </div>

                {/* Skill Nodes Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => playSound.playClick()}
                      onMouseEnter={() => playSound.playHover()}
                      className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-sans font-semibold border border-white/10 bg-white/5 text-slate-200 tracking-wide transition-all duration-300 select-none cursor-default hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 hover:border-indigo-400 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:scale-[1.03] flex items-center gap-2"
                    >
                      {getSkillIcon(skill.name)}
                      {skill.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subtle tech detail */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>NODES: {category.skills.length}</span>
                <span className="flex items-center gap-1">
                  <Network className="h-3 w-3" />
                  STABLE
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Legend / Explainer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <span className="inline-flex items-center gap-2 text-slate-500 font-mono text-[10px] bg-white/[0.01] border border-white/5 px-4 py-2 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_#6366f1]" />
            Relationships are mapped relational matrices compiled from internship deliverables and projects.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
