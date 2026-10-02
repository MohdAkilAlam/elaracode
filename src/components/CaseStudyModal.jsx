import React, { useEffect } from "react";

export default function CaseStudyModal({ study, onClose, onSelectService }) {
  useEffect(() => {
    if (!study) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        backgroundColor: "rgba(26, 26, 26, 0.6)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem"
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          maxHeight: "90vh",
          overflowY: "auto",
          backgroundColor: "#ffffff",
          border: "3px solid #1a1a1a",
          borderRadius: "var(--radius-lg)",
          padding: "2rem",
          position: "relative",
          boxShadow: "8px 8px 0px #1a1a1a"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            border: "2px solid #1a1a1a",
            borderRadius: "var(--radius-sm)",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "2px 2px 0px #1a1a1a"
          }}
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>close</span>
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#e63b2e",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "monospace"
            }}
          >
            {study.industry} • {study.details.client}
          </span>
          <h3
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "#1a1a1a",
              fontFamily: "var(--font-display)",
              marginTop: "0.25rem"
            }}
          >
            {study.title}
          </h3>
        </div>

        {/* Media Preview */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
            aspectRatio: "16 / 9",
            backgroundColor: "#1a1a1a",
            border: "2px solid #1a1a1a",
            marginBottom: "1.75rem"
          }}
        >
          <img
            src={study.image}
            alt={study.imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Key Metrics Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem",
            padding: "1rem 1.25rem",
            borderRadius: "var(--radius-sm)",
            backgroundColor: "#f5f0e8",
            border: "2px solid #1a1a1a",
            boxShadow: "2px 2px 0px #1a1a1a",
            marginBottom: "1.75rem"
          }}
        >
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#4a4a4a", textTransform: "uppercase" }}>Primary Outcome</div>
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1a1a1a" }}>
              {study.metricValue} ({study.metricLabel})
            </div>
          </div>
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#4a4a4a", textTransform: "uppercase" }}>Sprint Timeline</div>
            <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#1a1a1a" }}>
              {study.details.timeline}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#4a4a4a", textTransform: "uppercase" }}>Category Focus</div>
            <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#e63b2e" }}>
              {study.categoryLabel}
            </div>
          </div>
        </div>

        {/* Technical Architecture Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.75rem" }}>
          <div>
            <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.4rem" }}>
              The Operational Challenge
            </h4>
            <p style={{ fontSize: "0.9375rem", color: "#4a4a4a", lineHeight: 1.6 }}>
              {study.details.challenge}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.4rem" }}>
              Our Architectural Solution
            </h4>
            <p style={{ fontSize: "0.9375rem", color: "#4a4a4a", lineHeight: 1.6 }}>
              {study.details.solution}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.4rem" }}>
              Verified Production Results
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {study.details.results.map((res, rIdx) => (
                <li key={rIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#1a1a1a" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px", color: "#1a1a1a" }}>
                    verified
                  </span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "0.4rem" }}>
              Engineering Stack Deployed
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {study.details.stack.map((item, sIdx) => (
                <span
                  key={sIdx}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "#f5f0e8",
                    border: "1px solid #1a1a1a",
                    color: "#1a1a1a"
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action CTA */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", paddingTop: "1rem", borderTop: "2px solid #1a1a1a" }}>
          <button onClick={onClose} className="btn-secondary" style={{ padding: "0.6rem 1.25rem" }}>
            Close
          </button>
          <a
            href="#contact"
            onClick={() => {
              onClose();
              if (onSelectService) onSelectService(study.title);
            }}
            className="btn-primary"
            style={{ padding: "0.6rem 1.25rem" }}
          >
            <span>Request Similar System</span>
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
}
