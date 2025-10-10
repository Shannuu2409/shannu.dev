"use client";
import React, { useEffect } from "react";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillIcon {
  name: string;
  icon: string;
}
interface SkillsCardProps {
  title: React.ReactNode;
  description: string;
  icons?: SkillIcon[];
}

export const SkillsCard: React.FC<SkillsCardProps> = ({ title, description, icons }) => {
  useEffect(() => {
    if (!icons?.length) return;
    icons.forEach((_, idx) => {
      const el = document.querySelector(`.skill-circle-${idx + 1}`);
      if (el) {
        animate(
          el,
          { scale: [1, 1.1, 1], y: [0, -4, 0] },
          { duration: 0.8, repeat: Infinity, repeatDelay: 0.8, delay: idx * 0.15 }
        );
      }
    });
  }, [icons]);

  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 pt-8 pb-12 md:pb-16 mb-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-black-100 bg-white shadow-[2px_4px_16px_0px_rgba(248,248,248,0.04)_inset] group"
      )}
    >
      {/* Icon row and glassy bg effect */}
      <div className="h-60 rounded-xl relative flex flex-col items-center justify-center mb-6 overflow-hidden">
        {/* White blurry glass effect behind icons */}
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] h-38 bg-white/70 dark:bg-white/5 rounded-2xl blur-lg"
          style={{
            filter: "blur(16px)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        {/* Animated icon row */}
        <div className="flex flex-row shrink-0 justify-center items-center gap-6 py-6 z-10 relative">
          {(Array.isArray(icons) ? icons : []).map(({ icon, name }, i) => (
            <div
              key={name}
              className={`flex items-center justify-center h-12 w-12 skill-circle-${i + 1}`}
              style={{
                borderRadius: "9999px",
                background: "rgba(248,248,248,0.01)",
                boxShadow:
                  "0px 0px 8px 0px rgba(248,248,248,0.25) inset, 0px 32px 24px -16px rgba(0,0,0,0.40)"
              }}
            >
              <img src={icon} alt={name} className="w-7 h-7" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="h-40 w-px absolute top-20 left-1/2 -translate-x-1/2 z-40 bg-gradient-to-b from-transparent via-purple to-transparent animate-move" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white py-2">{title}</h3>
      <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">{description}</p>
    </div>
  );
};

export default SkillsCard;
