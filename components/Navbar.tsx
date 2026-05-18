"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
      setMenuOpen(false); // Close menu on scroll
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "clamp(12px, 2vw, 16px) clamp(16px, 4vw, 32px)" : "clamp(20px, 3vw, 28px) clamp(16px, 4vw, 32px)",
          background: scrolled ? "rgba(10,10,15,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,241,53,0.08)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              fontFamily: "monospace",
              fontSize: "clamp(16px, 3vw, 20px)",
              fontWeight: 700,
              color: "#C8F135",
              letterSpacing: "-0.02em",
            }}
          >
            AM<span style={{ color: "#F5F3EE" }}>.</span>
          </motion.div>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "clamp(24px, 5vw, 40px)", alignItems: "center" }}>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              style={{
                color: "#D4CFC4",
                textDecoration: "none",
                fontSize: "clamp(12px, 1.5vw, 14px)",
                letterSpacing: "0.02em",
                fontWeight: 500,
                position: "relative",
              }}
              className="nav-link"
              whileHover={{ color: "#C8F135" }}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "#A8D020" }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "#C8F135",
              color: "#0A0A0F",
              padding: "clamp(8px, 1.5vw, 10px) clamp(16px, 3vw, 24px)",
              borderRadius: "100px",
              fontSize: "clamp(11px, 1.5vw, 13px)",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
            }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#F5F3EE",
            flexDirection: "column",
            gap: "clamp(4px, 1vw, 5px)",
            padding: "clamp(6px, 1.5vw, 8px)",
          }}
          className="mobile-menu-btn"
        >
          <span style={{ display: "block", width: "clamp(20px, 5vw, 24px)", height: 2, background: menuOpen ? "#C8F135" : "#F5F3EE" }} />
          <span style={{ display: "block", width: "clamp(14px, 4vw, 16px)", height: 2, background: menuOpen ? "#C8F135" : "#F5F3EE" }} />
          <span style={{ display: "block", width: "clamp(20px, 5vw, 24px)", height: 2, background: menuOpen ? "#C8F135" : "#F5F3EE" }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              right: 0,
              background: "rgba(10,10,15,0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 101,
              padding: "clamp(20px, 4vw, 32px)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(16px, 3vw, 24px)",
              borderBottom: "1px solid rgba(200,241,53,0.1)",
              maxHeight: "calc(100vh - 60px)",
              overflowY: "auto",
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#F5F3EE",
                  textDecoration: "none",
                  fontSize: "clamp(18px, 5vw, 24px)",
                  fontWeight: 600,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => e.target.style.color = "#C8F135"}
                onMouseLeave={(e) => e.target.style.color = "#F5F3EE"}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          nav > div:nth-child(2) { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          nav { padding: clamp(12px, 2vw, 16px) clamp(12px, 3vw, 16px) !important; }
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
