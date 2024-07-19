import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import courseData from '../../../data/solutions.json';

interface Solution {
  slug: string;
  title: string;
  description: string;
  descriptionLong?: string; // Optional long description field
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

// Function to convert new line characters to multiple <br /> tags
const formatDescription = (text: string) => {
  return text
    .split('\n')
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />} {/* Corrected to avoid extra <br /> */}
      </React.Fragment>
    ));
};

export async function generateStaticParams() {
  return courseData.solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export default async function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = courseData.solutions.find((sol) => sol.slug === params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="mx-auto p-5 min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <article className="text-white rounded-lg">
        <header className="text-justify">
          <h1 className="container sm:w-5/6 lg:w-2/5 text-3xl font-bold pt-10 text-center mx-auto">
            {solution.title}
          </h1>
        </header>
        <div className="flex justify-center my-5">
          <Image
            src={solution.image}
            alt={solution.title}
            width={1024}
            height={524}
            className="rounded-lg sm:w-full lg:w-3/4 h-auto"
            style={{ minHeight: '25vh', maxHeight: '70vh' }}
          />
        </div>
        <div className="container sm:w-5/6 lg:w-3/5 text-center text-xl mx-auto">
          {formatDescription(solution.description)}
        </div>
        {solution.descriptionLong && (
          <div
            className="container sm:w-5/6 lg:w-3/5 text-base mx-auto mt-5"
            dangerouslySetInnerHTML={{ __html: solution.descriptionLong }}
          />
        )}
      </article>
    </div>
  );
}
