"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <div style={{ marginTop: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        <h4 style={{ fontSize: 16, fontWeight: 700, color: "#F5F3EE", marginBottom: 8 }}>Education & Certifications</h4>

        <div style={{ display: "grid", gap: 12 }}>
          {education.map((e, i) => (
            <div key={i} style={{ padding: 12, borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#F5F3EE" }}>{e.degree}</div>
                  <div style={{ fontSize: 13, color: "#D4CFC4" }}>{e.institution}</div>
                </div>
                <div style={{ fontSize: 12, color: "#D4CFC4", fontFamily: "monospace" }}>{e.period}</div>
              </div>
              {e.grade && <div style={{ marginTop: 8, fontSize: 12, color: "#D4CFC4" }}>{e.grade}</div>}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 8 }}>
          <h5 style={{ fontSize: 13, fontWeight: 700, color: "#F5F3EE", marginBottom: 8 }}>Certifications</h5>
          <div style={{ display: "grid", gap: 8 }}>
            {certifications.map((c, i) => (
              <div key={i} style={{ padding: 10, borderRadius: 10, background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.03)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#F5F3EE" }}>{c.title}</div>
                <div style={{ fontSize: 12, color: "#D4CFC4" }}>{c.issuer} • <span style={{ fontFamily: "monospace" }}>{c.date}</span></div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
