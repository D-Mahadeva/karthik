"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary text-quaternary py-8">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          &copy; {currentYear} Mahadeva. All rights reserved.
        </motion.p>
        
        <div className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/D-Mahadeva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/d-mahadeva/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:mahadevadmahadev78@gmaill.com"
            className="text-quaternary hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Email
          </motion.a>
        </div>
      </div>
    </footer>
  )
}