import Script from "next/script"; // Import Script
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Define your GTM and GA IDs directly
const GTM_ID = "GTM-PFCKZCGD";
const GA_ID = "G-H6LQKKM8Z8";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Green Vision</title>
        <meta
          name="description"
          content="Green Vision: Your Premier Solution for Drip Irrigation, Landscaping, Solar Cleaning, Filtration, Fertigation, and Sprinkler Irrigation Systems in Pakistan Welcome to Green Vision, Pakistan's leading provider of comprehensive irrigation and landscaping solutions. Our expert services include: Drip Irrigation: Maximize water efficiency and ensure precise watering for your crops with our advanced drip irrigation systems.Landscaping: Transform your outdoor spaces into stunning, sustainable landscapes with our professional landscaping services.Solar Cleaning: Maintain peak performance of your solar panels with our eco-friendly solar cleaning solutions.Filtration: Ensure clean and safe water supply for your agricultural and residential needs with our top-tier filtration systems.Fertigation: Enhance soil fertility and crop yield with our integrated fertigation systems that combine irrigation and fertilization.Sprinkler Irrigation: Achieve uniform water distribution with our state-of-the-art sprinkler irrigation systems, perfect for lawns, gardens, and agricultural fields.At Green Vision, we are committed to promoting sustainable and efficient water management practices across Pakistan. Our innovative solutions are designed to meet the unique needs of our clients, ensuring optimal growth and health for their plants and landscapes.Contact us today to discover how Green Vision can help you achieve greener and more sustainable growth with our expert irrigation and landscaping services in Pakistan."
        />

        {/* Google Tag Manager Script */}
        {GTM_ID && (
          <Script id="gtm-script" strategy="beforeInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}
        {/* End Google Tag Manager Script */}

        {/* Google Analytics (gtag.js) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        {/* End Google Analytics (gtag.js) */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}
        {/* End Google Tag Manager (noscript) */}

        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}