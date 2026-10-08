import { useState } from "react";
import { SocialButtonsRow } from "./SocialIcons";

export default function Footer({ theme }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#f5f0e8",
        borderTop: "2px solid #1a1a1a",
        paddingTop: "70px",
        paddingBottom: "35px"
      }}
    >
      <div className="container-custom">
        {/* Top Tier */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem"
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", gridColumn: "span 1" }}>
            <a
              href="/"
              aria-label="Elaracode — Home"
              style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
            >
              <img
                src={theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
                alt="Elaracode — Digital Systems & High-Performance Engineering"
                className="brand-logo-img"
                style={{ height: "36px", width: "auto" }}
              />
            </a>
            <p style={{ fontSize: "0.875rem", color: "#4a4a4a", lineHeight: 1.6, maxWidth: "340px" }}>
              High-velocity digital engineering, tactical SEO dominance, and bespoke cloud solutions engineered for enterprise-scale outcomes.
            </p>

            <a
              href="mailto:elaracode1@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#1a1a1a",
                fontSize: "0.875rem",
                fontWeight: 700,
                textDecoration: "none"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>mail</span>
              <span>info@elaracode.com</span>
            </a>

            <a

              href="https://wa.me/919990648033?text=Hi%20Elaracode,%20I'd%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#1a1a1a",
                fontSize: "0.875rem",
                fontWeight: 700,
                textDecoration: "none"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px", color: "#25D366" }}>chat</span>
              <span>WhatsApp: +91-9990648033</span>
            </a>

            {/* Social Channels */}
            <div style={{ marginTop: "0.5rem" }}>
              <SocialButtonsRow compact={true} />
            </div>
          </div>

          {/* Capabilities Directory */}
          <div>
            <div style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
              Our Services
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", padding: 0 }}>
              {[
                "GMB Optimization",
                "Static Website",
                "Dynamic Website",
                "E-Commerce"
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    title={`Elaracode ${link}`}
                    style={{ fontSize: "0.875rem", color: "#4a4a4a", textDecoration: "none", fontWeight: 500, transition: "color 0.15s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#1a1a1a";
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#4a4a4a";
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Directory */}
          <div>
            <div style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
              Solutions
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", padding: 0 }}>
              {["Google Maps 3-Pack", "React & Next.js Stacks", "Payment Gateways", "Privacy Protocol"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    title={`Elaracode ${link} Solution`}
                    style={{ fontSize: "0.875rem", color: "#4a4a4a", textDecoration: "none", fontWeight: 500, transition: "color 0.15s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#1a1a1a";
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#4a4a4a";
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Dispatch Newsletter */}
          <div>
            <div style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
              Engineering Dispatch
            </div>
            <p style={{ fontSize: "0.875rem", color: "#4a4a4a", lineHeight: 1.5, marginBottom: "1rem" }}>
              Quarterly teardowns of algorithms, design token structures, and high-performance stacks.
            </p>
            {subscribed ? (
              <div style={{ fontSize: "0.8125rem", color: "#1a1a1a", fontWeight: 700 }}>
                ✓ Subscribed to Quarterly Engineering Dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="email"
                  required
                  placeholder="dev@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: "0.6rem 0.85rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "#ffffff",
                    border: "2px solid #1a1a1a",
                    color: "#1a1a1a",
                    fontSize: "0.8125rem",
                    outline: "none",
                    flex: 1
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: "0.6rem 1rem", fontSize: "0.8125rem" }}>
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "2px solid #1a1a1a",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.8125rem",
            color: "#4a4a4a"
          }}
        >
          <p>© 2026 Elaracode Digital Systems Inc. All rights reserved. Precision-engineered for scale.</p>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a
              href="#contact"
              style={{ color: "#4a4a4a", textDecoration: "none", fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4a4a")}
            >
              Security Protocol
            </a>
            <a
              href="#about"
              style={{ color: "#4a4a4a", textDecoration: "none", fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4a4a")}
            >
              Status Dashboard
            </a>
            <a
              href="#services"
              style={{ color: "#4a4a4a", textDecoration: "none", fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4a4a")}
            >
              SLA Guarantee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
