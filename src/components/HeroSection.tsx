import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="green"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-neutral-50">
          Go Green {" "}
          <span className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold text-neutral-50">with {" "}</span>
          <span className="text-green-500">Green Vision</span>
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          At <span className="text-green-500">Green Vision</span>, we specialise in 
          innovative irrigation solutions that help create beautiful and sustainable landscapes. 
          Our mission is to promote intelligent use of water for a &quot;clean and green Pakistan&quot;.
          We offer high performance irrigation systems for both residential and commercial spaces. 
          Our goal is to ensure that every drop counts, allowing you to 
          &quot;save time, save money, save water&quot;. Explore our services, 
          including drip irrigation, sprinkler systems, landscaping, fertigation, 
          and solar cleaning. Let us help you transform your outdoor spaces today!.
        </p>
        <div className="mt-4">
          <Link href={"/our-solutions"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Solutions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
