"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary text-quaternary py-10">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          &copy; {currentYear} Nathan Sterling. All rights reserved.
        </motion.p>
        
        <div className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/nathansterling"
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
            href="https://linkedin.com/in/nathansterling"
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
            href="mailto:contact@nathansterling.com"
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