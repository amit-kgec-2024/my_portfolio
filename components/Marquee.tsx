"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";

export default function Marquee() {
  const doubled = [...techStack, ...techStack, ...techStack];

  return (
    <motion.div
      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      style={{
        background: "linear-gradient(270deg, #C8F135 0%, #F5F3EE 32%, #0A0A0F 60%, #C8F135 100%)",
        backgroundSize: "220% 220%",
        padding: "18px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, whiteSpace: "nowrap", flexShrink: 0 }}
      >
        {doubled.map((tech, i) => (
          <motion.span
            key={`${tech}-${i}`}
            animate={{ y: [0, -6, 0], opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % techStack.length) * 0.1,
            }}
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#0A0A0F",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0 32px",
              display: "inline-flex",
              alignItems: "center",
              gap: 20,
              textShadow: "0 0 16px rgba(255,255,255,0.08)",
              minWidth: 140,
            }}
          >
            {tech}
            <span style={{ width: 6, height: 6, background: "#0A0A0F", borderRadius: "50%", display: "inline-block", opacity: 0.6 }} />
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
