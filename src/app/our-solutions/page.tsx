import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/solutions.json";
import Footer from "@/components/Footer";
import Link from "next/link";


function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All Service & Solutions
      </h1>
      <div className="flex flex-wrap justify-center">
        {courseData.solutions.map((course) => (
          <CardContainer key={course.id} className="inter-var m-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {course.title}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {course.description.substring(0, 160)}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
                
              </CardItem>
              <Link href={`/our-solutions/${course.slug}`}>
              <div className="flex justify-center items-center mt-20">
                <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl text-3xs font-normal dark:text-white">
                  See Details →
                </CardItem>
              </div></Link>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <Footer />
    </div>
    
  );
}

export default page;
