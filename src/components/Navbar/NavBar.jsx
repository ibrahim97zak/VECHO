import React, { useState, useEffect } from "react";
import NavLinks from "../Navbar/NavLinks";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [top, setTop] = useState(true);
  let scrollTimeout = null; // ✅ Fixed: Removed TypeScript type annotation

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setTop(false);
        setIsScrolling(true);
      } else {
        setTop(true);
        setIsScrolling(false);
      }

      // Clear previous timeout if it exists
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Set a new timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out shadow-lg 
                ${
                  top
                    ? "bg-white"
                    : isScrolling
                    ? "bg-white bg-opacity-50"
                    : "bg-white bg-opacity-100"
                }`}
    >
      <div className="flex flex-row justify-between items-center py-2">
        <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
          <HashLink smooth to="/#hero">
            <h1 className="font-extrabold text-4xl text-primary">VECHO</h1>
          </HashLink>
        </div>
        <div className="group flex flex-col items-center">
          <div className="hidden space-x-6 lg:inline-block p-5">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
