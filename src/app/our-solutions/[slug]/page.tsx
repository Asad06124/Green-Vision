import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import courseData from '../../../data/solutions.json';
import Footer from "@/components/Footer";

interface Solution {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  descriptionLong?: string;
  instructor: string;
  isFeatured: boolean;
  image: string;
  bgImage?: string;
  metaTitle: string;
  metaTag: string;
  metaDescription: string;
}

export async function generateStaticParams() {
  return courseData.solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

const getMetadata = (solution: Solution) => ({
  title: solution.metaTitle,
  description: solution.metaDescription,
  keywords: solution.metaTag,
});

function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = courseData.solutions.find((sol) => sol.slug === params.slug);

  if (!solution) {
    notFound();
  }

  const metadata = getMetadata(solution);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>

      <div
        className="mx-auto p-5 min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02]"
        style={{
          backgroundImage: solution.bgImage ? `url(${solution.bgImage})` : '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
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
            {solution.description}
          </div>
          {solution.descriptionLong && (
            <div
              className="container sm:w-5/6 lg:w-3/5 text-base mx-auto mt-5"
              dangerouslySetInnerHTML={{ __html: solution.descriptionLong }}
            />
          )}
        </article>
        <Footer />
      </div>
    </>
  );
}

export default SolutionPage;
