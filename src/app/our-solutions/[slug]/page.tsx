// app/our-solutions/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
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
    <div>
      <h1>{solution.title}</h1>
      <p>{solution.description}</p>
      <Image src={solution.image} alt={solution.title} width={500} height={300} />
    </div>
  );
}
