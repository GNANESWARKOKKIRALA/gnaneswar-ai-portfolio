"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
  color: string;
}

export default function ClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Ignore click if it's on a button/link that has its own click animation, or just trigger globally
      const colors = ["#6366f1", "#a855f7", "#06b6d4", "#22d3ee", "#ec4899"];
      const newSparks: Spark[] = [];
      const baseId = Date.now();

      // Create a burst of 7 sparks radiating outward
      for (let i = 0; i < 7; i++) {
        newSparks.push({
          id: baseId + i,
          x: e.clientX,
          y: e.clientY,
          angle: (i / 7) * Math.PI * 2 + Math.random() * 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      setSparks((prev) => [...prev, ...newSparks]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Clean up sparks after their animation duration (800ms)
  useEffect(() => {
    if (sparks.length === 0) return;
    const timer = setTimeout(() => {
      setSparks((prev) => prev.slice(7));
    }, 850);
    return () => clearTimeout(timer);
  }, [sparks]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {sparks.map((spark) => {
          const distance = 45 + Math.random() * 25; // Radial distance
          const targetX = Math.cos(spark.angle) * distance;
          const targetY = Math.sin(spark.angle) * distance;

          return (
            <motion.div
              key={spark.id}
              initial={{
                x: spark.x - 4,
                y: spark.y - 4,
                scale: 1,
                opacity: 0.9,
              }}
              animate={{
                x: spark.x + targetX - 4,
                y: spark.y + targetY - 4,
                scale: 0.1,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.75,
                ease: "easeOut",
              }}
              className="absolute w-2 h-2 rounded-full blur-[0.5px]"
              style={{
                background: `radial-gradient(circle, ${spark.color} 0%, transparent 100%)`,
                boxShadow: `0 0 8px ${spark.color}`,
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
