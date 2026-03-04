import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * Wrapper that triggers framer-motion animations when element enters viewport.
 * Compatible with framer-motion v4 (no whileInView API).
 */
export default function InView({
  children,
  variants,
  className,
  style,
  threshold = 0.2,
  tag = "div",
}) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [controls, threshold]);

  const MotionTag = motion[tag] || motion.div;

  return (
    <MotionTag
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
