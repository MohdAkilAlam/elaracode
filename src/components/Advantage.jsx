import React from "react";

export default function Advantage() {
  const advantages = [
    {
      id: "speed",
      icon: "speed",
      title: "Zero Bloatware",
      desc: "No bloated WordPress builders or excessive heavy dependencies. We craft ultra-light code with optimal memory footprints."
    },
    {
      id: "forum",
      icon: "forum",
      title: "Direct Access",
      desc: "Skip non-technical account managers. You collaborate directly with principal architects and growth strategists."
    },
    {
      id: "architecture",
      icon: "architecture",
      title: "Tailored Systems",
      desc: "Every pipeline, API handler, and landing page structure is tailored directly to your distinct customer acquisition economics."
    },
    {
      id: "security",
      icon: "security",
      title: "Full-Lifecycle SLA",
      desc: "We don't hand off and disappear. Our proactive monitoring, continuous indexing, and optimization stay on watch 24/7."
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
              className="luminous-border advantage-card"
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
                className={`advantage-icon-box advantage-icon-${item.id}`}
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

      <style>{`
        .advantage-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          border: 2px solid #1a1a1a;
          box-shadow: 2px 2px 0px #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        /* Light Mode Icon Styles */
        .advantage-icon-speed {
          background-color: #ffcc00;
          color: #1a1a1a;
        }
        .advantage-icon-forum {
          background-color: #ffdad6;
          color: #e63b2e;
        }
        .advantage-icon-architecture {
          background-color: #d6e3ff;
          color: #0055ff;
        }
        .advantage-icon-security {
          background-color: #dcfce7;
          color: #16a34a;
        }

        /* Dark Mode Icon Styles - High contrast & crystal clear */
        [data-theme="dark"] .advantage-icon-speed {
          background-color: rgba(255, 204, 0, 0.18) !important;
          border-color: #ffcc00 !important;
          color: #ffcc00 !important;
          box-shadow: 2px 2px 0px #ffcc00 !important;
        }
        [data-theme="dark"] .advantage-icon-forum {
          background-color: rgba(230, 59, 46, 0.18) !important;
          border-color: #ff6b5e !important;
          color: #ff6b5e !important;
          box-shadow: 2px 2px 0px #ff6b5e !important;
        }
        [data-theme="dark"] .advantage-icon-architecture {
          background-color: rgba(0, 85, 255, 0.18) !important;
          border-color: #4d88ff !important;
          color: #4d88ff !important;
          box-shadow: 2px 2px 0px #4d88ff !important;
        }
        [data-theme="dark"] .advantage-icon-security {
          background-color: rgba(34, 197, 94, 0.18) !important;
          border-color: #22c55e !important;
          color: #22c55e !important;
          box-shadow: 2px 2px 0px #22c55e !important;
        }
      `}</style>
    </section>
  );
}
