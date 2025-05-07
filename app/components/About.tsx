"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary text-quaternary">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="md:flex md:items-center md:gap-10 max-w-5xl mx-auto">
          <motion.div 
            className="md:w-1/3 mb-10 md:mb-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/nathan-about.jpg" // Make sure this file exists in your public folder
                alt="Dollegowda Mahadeva"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm Mahadeva, a passionate web developer and designer with over 1 years of experience in
              creating beautiful, functional, and user-centered digital experiences.
            </motion.p>
            
            <motion.p 
              className="mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              I specialize in building responsive websites and web applications using modern technologies like React,
              Node.js, and using JavaScript. My background in both development and design allows me to bridge the gap between
              aesthetics and functionality, ensuring that the websites I create not only look great but also perform
              exceptionally.
            </motion.p>
            
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through tech meetups and online communities.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}