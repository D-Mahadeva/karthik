"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "skills", "about", "testimonials"]
      let currentSection = "hero"
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            currentSection = section
          }
        }
      }
      
      setActiveSection(currentSection)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const navItems = [
    { name: "Home", section: "hero" },
    { name: "Projects", section: "projects" },
    { name: "Skills", section: "skills" },
    { name: "About", section: "about" },
    { name: "Testimonials", section: "testimonials" },
  ]
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item, index) => (
            <motion.li key={item.section} 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(item.section)}
                className={`text-quaternary hover:text-white transition-colors relative px-2 py-1 focus:outline-none ${
                  activeSection === item.section ? "text-white" : ""
                }`}
              >
                {item.name}
                {activeSection === item.section && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-quaternary"
                    layoutId="activeSection"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}