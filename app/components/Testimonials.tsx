"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Jane Doe",
    company: "Tech Innovators Inc.",
    testimonial:
      "Nathan's expertise in both design and development made our project a breeze. He delivered a stunning website that exceeded our expectations.",
  },
  {
    name: "John Smith",
    company: "Creative Solutions LLC",
    testimonial:
      "Working with Nathan was a pleasure. His attention to detail and problem-solving skills are unmatched. I highly recommend his services.",
  },
  {
    name: "Emily Johnson",
    company: "StartUp Ventures",
    testimonial:
      "Nathan's ability to translate our vision into a functional and beautiful website was impressive. He's a true professional in every sense.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <p className="mb-6 text-lg italic text-text-secondary leading-relaxed">"{testimonial.testimonial}"</p>
              <div>
                <p className="font-semibold text-lg text-primary">{testimonial.name}</p>
                <p className="text-text-secondary">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}