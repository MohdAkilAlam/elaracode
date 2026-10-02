import React from "react";
import { servicesData } from "../data/services";

export default function Services({ onSelectService }) {
  const iconThemes = {
    "web-dev": { bg: "#ffcc00", color: "#1a1a1a" },
    "seo": { bg: "#ffdad6", color: "#e63b2e" },
    "marketing": { bg: "#d6e3ff", color: "#0055ff" },
    "ux-ui": { bg: "#ffcc00", color: "#1a1a1a" },
    "gbp-local": { bg: "#ffdad6", color: "#e63b2e" },
    "cloud-it": { bg: "#d6e3ff", color: "#0055ff" }
  };

  return (
    <section
      id="services"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundColor: "#faf7f2",
        borderBottom: "2px solid #1a1a1a",
        position: "relative"
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "3.5rem"
          }}
          className="section-header-flex"
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "#ffcc00",
                border: "2px solid #1a1a1a",
                boxShadow: "2px 2px 0px #1a1a1a",
                color: "#1a1a1a",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.85rem"
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>tune</span>
              OUR CAPABILITIES
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#1a1a1a"
              }}
            >
              Engineered For Measurable Growth
            </h2>
          </div>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#4a4a4a",
              maxWidth: "500px",
              lineHeight: 1.6
            }}
          >
            End-to-end digital mastery designed without bloat. Every line of code and campaign budget is deployed for quantifiable return.
          </p>
        </div>

        {/* 6-Card Bauhaus Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem"
          }}
        >
          {servicesData.map((service) => {
            const theme = iconThemes[service.id] || { bg: "#ffcc00", color: "#1a1a1a" };

            return (
              <div
                key={service.id}
                className="luminous-border"
                style={{
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#ffffff"
                }}
              >
                <div>
                  {/* Top Icon */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: theme.bg,
                        color: theme.color,
                        border: "2px solid #1a1a1a",
                        boxShadow: "2px 2px 0px #1a1a1a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>
                        {service.icon}
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#1a1a1a",
                      marginBottom: "0.75rem",
                      fontFamily: "var(--font-display)"
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "#4a4a4a",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem"
                    }}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Deliverables */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.75rem" }}>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.8125rem", color: "#1a1a1a" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "#1a1a1a", marginTop: "2px" }}>
                          check_circle
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          backgroundColor: "#f5f0e8",
                          color: "#1a1a1a",
                          padding: "0.25rem 0.65rem",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid #1a1a1a"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "2px solid #1a1a1a" }}>
                  <button
                    onClick={() => onSelectService(service.title)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#1a1a1a",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: 0
                    }}
                  >
                    <span>Request Proposal</span>
                    <span className="material-symbols-outlined" style={{ fontSize: "16px", color: theme.color }}>arrow_forward</span>
                  </button>

                  <a
                    href="#calculator"
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "#4a4a4a",
                      textDecoration: "none"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4a4a")}
                  >
                    Scope Cost →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .section-header-flex {
            flex-direction: row !important;
            align-items: flex-end !important;
          }
        }
      `}</style>
    </section>
  );
}
