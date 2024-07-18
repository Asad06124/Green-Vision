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
          Go Green{" "}
          <span className="text-green-500">Green Vision</span>
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          At <span className="text-green-500">Green Vision</span>, we aim to
          lead Pakistan&rsquo;s water management revolution, promoting sustainable
          practices for people, communities, and businesses. Utilizing
          technology and creativity, we set new guidelines for public water use.
          Our projects inspire ecological and community development, fostering a
          sustainable future for Pakistan.
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
