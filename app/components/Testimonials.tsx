"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Kiran",
    company: "Quince",
    testimonial:
      "Mahadeva's expertise in both design and development made our project a Quick. He delivered a stunning website that exceeded our expectations.",
  },
  {
    name: "Deekshith",
    company: "StartUp Ventures",
    testimonial:
      "Working with Mahadeva was a pleasure. His attention to detail and problem-solving skills are unmatched. I highly recommend his services.",
  },
  {
    name: "Gowda",
    company: "StartUp Ventures",
    testimonial:
      "Mahadeva's ability to translate our vision into a functional and beautiful website was impressive. He's a true professional in every sense.",
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
          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <p className="mb-6 text-lg italic text-gray-600">"{testimonial.testimonial}"</p>
              <div>
                <p className="font-semibold text-lg text-primary">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}