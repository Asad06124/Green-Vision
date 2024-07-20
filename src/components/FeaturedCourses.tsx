"use client";
import Link from "next/link";
import courseData from "../data/solutions.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  bgImage: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.solutions.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
    <div>
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Top Solutions
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Transform to Best
        </p>
      </div>
    </div>
    <div className="mt-10 mx-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredCourses.map((course: Course) => (
          <div key={course.id} className="flex justify-center">
            <div className="relative flex flex-col rounded-[22px] overflow-hidden h-full max-w-sm">
              <div
                className="absolute inset-0 bg-black dark:bg-zinc-900"
                style={{
                  backgroundImage: `url(${course.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(1px)',
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative p-4 sm:p-6 flex flex-col items-center text-center flex-grow bg-white dark:bg-transparent">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {course.description}
                </p>
                <Link href={`/our-solutions/${course.slug}`}>Learn More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-20 text-center">
      <Link
        href={"/our-solutions"}
        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
      >
        View All Solutions
      </Link>
    </div>
  </div>
  
  );
}

export default FeaturedCourses;
