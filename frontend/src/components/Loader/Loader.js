import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const LoadingDot = {
  display: "block",
  width: "10px",
  height: "10px",
  backgroundColor: "black",
  borderRadius: "50%",
};

const LoadingContainer = {
  width: "10rem",
  height: "20px",
  display: "flex",
  margin: " 2rem 0",
  justifyContent: "space-evenly",
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function Loading() {
  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimatePresence>
        <motion.div
          style={LoadingContainer}
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
