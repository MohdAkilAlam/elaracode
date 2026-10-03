import React, { useState } from "react";
import { servicesData } from "../data/services";

export default function Services({ onSelectService }) {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const iconThemes = {
    "gmb": { bg: "#d6e3ff", color: "#0055ff" },
    "static-website": { bg: "#ffcc00", color: "#1a1a1a" },
    "dynamic-website": { bg: "#ffdad6", color: "#e63b2e" },
    "ecommerce": { bg: "#e6f4ea", color: "#137333" }
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
              OUR CORE SERVICES &amp; PRICING
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
            Transparent, upfront pricing with zero bloat. Hover over any service card to view complete technical deliverables and sprint deliverables.
          </p>
        </div>

        {/* 4 Flip Cards Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const theme = iconThemes[service.id] || { bg: "#ffcc00", color: "#1a1a1a" };
            const isFlipped = !!flippedCards[service.id];

            return (
              <div
                key={service.id}
                className={`services-flip-card ${isFlipped ? "is-flipped" : ""}`}
                onClick={() => toggleFlip(service.id)}
                title="Hover or click to flip card"
              >
                <div className="services-flip-card-inner">
                  {/* FRONT FACE */}
                  <div className="services-card-face services-card-front">
                    <div className="services-card-body">
                      {/* Top Icon & Price Badge */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "1rem"
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
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
                          <span className="material-symbols-outlined" style={{ fontSize: "26px" }}>
                            {service.icon}
                          </span>
                        </div>

                        <span
                          style={{
                            padding: "0.25rem 0.65rem",
                            borderRadius: "var(--radius-sm)",
                            backgroundColor: "#ffcc00",
                            border: "2px solid #1a1a1a",
                            boxShadow: "2px 2px 0px #1a1a1a",
                            color: "#1a1a1a",
                            fontSize: "0.875rem",
                            fontWeight: 800,
                            letterSpacing: "-0.01em"
                          }}
                        >
                          {service.pricing}
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          marginBottom: "0.6rem",
                          fontFamily: "var(--font-display)"
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.835rem",
                          lineHeight: 1.5,
                          marginBottom: "0.75rem"
                        }}
                      >
                        {service.shortDesc}
                      </p>

                      {/* Capabilities on Front Face (fills empty space) */}
                      <div style={{ marginTop: "auto", marginBottom: "0.5rem" }}>
                        <div
                          style={{
                            fontSize: "0.675rem",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            opacity: 0.7,
                            marginBottom: "0.45rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem"
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: "14px", color: theme.color }}>
                            verified
                          </span>
                          <span>Included Capabilities</span>
                        </div>
                        <div className="services-tags-wrapper">
                          {service.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="services-tag-pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Front Actions - Without arrows */}
                    <div className="services-card-actions">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service.title);
                        }}
                        className="services-action-btn"
                      >
                        <span>Request Proposal</span>
                      </button>

                      <a
                        href="#calculator"
                        onClick={(e) => e.stopPropagation()}
                        className="services-action-link"
                      >
                        Scope Cost
                      </a>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="services-card-face services-card-back">
                    <div className="services-card-body">
                      {/* Top Bar on Back Face */}
                      <div className="services-back-header">
                        <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", minWidth: 0 }}>
                          <span className="material-symbols-outlined" style={{ fontSize: "19px", color: theme.color, flexShrink: 0 }}>
                            {service.icon}
                          </span>
                          <span
                            style={{
                              fontSize: "0.825rem",
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "0.03em",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis"
                            }}
                          >
                            {service.title}
                          </span>
                        </div>

                        <span
                          style={{
                            padding: "0.18rem 0.5rem",
                            borderRadius: "var(--radius-sm)",
                            backgroundColor: "#ffcc00",
                            border: "1.5px solid #1a1a1a",
                            boxShadow: "1.5px 1.5px 0px #1a1a1a",
                            color: "#1a1a1a",
                            fontSize: "0.775rem",
                            fontWeight: 800,
                            whiteSpace: "nowrap",
                            flexShrink: 0
                          }}
                        >
                          {service.pricing}
                        </span>
                      </div>

                      {/* Deliverables Checklist Title */}
                      <div
                        style={{
                          fontSize: "0.675rem",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          opacity: 0.7,
                          marginBottom: "0.45rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem"
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "14px", color: "#ffcc00" }}>
                          checklist
                        </span>
                        <span>Sprint Deliverables</span>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="services-deliverables-list">
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="services-deliverable-item">
                            <span
                              className="material-symbols-outlined"
                              style={{
                                fontSize: "14px",
                                color: "#ffcc00",
                                marginTop: "1px",
                                flexShrink: 0
                              }}
                            >
                              check_circle
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions on Back - Without arrows */}
                    <div className="services-card-actions">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service.title);
                        }}
                        className="services-action-btn"
                      >
                        <span>Request Proposal</span>
                      </button>

                      <a
                        href="#calculator"
                        onClick={(e) => e.stopPropagation()}
                        className="services-action-link"
                      >
                        Scope Cost
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .services-flip-card {
          perspective: 1200px;
          height: 420px;
          cursor: pointer;
        }

        .services-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          border-radius: var(--radius-lg);
        }

        .services-flip-card:hover .services-flip-card-inner,
        .services-flip-card.is-flipped .services-flip-card-inner {
          transform: rotateY(180deg);
        }

        .services-card-face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: var(--radius-lg);
          padding: 1.2rem 1.15rem 0.95rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          background-color: #ffffff;
          border: 2px solid #1a1a1a;
          box-shadow: 4px 4px 0px #1a1a1a;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          overflow: hidden;
        }

        .services-card-front {
          transform: rotateY(0deg) !important;
          z-index: 2;
        }

        .services-card-back {
          transform: rotateY(180deg) !important;
          z-index: 1;
        }

        .services-card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .services-back-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
          padding-bottom: 0.45rem;
          border-bottom: 1.5px solid #1a1a1a;
          flex-shrink: 0;
        }

        .services-deliverables-list {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .services-deliverable-item {
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
          font-size: 0.775rem;
          line-height: 1.38;
        }

        .services-tags-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .services-tag-pill {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 0.18rem 0.45rem;
          border-radius: var(--radius-sm);
          background-color: #f5f0e8;
          color: #1a1a1a;
          border: 1px solid #1a1a1a;
          white-space: nowrap;
        }

        .services-card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.65rem;
          border-top: 2px solid #1a1a1a;
          margin-top: auto;
          width: 100%;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .services-action-btn {
          background: none;
          border: none;
          color: inherit;
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          padding: 0;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .services-action-link {
          font-size: 0.74rem;
          font-weight: 700;
          color: inherit;
          opacity: 0.85;
          text-decoration: none;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          transition: opacity 0.2s ease;
        }

        .services-action-link:hover {
          opacity: 1;
        }

        .services-flip-card:hover .services-card-face,
        .services-flip-card.is-flipped .services-card-face {
          box-shadow: 6px 6px 0px #1a1a1a;
        }

        /* Dark Theme Support */
        [data-theme="dark"] .services-card-face {
          background-color: #181820 !important;
          border: 2px solid #2d2d3a !important;
          box-shadow: 4px 4px 0px #ffcc00 !important;
          color: #f5f0e8 !important;
        }

        [data-theme="dark"] .services-card-face p {
          color: #a1a1aa !important;
        }

        [data-theme="dark"] .services-back-header {
          border-bottom-color: #2d2d3a !important;
        }

        [data-theme="dark"] .services-card-actions {
          border-top-color: #2d2d3a !important;
        }

        [data-theme="dark"] .services-tag-pill {
          background-color: #22222e !important;
          color: #f5f0e8 !important;
          border: 1px solid #3b3b4f !important;
        }

        [data-theme="dark"] .services-flip-card:hover .services-card-face,
        [data-theme="dark"] .services-flip-card.is-flipped .services-card-face {
          border-color: #ffcc00 !important;
          box-shadow: 6px 6px 0px #ffcc00 !important;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }

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
