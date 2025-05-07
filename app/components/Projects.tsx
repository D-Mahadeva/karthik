"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Quick-commerce Platform Price Comparison",
    description:
      "A quick commerce price comparison website efficiently enables shoppers to compare product prices across multiple online retailers to identify the best deals in real-time.",
    image: "/ecommerce-project.jpg", // Make sure this file exists in your public folder
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Agency Website",
    description: "A dark-themed, modern agency website with dynamic animations and creative portfolio showcase.",
    image: "/agency-project.jpg", // Make sure this file exists in your public folder
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Protfolio Web",
    description:
      "A minimal, intuitive Protfolio Website with project integration and Skill features.",
    image: "/task-management-project.jpg", // Make sure this file exists in your public folder
    tags: ["React Native", "TypeScript", "Node.js"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="relative h-56">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}