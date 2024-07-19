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
    <div className="container mx-auto p-5">
      <article className="bg-black text-white p-5 rounded-lg">
        <header className="text-center">
          <h1 className="text-3xl font-bold">{solution.title}</h1>
          <p className="text-lg">by {solution.instructor}</p>
        </header>
        <Image src={solution.image} alt={solution.title} width={500} height={300} className="rounded-lg my-5" />
        <p className="text-base">{solution.description}</p>
      </article>
    </div>
  );
}
