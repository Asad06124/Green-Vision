// pages/index.tsx or pages/home/page.tsx (depending on your folder structure)
import Head from 'next/head';
import type { Metadata } from "next";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
export const metadata: Metadata = {
  title: 'Green Vision - Sustainable Water Solutions in Pakistan',
  description: 'Explore sustainable water management and irrigation solutions with Green Vision. Join the water revolution in Pakistan with eco-friendly practices.',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function Home() {
  return (
    <>
      <Head>
        <title>Green Vision - Sustainable Water Solutions in Pakistan</title>
        <meta 
          name="description" 
          content="Explore sustainable water management and irrigation solutions with Green Vision. Join the water revolution in Pakistan with eco-friendly practices."
        />
        <meta name="keywords" content="Green Vision, irrigation, water management, sustainable farming, Pakistan" />
        <meta property="og:title" content="Green Vision - Leading Sustainable Water Solutions" />
        <meta property="og:description" content="Discover eco-friendly irrigation solutions for a greener future in Pakistan." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <MusicSchoolTestimonials />
        <UpcomingWebinars />
        <Instructors />
        <Footer />
      </main>
    </>
  );
}
