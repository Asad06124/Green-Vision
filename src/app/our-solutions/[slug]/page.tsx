// app/our-solutions/[slug]/page.tsx
"use client";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import courseData from '../../../data/solutions.json';

interface Solution {
  slug: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const SolutionPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [solution, setSolution] = useState<Solution | undefined>(undefined);

  useEffect(() => {
    if (slug) {
      const foundSolution = courseData.solutions.find((sol) => sol.slug === slug);
      setSolution(foundSolution);
    }
  }, [slug]);

  if (!solution) {
    return <div>Solution not found</div>;
  }
  

  return (
    <div>
      <h1>{solution.title}</h1>
      <p>{solution.description}</p>
     
      <Image src={solution.image} alt={solution.title} />
    </div>
  );
};

export default SolutionPage;
