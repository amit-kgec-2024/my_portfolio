"use client";

import { motion } from "framer-motion";
import { interests } from "@/data/portfolio";

export default function Interests() {
  return (
    <div style={{ marginTop: 16 }}>
      <h4 style={{ fontSize: 16, fontWeight: 800, color: "#F5F3EE", marginBottom: 12 }}>Interests</h4>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        {interests.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              border: "1px solid rgba(255,255,255,0.04)",
              color: "#F5F3EE",
              fontWeight: 700,
              letterSpacing: "0.02em",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <div style={{ marginTop: 12 }}>
        <div style={{ height: 8, width: "100%", borderRadius: 8, background: "linear-gradient(90deg,#C8F135,#4AB8FF,#B09EFF)" }} />
      </div>
    </div>
  );
}
