import React, { useState } from "react";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const proofPoints = [
    { value: "140+", label: "Projects Shipped", color: "#1a1a1a" },
    { value: "3.8x", label: "Avg Traffic Lift", color: "#0055ff" },
    { value: "99.4%", label: "On-Time Delivery", color: "#1a1a1a" },
    { value: "12+", label: "Industry Awards", color: "#e63b2e" }
  ];

  return (
    <section
      id="hero"
      className="bg-grid-mesh"
      style={{
        position: "relative",
        paddingTop: "130px",
        paddingBottom: "90px",
        overflow: "hidden",
        borderBottom: "2px solid #1a1a1a"
      }}
    >
      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left Column: Typographic Pitch */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1.5rem" }}>
            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#1a1a1a"
              }}
            >
              We Build Digital <br className="hidden sm:inline"/>
              Experiences <br/>
              <span className="hero-highlight">
                That Grow Your Business.
              </span>
            </h1>

            {/* Subcopy */}
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                color: "#4a4a4a",
                maxWidth: "580px"
              }}
            >
              Elaracode engineers high-performance web applications, ROI-driven SEO campaigns, strategic digital marketing, and bespoke IT solutions for forward-thinking brands.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", width: "100%" }}>
              <a
                href="#services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.6rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  border: "2px solid #1a1a1a",
                  fontWeight: 700,
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  boxShadow: "4px 4px 0px #1a1a1a",
                  transition: "all 0.15s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(-2px, -2px)";
                  e.currentTarget.style.boxShadow = "6px 6px 0px #1a1a1a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = "4px 4px 0px #1a1a1a";
                }}
              >
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_downward</span>
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                style={{
                  padding: "0.85rem 1.6rem",
                  fontSize: "0.8125rem"
                }}
              >
                <span>Let's Talk</span>
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
              </a>
            </div>

            {/* Trust Proof Points Bar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                paddingTop: "1.5rem",
                marginTop: "0.5rem",
                borderTop: "2px solid #1a1a1a",
                width: "100%"
              }}
              className="proof-points-grid"
            >
              {proofPoints.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "0.85rem",
                    backgroundColor: "#ffffff",
                    border: "2px solid #1a1a1a",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "2px 2px 0px #1a1a1a"
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: item.color
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#4a4a4a",
                      marginTop: "0.2rem"
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 2.5D Bubble Hovering Perspective Showcase */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              perspective: "1200px"
            }}
          >
            <div
              className={`bubble-card-wrapper ${isHovered ? "is-hovered" : ""}`}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "540px",
                transformStyle: "preserve-3d",
                transform: isHovered
                  ? `translateY(-12px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.025)`
                  : undefined,
                transition: isHovered
                  ? "transform 0.1s ease-out, box-shadow 0.2s ease"
                  : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease"
              }}
            >
              {/* Layer 0: Background Bauhaus Geometric Depth Blocks */}
              <div
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "-14px",
                  width: "66px",
                  height: "66px",
                  backgroundColor: "#e63b2e",
                  border: "2px solid #1a1a1a",
                  zIndex: 0,
                  transform: "translateZ(-20px)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-14px",
                  right: "-14px",
                  width: "76px",
                  height: "76px",
                  backgroundColor: "#ffcc00",
                  border: "2px solid #1a1a1a",
                  zIndex: 0,
                  transform: "translateZ(-20px)"
                }}
              />

              {/* Layer 1: Floating 2.5D Top-Right Badge */}
              <div
                className="badge-bubble-float-1"
                style={{
                  position: "absolute",
                  top: "-18px",
                  right: "-12px",
                  zIndex: 5,
                  padding: "0.45rem 0.85rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "#ffcc00",
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #1a1a1a",
                  color: "#1a1a1a",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transform: "translateZ(45px)",
                  pointerEvents: "none"
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>rocket_launch</span>
                <span>Web Apps • React 19</span>
              </div>

              {/* Layer 2: Floating 2.5D Bottom-Left Pill */}
              <div
                className="badge-bubble-float-2"
                style={{
                  position: "absolute",
                  bottom: "-18px",
                  left: "-12px",
                  zIndex: 5,
                  padding: "0.45rem 0.85rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "#ffffff",
                  border: "2px solid #1a1a1a",
                  boxShadow: "3px 3px 0px #1a1a1a",
                  color: "#1a1a1a",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transform: "translateZ(40px)",
                  pointerEvents: "none"
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "#00c853" }}>trending_up</span>
                <span>SEO &amp; Growth Analytics</span>
              </div>

              {/* Layer 3: Main 2.5D Browser Chassis */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  border: "2px solid #1a1a1a",
                  boxShadow: "6px 8px 0px #1a1a1a, 0 16px 28px rgba(26, 26, 26, 0.12)",
                  padding: "0.75rem",
                  transform: "translateZ(10px)"
                }}
              >
                {/* Window Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.5rem 0.75rem",
                    borderBottom: "2px solid #1a1a1a",
                    marginBottom: "0.5rem",
                    backgroundColor: "#f2ede5",
                    borderRadius: "4px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#e63b2e", border: "1px solid #1a1a1a" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ffcc00", border: "1px solid #1a1a1a" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#0055ff", border: "1px solid #1a1a1a" }} />
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      letterSpacing: "0.08em"
                    }}
                  >
                    ELARA-DIGITAL-STUDIO • WORKSPACE
                  </div>
                  <div style={{ display: "flex", alignItems: "center", color: "#1a1a1a" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>web</span>
                  </div>
                </div>

                {/* 2.5D Digital Agency Showcase Image */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: "4px",
                    overflow: "hidden",
                    aspectRatio: "16 / 9",
                    backgroundColor: "#f5f0e8",
                    border: "2px solid #1a1a1a"
                  }}
                >
                  <picture>
                    <source srcSet="/hero-showcase.webp" type="image/webp" />
                    <img
                      src="/hero-showcase.jpg"
                      alt="Elaracode digital engineering, modern web dev, UI/UX layers, and SEO analytics"
                      width="1376"
                      height="768"
                      fetchPriority="high"
                      decoding="async"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease"
                      }}
                    />
                  </picture>
                </div>

                {/* Window Footer Status */}
                <div
                  style={{
                    marginTop: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.5rem",
                    color: "#4a4a4a"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#00c853" }} />
                    HIGH-PERFORMANCE ARCHITECTURE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bubble-card-wrapper:not(.is-hovered) {
          animation: bubbleHovering25D 6s ease-in-out infinite;
        }

        @keyframes bubbleHovering25D {
          0% {
            transform: translateY(0px) rotateX(5deg) rotateY(-6deg) rotateZ(0deg) scale(1);
          }
          25% {
            transform: translateY(-10px) rotateX(7deg) rotateY(-4deg) rotateZ(0.8deg) scale(1.015);
          }
          50% {
            transform: translateY(-18px) rotateX(4deg) rotateY(-7deg) rotateZ(-0.6deg) scale(1.025);
          }
          75% {
            transform: translateY(-8px) rotateX(3deg) rotateY(-8deg) rotateZ(-0.9deg) scale(1.012);
          }
          100% {
            transform: translateY(0px) rotateX(5deg) rotateY(-6deg) rotateZ(0deg) scale(1);
          }
        }

        .badge-bubble-float-1 {
          animation: badgeFloat1 4.5s ease-in-out infinite;
        }

        @keyframes badgeFloat1 {
          0%, 100% {
            transform: translateZ(45px) translateY(0px) rotate(-1deg);
          }
          50% {
            transform: translateZ(45px) translateY(-7px) rotate(1.5deg);
          }
        }

        .badge-bubble-float-2 {
          animation: badgeFloat2 5.2s ease-in-out infinite;
        }

        @keyframes badgeFloat2 {
          0%, 100% {
            transform: translateZ(40px) translateY(0px) rotate(1deg);
          }
          50% {
            transform: translateZ(40px) translateY(6px) rotate(-1deg);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @media (max-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
          .proof-points-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          .badge-bubble-float-1,
          .badge-bubble-float-2 {
            font-size: 0.7rem !important;
            padding: 0.35rem 0.65rem !important;
          }
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
