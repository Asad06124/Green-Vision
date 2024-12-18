"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from 'next/image';


export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.1 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "/courses/drip.jpg",
    "/courses/landscp.jpg",
    "/courses/fountain.jpg",
  ];
  return (
    <div>
        <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity:  1 ,
                  backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
                className="text-4xl font-bold text-slate-100 overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
                >
                {"Why Choose Us"}
              </motion.h2>
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        
        <div className="max-w-2xl">
      
          {content.map((item, index) => (
          
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <Image
        src={
           linearGradients[activeCard % linearGradients.length]
        }
        // layout="fill" // This ensures the image fills the container
  objectFit="cover"
        quality={100}
        alt={''}
        width={120}
        height={80}
        className="hidden lg:block h-80 w-2/5 rounded-md bg-white sticky top-10 overflow-hidden"
      ></Image>
    </motion.div></div>
  );
};