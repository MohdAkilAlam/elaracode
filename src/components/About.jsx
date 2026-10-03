import React from "react";

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

  const pipelineStages = [
    {
      step: "01",
      icons: ["settings", "insights"],
      title: "Initial Diagnostic & Strategy",
      desc: "Comprehensive architecture audits, high-intent opportunity mapping, and full technical baseline benchmarking.",
      color: "#ffcc00",
      calloutTitle: "Vulnerability Scans",
      calloutBullets: ["Vulnerability Scans", "Database Optimization"]
    },
    {
      step: "02",
      icons: ["speed", "rocket_launch"],
      title: "Iterative Performance Tuning",
      desc: "Deep-core speed audits, headless SSR infrastructure, and precision UX conversion telemetry.",
      color: "#e63b2e",
      calloutTitle: "Database Optimization",
      calloutBullets: ["Database Optimization", "Infrastructure Checks", "Latency Profiling"]
    },
    {
      step: "03",
      icons: ["shield", "vpn_key"],
      title: "Final Deployment & Maintenance",
      desc: "Automated zero-downtime CI/CD pipelines, role-based access security, and round-the-clock SLA telemetry.",
      color: "#0055ff",
      calloutTitle: "Production Assurance",
      calloutBullets: ["Zero-Downtime Rollover", "24/7 SLA Telemetry"]
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

              {/* Pipeline Timeline from 2nd SS */}
              <div className="telemetry-pipeline-container">
                {/* Ambient Wave Graphic on Right */}
                <svg
                  className="pipeline-ambient-wave"
                  viewBox="0 0 100 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 25 0 C 95 80, -20 180, 65 270 C 105 320, 20 370, 50 420"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.22"
                  />
                </svg>

                {/* Pipeline Stages */}
                <div className="pipeline-stages-list">
                  {pipelineStages.map((stage, idx) => (
                    <div key={idx} className="pipeline-stage-row">
                      {/* Left: Step Info */}
                      <div className="pipeline-stage-left">
                        {/* Dual Icons */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.4rem" }}>
                          {stage.icons.map((iconName, iIdx) => (
                            <span
                              key={iIdx}
                              className="material-symbols-outlined"
                              style={{ fontSize: "20px", color: stage.color }}
                            >
                              {iconName}
                            </span>
                          ))}
                        </div>

                        <h4 className="pipeline-stage-title">
                          {stage.title}
                        </h4>
                        <p className="pipeline-stage-desc">
                          {stage.desc}
                        </p>
                      </div>

                      {/* Center: Node Dot on Vertical Line */}
                      <div className="pipeline-stage-center">
                        <div
                          className="pipeline-node-dot"
                          style={{
                            borderColor: stage.color,
                            boxShadow: `0 0 10px ${stage.color}50`
                          }}
                        >
                          <div
                            className="pipeline-node-core"
                            style={{ backgroundColor: stage.color }}
                          />
                        </div>
                      </div>

                      {/* Right: Callout Bubble */}
                      <div className="pipeline-stage-right">
                        <div className="pipeline-callout-card">
                          <div className="pipeline-callout-title" style={{ color: stage.color }}>
                            {stage.calloutTitle}
                          </div>
                          <ul className="pipeline-callout-list">
                            {stage.calloutBullets.map((bullet, bIdx) => (
                              <li key={bIdx}>
                                <span className="pipeline-callout-bullet-dot" style={{ backgroundColor: stage.color }} />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founder Micro Quote (Preserved from 1st image) */}
              <div
                className="founder-quote-box"
                style={{
                  marginTop: "2rem",
                  padding: "1.25rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "#f5f0e8",
                  border: "2px solid #1a1a1a",
                  boxShadow: "2px 2px 0px #1a1a1a",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  position: "relative",
                  zIndex: 3
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
        .telemetry-pipeline-container {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 0.5rem 0;
        }

        .pipeline-ambient-wave {
          position: absolute;
          right: -15px;
          top: 0;
          width: 80px;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          color: #1a1a1a;
        }

        [data-theme="dark"] .pipeline-ambient-wave {
          color: #f5f0e8;
        }

        .pipeline-stages-list {
          display: flex;
          flex-direction: column;
          gap: 1.85rem;
          position: relative;
          z-index: 2;
        }

        .pipeline-stage-row {
          display: grid;
          grid-template-columns: 1.15fr 36px 0.95fr;
          align-items: center;
          gap: 0.75rem;
          position: relative;
        }

        .pipeline-stage-left {
          display: flex;
          flex-direction: column;
        }

        .pipeline-stage-title {
          font-size: 1.025rem;
          font-weight: 800;
          line-height: 1.3;
          margin-bottom: 0.35rem;
          font-family: var(--font-display);
          color: #1a1a1a;
        }

        .pipeline-stage-desc {
          font-size: 0.8125rem;
          line-height: 1.45;
          color: #4a4a4a;
        }

        .pipeline-stage-center {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 100%;
        }

        /* Continuous Vertical Line connecting dots */
        .pipeline-stage-center::before {
          content: '';
          position: absolute;
          top: -1rem;
          bottom: -1rem;
          left: 50%;
          width: 2px;
          transform: translateX(-50%);
          background-color: #d0cbc3;
          z-index: 1;
        }

        [data-theme="dark"] .pipeline-stage-center::before {
          background-color: rgba(255, 255, 255, 0.22) !important;
        }

        .pipeline-stage-row:first-child .pipeline-stage-center::before {
          top: 50%;
        }

        .pipeline-stage-row:last-child .pipeline-stage-center::before {
          bottom: 50%;
        }

        /* Horizontal Connector from dot to callout */
        .pipeline-stage-center::after {
          content: '';
          position: absolute;
          left: 50%;
          right: -0.75rem;
          top: 50%;
          height: 2px;
          background-color: #d0cbc3;
          z-index: 1;
        }

        [data-theme="dark"] .pipeline-stage-center::after {
          background-color: rgba(255, 255, 255, 0.22) !important;
        }

        .pipeline-node-dot {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }

        [data-theme="dark"] .pipeline-node-dot {
          background-color: #181820 !important;
        }

        .pipeline-node-core {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .pipeline-stage-right {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 3;
        }

        .pipeline-callout-card {
          background-color: rgba(245, 240, 232, 0.95);
          border: 1.5px solid #1a1a1a;
          border-radius: var(--radius-md);
          padding: 0.65rem 0.85rem;
          box-shadow: 2px 2px 0px #1a1a1a;
          backdrop-filter: blur(8px);
          width: 100%;
          box-sizing: border-box;
        }

        [data-theme="dark"] .pipeline-callout-card {
          background-color: #20202c !important;
          border: 1.5px solid #2d2d3a !important;
          box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5) !important;
        }

        .pipeline-callout-title {
          font-size: 0.75rem;
          font-weight: 800;
          margin-bottom: 0.35rem;
          letter-spacing: 0.02em;
        }

        .pipeline-callout-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .pipeline-callout-list li {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          color: #4a4a4a;
          line-height: 1.35;
          white-space: nowrap;
        }

        [data-theme="dark"] .pipeline-callout-list li {
          color: #a1a1aa !important;
        }

        .pipeline-callout-bullet-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Dark Theme Support */
        [data-theme="dark"] .founder-quote-box {
          background-color: #20202c !important;
          border-color: #2d2d3a !important;
          box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5) !important;
        }

        [data-theme="dark"] .founder-quote-box p {
          color: #d4d4d8 !important;
        }

        [data-theme="dark"] .founder-quote-box span {
          color: #ffcc00 !important;
        }

        [data-theme="dark"] .pipeline-stage-title {
          color: #f5f0e8 !important;
        }

        [data-theme="dark"] .pipeline-stage-desc {
          color: #a1a1aa !important;
        }

        @media (max-width: 640px) {
          .pipeline-stage-row {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .pipeline-stage-center {
            display: none;
          }
        }

        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
