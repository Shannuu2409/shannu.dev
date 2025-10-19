"use client";
import React from "react";
import { Timeline } from "@/components/ui/TimeLine"; // Correct path for your components directory
import { timelineData } from "@/data/index"; // Correct path for your data directory

export default function MyTimeLine() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineData} />
    </div>
  );
}
