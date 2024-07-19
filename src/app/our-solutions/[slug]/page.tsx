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
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <div className="bg-black">
      <article className="bg-black text-white pt-5 rounded-lg">
        <header className="text-center">
          <h1 className="text-3xl font-bold">{solution.title}</h1>
        </header>
        <Image src={solution.image} alt={solution.title} className="rounded-lg my-5" />
        <p className="text-base">{solution.description}</p>
      </article>
    </div></main>
  );
}
