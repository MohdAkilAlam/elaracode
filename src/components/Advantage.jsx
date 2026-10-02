import React from "react";

export default function Advantage() {
  const advantages = [
    {
      icon: "speed",
      title: "Zero Bloatware",
      desc: "No bloated WordPress builders or excessive heavy dependencies. We craft ultra-light code with optimal memory footprints.",
      bg: "#ffcc00",
      color: "#1a1a1a"
    },
    {
      icon: "forum",
      title: "Direct Access",
      desc: "Skip non-technical account managers. You collaborate directly with principal architects and growth strategists.",
      bg: "#ffdad6",
      color: "#e63b2e"
    },
    {
      icon: "architecture",
      title: "Tailored Systems",
      desc: "Every pipeline, API handler, and landing page structure is tailored directly to your distinct customer acquisition economics.",
      bg: "#d6e3ff",
      color: "#0055ff"
    },
    {
      icon: "security",
      title: "Full-Lifecycle SLA",
      desc: "We don't hand off and disappear. Our proactive monitoring, continuous indexing, and optimization stay on watch 24/7.",
      bg: "#eee9e0",
      color: "#1a1a1a"
    }
  ];

  return (
    <section
      id="advantage"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundColor: "#f5f0e8",
        borderBottom: "2px solid #1a1a1a",
        position: "relative"
      }}
    >
      <div className="container-custom">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.85rem",
              borderRadius: "var(--radius-md)",
              backgroundColor: "#ffdad6",
              border: "2px solid #1a1a1a",
              boxShadow: "2px 2px 0px #1a1a1a",
              color: "#e63b2e",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.85rem"
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>verified</span>
            THE ELARA ADVANTAGE
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              marginBottom: "0.75rem"
            }}
          >
            Engineered Differently From Day One
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#4a4a4a", lineHeight: 1.6 }}>
            Why leading enterprises migrate their digital initiatives to Elaracode instead of traditional retainers.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="luminous-border"
              style={{
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                backgroundColor: "#ffffff"
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: item.bg,
                  color: item.color,
                  border: "2px solid #1a1a1a",
                  boxShadow: "2px 2px 0px #1a1a1a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
                  {item.icon}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 800,
                  color: "#1a1a1a",
                  fontFamily: "var(--font-display)"
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#4a4a4a",
                  lineHeight: 1.6
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
