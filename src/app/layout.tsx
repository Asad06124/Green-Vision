import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Vision",
  description: "Green Vision: Your Premier Solution for Drip Irrigation, Landscaping, Solar Cleaning, Filtration, Fertigation, and Sprinkler Irrigation Systems in Pakistan Welcome to Green Vision, Pakistan's leading provider of comprehensive irrigation and landscaping solutions. Our expert services include: Drip Irrigation: Maximize water efficiency and ensure precise watering for your crops with our advanced drip irrigation systems.Landscaping: Transform your outdoor spaces into stunning, sustainable landscapes with our professional landscaping services.Solar Cleaning: Maintain peak performance of your solar panels with our eco-friendly solar cleaning solutions.Filtration: Ensure clean and safe water supply for your agricultural and residential needs with our top-tier filtration systems.Fertigation: Enhance soil fertility and crop yield with our integrated fertigation systems that combine irrigation and fertilization.Sprinkler Irrigation: Achieve uniform water distribution with our state-of-the-art sprinkler irrigation systems, perfect for lawns, gardens, and agricultural fields.At Green Vision, we are committed to promoting sustainable and efficient water management practices across Pakistan. Our innovative solutions are designed to meet the unique needs of our clients, ensuring optimal growth and health for their plants and landscapes.Contact us today to discover how Green Vision can help you achieve greener and more sustainable growth with our expert irrigation and landscaping services in Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <title>Green Vision</title>
      <meta name="description" content="This is a description of my page." />
    
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
