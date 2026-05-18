"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { personalInfo, stats } from "@/data/portfolio";

const ROLES = [
  "Creative Developer",
  "UI Engineer",
  "3D Artist",
  "Open Sourcerer",
];

function FloatingOrb({
  x,
  y,
  size,
  color,
  delay,
}: {
  x: string;
  y: string;
  size: number;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: `blur(${size / 2}px)`,
        opacity: 0.12,
        pointerEvents: "none",
      }}
    />
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",

        /* FIXED TOP SPACE */
        paddingTop: "90px",
        paddingBottom: "40px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* Background */}
      <FloatingOrb
        x="10%"
        y="20%"
        size={300}
        color="#C8F135"
        delay={0}
      />

      <FloatingOrb
        x="70%"
        y="60%"
        size={350}
        color="#4AB8FF"
        delay={1.5}
      />

      <FloatingOrb
        x="50%"
        y="10%"
        size={250}
        color="#B09EFF"
        delay={0.8}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(200,241,53,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,241,53,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Main */}
      <motion.div
        style={{
          y,
          opacity,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(200,241,53,0.08)",
            border: "1px solid rgba(200,241,53,0.2)",
            padding: "8px 16px",
            borderRadius: "100px",
            marginBottom: "24px",
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#C8F135",
            }}
          />

          <span
            style={{
              fontSize: "12px",
              color: "#C8F135",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          style={{
            fontSize: "clamp(52px, 10vw, 140px)",
            fontWeight: 800,
            lineHeight: 0.9,
            color: "#F5F3EE",
            margin: 0,
            letterSpacing: "-0.05em",
          }}
        >
          {personalInfo.name.split(" ")[0]}
        </motion.h1>

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            fontSize: "clamp(52px, 10vw, 140px)",
            fontWeight: 800,
            lineHeight: 0.9,
            marginBottom: "28px",
            letterSpacing: "-0.05em",
            background: "linear-gradient(135deg,#C8F135,#4AB8FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {personalInfo.name.split(" ")[1]}
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          {ROLES.map((role, i) => (
            <div
              key={role}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                border:
                  i === 0
                    ? "1px solid #C8F135"
                    : "1px solid rgba(255,255,255,0.15)",
                color: i === 0 ? "#C8F135" : "#D4CFC4",
                fontSize: "14px",
                fontWeight: 600,
                background:
                  i === 0
                    ? "rgba(200,241,53,0.08)"
                    : "rgba(255,255,255,0.03)",
              }}
            >
              {role}
            </div>
          ))}
        </motion.div>

        {/* Content */}
        <div
          className="hero-layout"
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "flex-start",
          }}
        >
          {/* Left */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#D4CFC4",
                maxWidth: "650px",
                marginBottom: "32px",
              }}
            >
              {personalInfo.bio}
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#projects"
                style={{
                  background: "#C8F135",
                  color: "#0A0A0F",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                View Work
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#D4CFC4",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="stats-grid">
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "26px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "42px",
                    fontWeight: 800,
                    color: stat.color,
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    color: "#A8A39D",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CSS */}
      <style>{`
        .stats-grid{
          width: 100%;
          max-width: 480px;
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:16px;
        }

        @media (max-width: 1024px){
          .hero-layout{
            flex-direction:column;
            gap:40px !important;
          }

          .stats-grid{
            max-width:100%;
          }
        }

        @media (max-width: 768px){

          #hero{
            padding-top:70px !important;
          }

          .stats-grid{
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media (max-width: 480px){

          #hero{
            padding-top:60px !important;
            padding-left:16px !important;
            padding-right:16px !important;
          }

          .stats-grid{
            grid-template-columns:1fr;
          }
        }
      `}</style>
    </section>
  );
}