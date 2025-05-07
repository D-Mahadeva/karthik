"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Java", level: 65 },
  { name: "UI/UX Design", level: 80 },
  { name: "Adobe Creative Suite", level: 75 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-primary text-quaternary">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-lg">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-tertiary h-3 rounded-full" 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.2,
                    delay: 0.2,
                    ease: "easeOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}