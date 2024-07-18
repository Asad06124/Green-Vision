
"use client";
import React, { useRef } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll } from "framer-motion";



const content = [
    {
      title: 'Our Vision',
      description:
        "We at Green Vision want to be at the forefront of this revolutionary vision for Pakistan's water management system. We seek to enable people, communities, businesses, and farmers around the country to embrace sustainable practices and a greener future. We work to establish new guidelines for managing and using water in public areas by utilizing technology, creativity, and experience.We aim to evaluate various ecological applications and community development beyond simply offering goods and services. Our collaborations and projects aim to inspire a wave of goodwill and invite others to support our continued work for a stunning and sustainable Pakistan",
    },
    {
      title: 'Our Mission',
      description:
        "Green Vision has made progress toward a greener future by offering cutting-edge irrigation systems, and breathtaking landscapes, to promote the Green and sustainable development in Pakistan.Our mission is to promote the Green and sustainable development in Pakistan, that preserve the valuable resource and improve the aesthetic and beauty of our surroundings.",
    },
    {
      title: 'Our Values',
      description:
        "Our clients are our most important partner in our business. We want to help them to realize their unique irrigation & landscape solution so that they can enjoy their outdoor space, to make people's lives better. We find fulfillment in creating stunning and efficient landscapes and we approach every project with the mindset of an artisan, to provide highest quality irrigation & landscape services. We maintain exceptional standards and our commitment is to provide the highest quality irrigation & landscape services ever possible.",
    }, 
      {
        title: "Real-Time Project Feedback",
        description:
          "Engage in interactive project management where feedback is immediate, similar to real-time adjustments in irrigation systems. This approach enhances your understanding of sustainable landscaping and efficient water management techniques."
      },
      {
        title: "Innovative Landscaping Practices",
        description:
          "Our methods are continuously updated to incorporate the latest trends in sustainable irrigation and landscaping, ensuring you’re always equipped with the most current and effective techniques. Say goodbye to outdated practices and welcome an eco-friendly approach that evolves with the industry."
      },
      {
        title: "Endless Learning Opportunities",
        description:
          "With our extensive resource library and dynamic training programs, you’ll always have new skills to acquire. Our platform offers continuous opportunities for growth, ensuring your expertise in landscaping and irrigation is always expanding."
      }
    
    
  ];

function WhyChooseUs() {

  return (
    <div>
          <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs