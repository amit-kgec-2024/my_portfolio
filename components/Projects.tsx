"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number] & {
  stats?: { stars?: number | string; views?: number | string };
  github?: string;
  live?: string;
  icon?: string;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? project.color + "40" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "none",
      }}
    >
      {/* Project image placeholder */}
      <div style={{
        height: 220,
        background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <motion.div
          animate={hovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            width: 80, height: 80,
            borderRadius: 20,
            background: project.color + "20",
            border: `2px solid ${project.color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 32 }} role="img" aria-label={`${project.title} icon`}>
            {project.icon ?? "🏔️"}
          </span>
        </motion.div>

        {/* Year badge */}
        <div style={{
          position: "absolute",
          top: 16, right: 16,
          background: "rgba(10,10,15,0.7)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "4px 12px",
          borderRadius: 100,
          fontSize: 12,
          color: "#D4CFC4",
        }}>
          {project.year}
        </div>

        {project.featured && (
          <div style={{
            position: "absolute",
            top: 16, left: 16,
            background: project.color,
            color: "#0A0A0F",
            padding: "4px 12px",
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
          }}>
            FEATURED
          </div>
        )}
      </div>

      <div style={{ padding: 28 }}>
        <h3 style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#F5F3EE",
          marginBottom: 12,
          letterSpacing: "-0.02em",
        }}>
          {project.title}
        </h3>

        <p style={{ fontSize: 14, color: "#D4CFC4", lineHeight: 1.65, marginBottom: 20 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: "4px 12px",
              background: project.color + "12",
              border: `1px solid ${project.color}25`,
              borderRadius: 100,
              fontSize: 12,
              color: project.color,
              fontWeight: 500,
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Stats + links */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "⭐", value: project.stats?.stars ?? "—" },
              { label: "🔗", value: project.stats?.views ?? "—" },
            ].map(s => (
              <span key={s.label} style={{ fontSize: 13, color: "#D4CFC4" }}>
                {s.label} {typeof s.value === "number" ? s.value.toLocaleString() : s.value}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {project.github ? (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                onClick={e => e.stopPropagation()}
                style={{
                  width: 36, height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  textDecoration: "none",
                }}
              >
                ⌥
              </motion.a>
            ) : null}
            {project.live ? (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, background: project.color + "dd" }}
                onClick={e => e.stopPropagation()}
                style={{
                  padding: "8px 20px",
                  background: project.color + "20",
                  border: `1px solid ${project.color}40`,
                  borderRadius: 100,
                  color: project.color,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                Live →
              </motion.a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const filtered = filter === "featured" ? projects.filter(p => p.featured) : projects;

  return (
    <section id="projects" style={{ padding: "20px 20px", margin: "0 auto" }}>
      {/* Header */}
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
          02 — Selected Work
        </span>
        <h2 style={{
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#F5F3EE",
          marginTop: 12,
          lineHeight: 1,
        }}>
          Projects that<br />
          <span style={{
            background: "linear-gradient(135deg, #C8F135, #4AB8FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>ship.</span>
        </h2>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ display: "flex", gap: 8, marginBottom: 48 }}
      >
        {["all", "featured"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f as "all" | "featured")}
            style={{
              padding: "8px 24px",
              borderRadius: 100,
              border: filter === f ? "none" : "1px solid rgba(255,255,255,0.1)",
              background: filter === f ? "#C8F135" : "transparent",
              color: filter === f ? "#0A0A0F" : "#D4CFC4",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              textTransform: "capitalize",
              transition: "all 0.2s ease",
            }}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: 20,
      }}>
        <AnimatePresence>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
