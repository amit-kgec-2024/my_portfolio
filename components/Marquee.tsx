"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";

export default function Marquee() {
  const doubled = [...techStack, ...techStack, ...techStack];

  return (
    <div style={{
      background: "#C8F135",
      padding: "18px 0",
      overflow: "hidden",
      display: "flex",
      position: "relative",
    }}>
      <motion.div
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, whiteSpace: "nowrap", flexShrink: 0 }}
      >
        {doubled.map((tech, i) => (
          <span
            key={i}
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#0A0A0F",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0 32px",
              display: "inline-flex",
              alignItems: "center",
              gap: 32,
            }}
          >
            {tech}
            <span style={{ width: 4, height: 4, background: "#0A0A0F", borderRadius: "50%", display: "inline-block", opacity: 0.4 }} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
