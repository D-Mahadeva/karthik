"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", smoothScroll));

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      links.forEach((link) => link.removeEventListener("click", smoothScroll));
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 bg-primary ${
        scrolled ? "shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {[
            { name: "Home", href: "#hero" },
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
            { name: "About", href: "#about" },
            { name: "Testimonials", href: "#testimonials" }
          ].map((item, index) => (
            <motion.li key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.a 
                href={item.href} 
                className="text-quaternary hover:text-white transition-colors font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}