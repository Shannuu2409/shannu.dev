"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Make sure these keyframes are in your global CSS
/*
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation-name: scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: var(--animation-duration, 40s);
  animation-direction: var(--animation-direction, forwards);
}
*/

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: any[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      setDirection();
      setSpeed();
      setStart(true);
    }
  }

  const setDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4 animate-scroll",
          start && "animate-scroll"
        )}
        onMouseEnter={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {items.map((item, idx) =>
          item.icon ? (
            <li
              key={idx}
              className="flex items-center gap-2 px-6 py-2"
              style={{ background: "transparent", border: "none", boxShadow: "none" }}
            >
              <img src={item.icon} alt={item.name} className="w-8 h-8" />
              <span className="text-base font-semibold text-purple dark:text-purple">
                {item.name}
              </span>
            </li>
          ) : (
            // Testimonials
            <li
              key={idx}
              className="relative h-[40vh] sm:h-[50vh] md:h-[56vh] lg:h-[40vh] max-w-full shrink-0 rounded-2xl text-sm border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] p-5 md:p-16 sm:text-xss w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[60vw] dark:border-slate-800"
              style={{
                background:
                  "linear-gradient(180deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <blockquote>
                <span className="relative z-20 text-lg leading-[1.6] font-normal text-neutral-800 dark:text-white">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-purple">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;