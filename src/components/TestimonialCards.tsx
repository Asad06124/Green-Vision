'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    "quote":
      "Green Vision completely transformed my backyard. Their expertise in sustainable landscaping has given us a beautiful garden that conserves water and looks amazing year-round. Highly recommend their services!",
    "name": "Ayesha Khan",
    "title": "Homeowner"
  },
  {
    "quote":
      "Working with Green Vision has been a game-changer for our community park. The team implemented efficient irrigation systems that have significantly reduced our water usage while keeping the park lush and green.",
    "name": "Mohammad Ali",
    "title": "Park Manager"
  },
  {
    "quote":
      "The professionals at Green Vision are truly experts in their field. They designed and installed a custom irrigation system for our golf course that has improved the health of our turf and saved us money on water bills.",
    "name": "Bilal Ahmed",
    "title": "Golf Course Superintendent"
  },
  {
    "quote":
      "We couldn't be happier with the landscaping services provided by Green Vision. Their attention to detail and commitment to sustainability have made our office grounds a beautiful and eco-friendly space.",
    "name": "Zainab Malik",
    "title": "Business Owner"
  },
  {
    "quote":
      "Green Vision's team is fantastic. They helped us convert our traditional garden into a drought-tolerant landscape that requires minimal maintenance. It's both beautiful and sustainable!",
    "name": "Fatima Aslam",
    "title": "Homeowner"
  }
]


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials