"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "120px 32px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 72 }}
        >
          <span style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.15em",
            color: "#C8F135", textTransform: "uppercase",
          }}>
            04 — Experience
          </span>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#F5F3EE",
            marginTop: 12,
            lineHeight: 1,
          }}>
            Where I&apos;ve<br />
            <span style={{
              background: "linear-gradient(135deg, #4AB8FF, #B09EFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>worked.</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: 20,
            top: 0,
            bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom, #C8F135, transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 48,
                  paddingBottom: i < experience.length - 1 ? 64 : 0,
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 6 }}>
                  <motion.div
                    whileInView={{ scale: [0, 1.4, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                    style={{
                      width: 16, height: 16,
                      borderRadius: "50%",
                      background: exp.current ? "#C8F135" : "#1E1E2A",
                      border: `2px solid ${exp.current ? "#C8F135" : "rgba(255,255,255,0.2)"}`,
                      boxShadow: exp.current ? "0 0 20px rgba(200,241,53,0.5)" : "none",
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{
                    borderColor: "rgba(200,241,53,0.2)",
                    background: "rgba(200,241,53,0.02)",
                  }}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 20,
                    padding: "32px 36px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                    flexWrap: "wrap",
                    gap: 12,
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#F5F3EE",
                        letterSpacing: "-0.01em",
                        marginBottom: 4,
                      }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontSize: 15, color: "#C8F135", fontWeight: 600 }}>
                          {exp.company}
                        </span>
                        {exp.current && (
                          <span style={{
                            background: "rgba(200,241,53,0.15)",
                            color: "#C8F135",
                            padding: "2px 10px",
                            borderRadius: 100,
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                          }}>
                            CURRENT
                          </span>
                        )}
                      </div>
                    </div>
                    <span style={{
                      fontSize: 13,
                      color: "#D4CFC4",
                      fontFamily: "monospace",
                      background: "rgba(255,255,255,0.04)",
                      padding: "6px 16px",
                      borderRadius: 100,
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <p style={{
                    fontSize: 15,
                    color: "#D4CFC4",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}>
                    {exp.description}
                  </p>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{
                        padding: "4px 12px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 100,
                        fontSize: 12,
                        color: "#D4CFC4",
                        fontWeight: 500,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #experience > div > div:last-child > div {
            grid-template-columns: 40px 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
