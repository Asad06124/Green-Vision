"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
// import logoImage from "../public/logo.png"; // replace with your logo image path

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest(".nav-drawer")) return;
    setNav(false);
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    };
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [nav]);

  const links = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/our-solutions", name: "Our Solutions" },
    { id: 3, link: "/products", name: "Products" },
    { id: 4, link: "/contact", name: "Contact Us" },
  ];

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image src='/courses/logo.svg' alt="Logo"  height="250"
                  width="250" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map(({ id, link, name }) => (
                <Link key={id} href={link} legacyBehavior>
                  <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">{name}</a>
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setNav(!nav)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {nav && (
        <div className="md:hidden bg-black text-white fixed top-16 right-0 w-1/2 h-full flex flex-col items-end p-4 nav-drawer">
          {links.map(({ id, link, name }) => (
            <Link key={id} href={link} legacyBehavior>
              <a
                onClick={() => setNav(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                {name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;