"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);

    emailjs
      .sendForm(
        "service_376k5eu",
        "template_z3ikrfn",
        formRef.current as HTMLFormElement,
        "PpfGx2sy5pjNVFUL2"
      )
      .then(() => {
        console.log("Email sent");
        setSending(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err: unknown) => {
        console.log(err);
        setSending(false);
      });
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: "16px 20px",
    color: "#F5F3EE",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
    transition: "all 0.2s ease",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "20px 20px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}>
          {/* Left: CTA text */}
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
                06 — Contact
              </span>
              <h2 style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#F5F3EE",
                marginTop: 12,
                lineHeight: 1,
                marginBottom: 24,
              }}>
                Let&apos;s build<br />something<br />
                <span style={{
                  background: "linear-gradient(135deg, #C8F135, #4AB8FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>great.</span>
              </h2>
              <p style={{ fontSize: 17, color: "#D4CFC4", lineHeight: 1.7, marginBottom: 48 }}>
                Have a project in mind? Looking for a collaborator on your next big idea? Or just want to chat about creative dev? My inbox is always open.
              </p>

              {/* Contact info */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "✉️", label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: "📍", label: "Location", value: personalInfo.location },
                  { icon: "🐙", label: "GitHub", value: "@amit-kgec-2024", href: personalInfo.socials.github },
                  { icon: "🐦", label: "Twitter", value: "@mandal_ami40889", href: personalInfo.socials.twitter },
                ].map(item => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 6 }}
                    style={{ display: "flex", alignItems: "center", gap: 16 }}
                  >
                    <span style={{
                      width: 40, height: 40,
                      borderRadius: 10,
                      background: "rgba(200,241,53,0.08)",
                      border: "1px solid rgba(200,241,53,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </span>
                    <div>
                      <div style={{ fontSize: 11, color: "#D4CFC4", letterSpacing: "0.08em" }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: 15, color: "#F5F3EE", fontWeight: 500, textDecoration: "none" }}>
                          {item.value}
                        </a>
                      ) : (
                        <div style={{ fontSize: 15, color: "#F5F3EE", fontWeight: 500 }}>{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 24,
              padding: "48px",
            }}
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div style={{ fontSize: 60, marginBottom: 20 }}>🎉</div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#C8F135", marginBottom: 12 }}>
                  Message Sent!
                </h3>
                <p style={{ color: "#D4CFC4", fontSize: 16 }}>
                  I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: 24,
                    background: "rgba(200,241,53,0.1)",
                    border: "1px solid rgba(200,241,53,0.2)",
                    color: "#C8F135",
                    padding: "12px 28px",
                    borderRadius: 100,
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#F5F3EE", marginBottom: 8 }}>
                  Send a message
                </h3>

                <div>
                  <label style={{ fontSize: 12, color: "#D4CFC4", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>
                    YOUR NAME
                  </label>
                  <input
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Alex Johnson"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "rgba(200,241,53,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>

                <div>
                  <label style={{ fontSize: 12, color: "#D4CFC4", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="alex@company.com"
                    type="email"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "rgba(200,241,53,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>

                <div>
                  <label style={{ fontSize: 12, color: "#D4CFC4", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>
                    MESSAGE
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" as const, minHeight: 140 }}
                    onFocus={e => e.target.style.borderColor = "rgba(200,241,53,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: "#A8D020" }}
                  whileTap={{ scale: 0.97 }}
                  disabled={sending}
                  style={{
                    background: sending ? "#A8D020" : "#C8F135",
                    color: "#0A0A0F",
                    padding: "18px 36px",
                    borderRadius: 100,
                    fontWeight: 700,
                    fontSize: 15,
                    border: "none",
                    cursor: sending ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    width: "100%",
                  }}
                >
                  {sending ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        style={{ display: "inline-block" }}
                      >
                        ⟳
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </motion.button>
              </div>
            )}
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
