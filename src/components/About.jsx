import React from "react";
import { SocialButtonsRow } from "./SocialIcons";

export default function About() {
  const pillars = [
    {
      icon: "precision_manufacturing",
      title: "Engineering Rigor",
      desc: "Zero bloated code. Maximum execution speed and minimal memory footprint.",
      accent: "#ffcc00"
    },
    {
      icon: "analytics",
      title: "Data-First",
      desc: "Every UI decision tested against quantifiable conversion lift and user retention.",
      accent: "#e63b2e"
    },
    {
      icon: "visibility",
      title: "Transparency",
      desc: "Direct Slack & git access to your principal engineers. No account manager telephone games.",
      accent: "#0055ff"
    }
  ];

  return (
    <section
      id="about"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundColor: "#f5f0e8",
        borderBottom: "2px solid #1a1a1a",
        position: "relative"
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center"
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
                width: "fit-content"
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>psychology</span>
              ABOUT ELARACODE
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#1a1a1a"
              }}
            >
              Your Strategic Partner in the Digital Age
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: "#4a4a4a",
                lineHeight: 1.65
              }}
            >
              Founded by veteran software engineers and conversion specialists, Elaracode was created to replace the fragmented, bloated agency model. We unite surgical technical development with psychological direct-response strategy.
            </p>

            <p
              style={{
                fontSize: "1rem",
                color: "#4a4a4a",
                lineHeight: 1.65
              }}
            >
              We don't use off-the-shelf templates or generic playbooks. Every digital asset we engineer is handcrafted from clean primitives to secure unfair algorithmic advantages and bulletproof scalability for your organization.
            </p>

            {/* 3 Pillars Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
                paddingTop: "0.5rem"
              }}
            >
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1.25rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "#ffffff",
                    border: "2px solid #1a1a1a",
                    boxShadow: "2px 2px 0px #1a1a1a"
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: "24px",
                      color: pillar.accent,
                      marginBottom: "0.5rem",
                      display: "block"
                    }}
                  >
                    {pillar.icon}
                  </span>
                  <h4
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 800,
                      color: "#1a1a1a",
                      marginBottom: "0.25rem",
                      fontFamily: "var(--font-display)"
                    }}
                  >
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "#4a4a4a", lineHeight: 1.5 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Official Social Media Channels */}
            <div style={{ marginTop: "0.5rem", paddingTop: "1.25rem", borderTop: "2px solid #1a1a1a" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#1a1a1a", marginBottom: "0.75rem" }}>
                Official Social Channels
              </div>
              <SocialButtonsRow />
            </div>
          </div>

          {/* Right Column: Standard Operating Telemetry Card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                backgroundColor: "#ffffff",
                border: "2px solid #1a1a1a",
                boxShadow: "6px 6px 0px #1a1a1a",
                padding: "2.25rem",
                position: "relative"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1.25rem",
                  borderBottom: "2px solid #1a1a1a",
                  marginBottom: "1.75rem"
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#e63b2e",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase"
                    }}
                  >
                    Engineering Culture
                  </div>
                  <div
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#1a1a1a",
                      fontFamily: "var(--font-display)",
                      marginTop: "0.2rem"
                    }}
                  >
                    Standard Operating Telemetry
                  </div>
                </div>
                <span
                  style={{
                    padding: "0.3rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "#ffcc00",
                    border: "2px solid #1a1a1a",
                    boxShadow: "2px 2px 0px #1a1a1a",
                    color: "#1a1a1a",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase"
                  }}
                >
                  Active Node
                </span>
              </div>

              {/* Progress Metric Bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.875rem",
                      marginBottom: "0.4rem"
                    }}
                  >
                    <span style={{ color: "#1a1a1a", fontWeight: 700 }}>
                      Lighthouse Performance Baseline
                    </span>
                    <span style={{ color: "#1a1a1a", fontFamily: "monospace", fontWeight: 800 }}>
                      98% Avg
                    </span>
                  </div>
                  <div
                    style={{
                      height: "10px",
                      width: "100%",
                      backgroundColor: "#eee9e0",
                      border: "2px solid #1a1a1a",
                      borderRadius: "2px",
                      overflow: "hidden"
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "98%",
                        backgroundColor: "#ffcc00"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.875rem",
                      marginBottom: "0.4rem"
                    }}
                  >
                    <span style={{ color: "#1a1a1a", fontWeight: 700 }}>
                      Organic Ranking Velocity
                    </span>
                    <span style={{ color: "#e63b2e", fontFamily: "monospace", fontWeight: 800 }}>
                      4.2x Industry Standard
                    </span>
                  </div>
                  <div
                    style={{
                      height: "10px",
                      width: "100%",
                      backgroundColor: "#eee9e0",
                      border: "2px solid #1a1a1a",
                      borderRadius: "2px",
                      overflow: "hidden"
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "88%",
                        backgroundColor: "#e63b2e"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.875rem",
                      marginBottom: "0.4rem"
                    }}
                  >
                    <span style={{ color: "#1a1a1a", fontWeight: 700 }}>
                      Code Cleanliness &amp; Type Safety
                    </span>
                    <span style={{ color: "#0055ff", fontFamily: "monospace", fontWeight: 800 }}>
                      100% Strict TypeScript
                    </span>
                  </div>
                  <div
                    style={{
                      height: "10px",
                      width: "100%",
                      backgroundColor: "#eee9e0",
                      border: "2px solid #1a1a1a",
                      borderRadius: "2px",
                      overflow: "hidden"
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#0055ff"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Founder Micro Quote */}
              <div
                style={{
                  marginTop: "1.75rem",
                  padding: "1.25rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "#f5f0e8",
                  border: "2px solid #1a1a1a",
                  boxShadow: "2px 2px 0px #1a1a1a",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem"
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "28px", color: "#1a1a1a" }}>
                  format_quote
                </span>
                <p style={{ fontSize: "0.875rem", color: "#4a4a4a", fontStyle: "italic", lineHeight: 1.6 }}>
                  "Our commitment is simple: build solutions so resilient and commercially lethal that our partners view us as their unfair competitive advantage."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
