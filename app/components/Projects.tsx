"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution for electronic products, featuring a modern UI and seamless shopping experience.",
    image: "/ecommerce-project.jpg", // Replace with actual image
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Agency Website",
    description: "A dark-themed, modern agency website with dynamic animations and creative portfolio showcase.",
    image: "/agency-project.jpg", // Replace with actual image
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    description:
      "A minimal, intuitive task management mobile app with calendar integration and team collaboration features.",
    image: "/task-management-project.jpg", // Replace with actual image
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-card overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="relative h-64">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-text-secondary mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-tertiary text-primary px-4 py-1 rounded-full text-sm"
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