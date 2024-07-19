'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      "title": "Sustainable Irrigation Systems",
      "description": "Implementing eco-friendly irrigation systems that conserve water and promote healthy plant growth.",
      "slug": "sustainable-irrigation-systems",
      "isFeatured": true
    },
    {
      "title": "Innovative Landscaping Designs",
      "description": "Creating beautiful and functional landscapes using the latest sustainable practices.",
      "slug": "innovative-landscaping-designs",
      "isFeatured": true
    },
    {
      "title": "Efficient Water Management",
      "description": "Advanced techniques for managing water resources effectively in various landscapes.",
      "slug": "efficient-water-management",
      "isFeatured": true
    },
    {
      "title": "Green Roof Installation",
      "description": "Designing and installing green roofs to promote urban sustainability and reduce energy costs.",
      "slug": "green-roof-installation",
      "isFeatured": true
    },
    {
      "title": "Drought-Tolerant Landscaping",
      "description": "Creating landscapes that thrive in low-water conditions, reducing maintenance and water usage.",
      "slug": "drought-tolerant-landscaping",
      "isFeatured": true
    },
    {
      "title": "Landscape Maintenance Services",
      "description": "Providing comprehensive maintenance services to keep your landscapes healthy and beautiful year-round.",
      "slug": "landscape-maintenance-services",
      "isFeatured": true
    }
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Landscaping and Irrigation Solutions          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/our-solutions'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/our-solutions"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars