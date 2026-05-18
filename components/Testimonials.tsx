"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section style={{ padding: "120px 32px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: 64 }}
      >
        <span style={{
          fontSize: 12, fontWeight: 700, letterSpacing: "0.15em",
          color: "#C8F135", textTransform: "uppercase",
        }}>
          05 — Testimonials
        </span>
        <h2 style={{
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#F5F3EE",
          marginTop: 12,
          lineHeight: 1,
        }}>
          What people<br />
          <span style={{
            background: "linear-gradient(135deg, #FF5C4A, #B09EFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>say.</span>
        </h2>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 20,
      }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, borderColor: t.color + "40" }}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: "36px",
              cursor: "default",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Quote mark */}
            <div style={{
              position: "absolute",
              top: 24,
              right: 28,
              fontSize: 80,
              lineHeight: 1,
              color: t.color,
              opacity: 0.08,
              fontFamily: "serif",
            }}>
              "
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
              {[...Array(5)].map((_, s) => (
                <span key={s} style={{ color: t.color, fontSize: 14 }}>★</span>
              ))}
            </div>

            <p style={{
              fontSize: 16,
              color: "#D4CFC4",
              lineHeight: 1.75,
              marginBottom: 28,
              fontStyle: "italic",
              position: "relative",
            }}>
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44,
                borderRadius: "50%",
                background: t.color + "20",
                border: `2px solid ${t.color}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: t.color,
                flexShrink: 0,
              }}>
                {t.avatar}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#F5F3EE" }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "#D4CFC4" }}>{t.role}</div>
              </div>
            </div>

            {/* Bottom accent */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg, ${t.color}, transparent)`,
            }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
