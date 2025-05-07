import { Variants } from "framer-motion";

// Fade up animation variant
export const fadeUpVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Staggered children animation for lists and grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Zoom in animation
export const zoomIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

// Slide in from side animation
export const slideIn: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Hover effect for cards and buttons
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3
  }
};

// Skill bar animation
export const skillBarVariant: Variants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  })
};