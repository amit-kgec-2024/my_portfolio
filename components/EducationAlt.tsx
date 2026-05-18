"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/portfolio";

export default function EducationAlt() {
  return (
    <div style={{ marginTop: 12 }}>
      <h4 style={{ fontSize: 16, fontWeight: 800, color: "#F5F3EE", marginBottom: 12 }}>Education — Timeline</h4>

      <div style={{ display: "flex", gap: 20 }}>
        {/* Timeline markers */}
        <div style={{ width: 48, display: "flex", flexDirection: "column", alignItems: "center" }}>
          {education.map((_, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: "#C8F135", boxShadow: "0 4px 12px rgba(200,241,53,0.18)" }} />
              {i !== education.length - 1 && <div style={{ width: 2, height: 36, background: "rgba(255,255,255,0.06)", marginTop: 6 }} />}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              style={{ padding: 14, borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#F5F3EE" }}>{e.degree}</div>
                  <div style={{ fontSize: 13, color: "#D4CFC4" }}>{e.institution}</div>
                </div>
                <div style={{ fontSize: 12, color: "#D4CFC4", fontFamily: "monospace" }}>{e.period}</div>
              </div>
              {e.grade && <div style={{ marginTop: 8, fontSize: 12, color: "#D4CFC4" }}>{e.grade}</div>}
            </motion.div>
          ))}

          <div style={{ marginTop: 8 }}>
            <h5 style={{ fontSize: 13, fontWeight: 700, color: "#F5F3EE", marginBottom: 8 }}>Certifications</h5>
            <div style={{ display: "grid", gap: 8 }}>
              {certifications.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} style={{ padding: 10, borderRadius: 10, background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.03)" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#F5F3EE" }}>{c.title}</div>
                  <div style={{ fontSize: 12, color: "#D4CFC4" }}>{c.issuer} • <span style={{ fontFamily: "monospace" }}>{c.date}</span></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
