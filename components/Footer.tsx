"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "40px 32px",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#C8F135", fontFamily: "monospace" }}>AR.</span>
          <span style={{ fontSize: 14, color: "#D4CFC4" }}>
            © {new Date().getFullYear()} {personalInfo.name}. Crafted with ♥
          </span>
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {Object.entries(personalInfo.socials).map(([name, url]) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#C8F135", y: -2 }}
              style={{
                fontSize: 13,
                color: "#D4CFC4",
                textDecoration: "none",
                textTransform: "capitalize",
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
            >
              {name}
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1, borderColor: "#C8F135", color: "#C8F135" }}
          style={{
            width: 40, height: 40,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "transparent",
            color: "#D4CFC4",
            cursor: "pointer",
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
}
