"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary pt-20">
      <div className="container mx-auto px-6 py-24 md:flex md:items-center">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-quaternary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Nathan Sterling
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl mb-6 text-quaternary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Web Developer & Designer
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-quaternary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Crafting modern, responsive, and user-friendly web experiences.
          </motion.p>
          
          <motion.a
            href="#projects"
            className="bg-tertiary text-primary px-8 py-3 rounded-full font-medium hover:bg-quaternary inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Image
            src="/nathan-portrait.jpg" // Update with the actual image path
            alt="Nathan Sterling"
            width={400}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}