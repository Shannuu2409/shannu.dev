"use client";
import React from "react";
import { skillset } from "@/data/index";
import { tools } from "@/data/index";
import { SkillsCard } from "@/components/ui/SkillsCard";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

const SkillSet: React.FC = () => (
  <div className="py-20">
    <h1 className="heading" id="skillset">
      My Tech<span className="text-purple"> SkillSet</span>
    </h1>
    
    {/* *** FIX APPLIED HERE ***
        - Replaced 'flex flex-wrap' with 'grid'
        - 'grid-cols-1': Stack cards on small screens (mobile)
        - 'md:grid-cols-2': Two cards per row on medium screens
        - 'lg:grid-cols-3': Three cards per row on large screens
        - 'gap-8': Adds spacing between cards to prevent overlap
        - 'max-w-7xl mx-auto px-4': Centers the section and provides horizontal padding
    */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4 max-w-7xl mx-auto">
      {skillset.map((category) => (
        <div
          key={category.id}
          // Removed fixed height/width classes (like h-[25rem] w-[80vw])
          // The grid handles the layout, and 'SkillsCard' handles its own max-width (max-w-sm w-full mx-auto)
          className="flex items-start justify-center" 
        >
          <SkillsCard
            title={<span className="text-purple">{category.title}</span>}
            description={category.description}
            icons={category.icons}
          />
        </div>
      ))}
    </div>
    {/* ---------------------------------------------------------------------- */}
    
    {/* Infinite marquee tools section */}
    <div className="w-full flex flex-col items-center mt-16">
      <h2 className="text-lg md:text-2xl font-bold text-center mb-4 text-black dark:text-white">
        Tools I Use
      </h2>
      <div className="w-full">
        <InfiniteMovingCards
          items={tools.map(tool => ({
            name: tool.name,
            icon: tool.icon,
          }))}
          direction="left"
          speed="fast"
          pauseOnHover={true}
          className="my-4"
        />
      </div>
    </div>
  </div>
);

export default SkillSet;