import React, { useState } from "react";
import { portfolioItems } from "../data/portfolio";
import CaseStudyModal from "./CaseStudyModal";

export default function CaseStudies({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedStudy, setSelectedStudy] = useState(null);

  const filters = [
    { key: "all", label: "All" },
    { key: "web", label: "Web Development" },
    { key: "seo", label: "SEO & Growth" },
    { key: "ux", label: "UI/UX Architecture" },
    { key: "local", label: "Local SEO" }
  ];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section
      id="work"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundColor: "#ffffff",
        borderBottom: "2px solid #1a1a1a",
        position: "relative"
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
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
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>workspace_premium</span>
            CASE STUDIES
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              marginBottom: "1rem"
            }}
          >
            Proven Results Across High-Stakes Industries
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#4a4a4a", lineHeight: 1.6 }}>
            Take a look under the hood of recent systems we designed, engineered, and scaled for enterprise and fast-moving tech clients.
          </p>

          {/* Filter Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "2rem"
            }}
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`case-filter-btn ${isActive ? "active" : ""}`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem"
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="luminous-border"
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                backgroundColor: "#ffffff"
              }}
              onClick={() => setSelectedStudy(item)}
            >
              {/* Image Preview Container */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                  backgroundColor: "#1a1a1a",
                  borderBottom: "2px solid #1a1a1a"
                }}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "4px",
                    backgroundColor: "#ffcc00",
                    color: "#1a1a1a",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    border: "2px solid #1a1a1a",
                    boxShadow: "2px 2px 0px #1a1a1a"
                  }}
                >
                  {item.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "1.75rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#e63b2e",
                      fontFamily: "monospace",
                      letterSpacing: "0.05em",
                      marginBottom: "0.35rem"
                    }}
                  >
                    {item.industry}
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
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#4a4a4a",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem"
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Footer Metric and Action */}
                <div
                  style={{
                    paddingTop: "1rem",
                    borderTop: "2px solid #1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 800,
                        color: "#1a1a1a",
                        fontFamily: "var(--font-display)",
                        display: "block"
                      }}
                    >
                      {item.metricValue}
                    </span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#4a4a4a" }}>
                      {item.metricLabel}
                    </span>
                  </div>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      color: "#1a1a1a",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}
                  >
                    <span>View Specs</span>
                    <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "#1a1a1a" }}>
                      arrow_outward
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onSelectService={onSelectService}
      />
    </section>
  );
}
