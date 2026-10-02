import React from "react";
import { processStages } from "../data/process";

export default function Process() {
  return (
    <section
      id="process"
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
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>route</span>
              EXECUTION BLUEPRINT
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#1a1a1a"
              }}
            >
              Our 5-Stage Sprint Roadmap
            </h2>
          </div>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#4a4a4a",
              maxWidth: "480px",
              lineHeight: 1.6
            }}
          >
            A predictable, transparent cadence designed to de-risk delivery and accelerate your speed-to-revenue.
          </p>
        </div>

        {/* 5-Step Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem"
          }}
        >
          {processStages.map((stage, idx) => (
            <div
              key={idx}
              className="luminous-border"
              style={{
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#ffffff"
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    marginBottom: "1rem"
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      fontFamily: "monospace",
                      color: idx === 4 ? "#e63b2e" : "#1a1a1a"
                    }}
                  >
                    {stage.number}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "#f5f0e8",
                      border: "1px solid #1a1a1a",
                      color: "#1a1a1a"
                    }}
                  >
                    {stage.duration}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#1a1a1a",
                    fontFamily: "var(--font-display)",
                    marginBottom: "0.5rem"
                  }}
                >
                  {stage.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#4a4a4a",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem"
                  }}
                >
                  {stage.description}
                </p>
              </div>

              <div style={{ paddingTop: "1rem", borderTop: "2px solid #1a1a1a" }}>
                <div style={{ fontSize: "0.75rem", color: "#1a1a1a", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  Key Milestones:
                </div>
                {stage.deliverables.map((d, dIdx) => (
                  <div key={dIdx} style={{ fontSize: "0.75rem", color: "#4a4a4a", display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.25rem" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "14px", color: "#1a1a1a" }}>done</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
