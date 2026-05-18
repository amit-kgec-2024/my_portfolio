"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "@/data/portfolio";
import Education from "./Education";
import Interests from "./Interests";

const CATEGORIES = [
  "Frontend",
  "Creative",
  "Backend",
  "DevOps",
  "Design",
  "Mobile",
  "Database",
  "Languages",
  "Tools",
  "Payments",
];
const CAT_COLORS: Record<string, string> = {
  Frontend: "#C8F135",
  Creative: "#B09EFF",
  Backend: "#4AB8FF",
  DevOps: "#FF5C4A",
  Design: "#FFB347",
  Mobile: "#7CFFB3",
  Database: "#6BD0FF",
  Languages: "#FFD166",
  Tools: "#FF8A5B",
  Payments: "#9B5CFF",
};

function SkillBar({ skill, i }: { skill: typeof skills[0]; index?: number; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      style={{ marginBottom: 20 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            width: 8, height: 8,
            borderRadius: "50%",
            background: CAT_COLORS[skill.category] || "#C8F135",
            display: "inline-block",
          }} />
          <span style={{ fontSize: 14, fontWeight: 600, color: "#F5F3EE" }}>{skill.name}</span>
        </div>
        <span style={{ fontSize: 13, color: "#D4CFC4", fontFamily: "monospace" }}>{skill.level}%</span>
      </div>
      <div style={{
        height: 4,
        background: "rgba(255,255,255,0.06)",
        borderRadius: 100,
        overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 + 0.2 }}
          style={{
            height: "100%",
            borderRadius: 100,
            background: `linear-gradient(90deg, ${CAT_COLORS[skill.category] || "#C8F135"}, ${CAT_COLORS[skill.category] || "#C8F135"}88)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: "20px 20px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "start",
      }}>
        {/* Left: About text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.15em",
              color: "#C8F135", textTransform: "uppercase",
            }}>
              03 — About Me
            </span>
            <h2 style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F5F3EE",
              marginTop: 12,
              lineHeight: 1.1,
              marginBottom: 32,
            }}>
              Building at the edge of possibility.
            </h2>
            <p style={{ fontSize: 16, color: "#D4CFC4", lineHeight: 1.75, marginBottom: 24 }}>
              {personalInfo.bio}
            </p>
            <p style={{ fontSize: 16, color: "#D4CFC4", lineHeight: 1.75, marginBottom: 40 }}>
              When I&apos;m not shipping code, I&apos;m deep in open source, writing about creative dev on my blog, or breaking things in Unity for fun. Based in {personalInfo.location}, working globally.
            </p>
          </motion.div>

          {/* Info cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Location", value: personalInfo.location, icon: "📍" },
              { label: "Email", value: personalInfo.email, icon: "✉️" },
              { label: "Availability", value: "Open to work", icon: "🟢" },
              { label: "Languages", value: "EN, HI, BEN", icon: "🌐" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ borderColor: "rgba(200,241,53,0.3)", scale: 1.02 }}
                style={{
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  cursor: "default",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ fontSize: 20, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontSize: 11, color: "#D4CFC4", letterSpacing: "0.08em", marginBottom: 4 }}>
                  {item.label.toUpperCase()}
                </div>
                <div style={{ fontSize: 14, color: "#F5F3EE", fontWeight: 600 }}>{item.value}</div>
              </motion.div>
            ))}
          </div>
          <Education />
          <Interests />
        </div>

        {/* Right: Skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ marginBottom: 40 }}
          >
            <h3 style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#F5F3EE",
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}>
              Skills & Proficiency
            </h3>
            {/* Legend */}
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 32 }}>
              {CATEGORIES.map(cat => (
                <div key={cat} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{
                    width: 8, height: 8,
                    borderRadius: "50%",
                    background: CAT_COLORS[cat],
                    display: "inline-block",
                  }} />
                  <span style={{ fontSize: 12, color: "#D4CFC4" }}>{cat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} i={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
