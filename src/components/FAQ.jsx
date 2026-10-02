import React, { useState } from "react";
import { faqData } from "../data/process";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundColor: "#f5f0e8",
        position: "relative",
        borderBottom: "2px solid #1a1a1a"
      }}
    >
      <div className="container-custom" style={{ maxWidth: "860px" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>help</span>
            CLEAR CLARITY
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
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#4a4a4a", lineHeight: 1.6 }}>
            Everything you need to know about our engineering methodology, sprint agreements, and SLAs.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? "open" : ""}`}
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  transition: "all 0.15s ease"
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="faq-question-btn"
                  style={{
                    width: "100%",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)"
                  }}
                >
                  <span>{item.q}</span>
                  <span
                    className="faq-arrow-icon material-symbols-outlined"
                    style={{
                      fontSize: "24px",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease"
                    }}
                  >
                    keyboard_arrow_down
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="faq-answer"
                    style={{
                      padding: "0 1.5rem 1.5rem",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      paddingTop: "1rem"
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
