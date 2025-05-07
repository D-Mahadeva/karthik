"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-primary pt-16">
      <div className="container mx-auto px-6 py-20 md:flex md:items-center">
        <div className="md:w-1/2">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-quaternary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
              
            Mahadeva 
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl mb-6 text-quaternary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Web Developer & Designer
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-quaternary max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Crafting modern, responsive, and user-friendly web experiences.
          </motion.p>
          
          <motion.button
            className="bg-tertiary text-primary px-8 py-3 rounded-full font-medium hover:bg-quaternary transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </motion.button>
        </div>
        
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative w-full max-w-md h-[400px]">
            <Image
              src="/nathan-portrait.jpg"  // Make sure this file exists in your public folder
              alt="Nathan Sterling"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}