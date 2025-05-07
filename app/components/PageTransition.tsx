"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { pageTransition } from "@/lib/animation"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  )
}