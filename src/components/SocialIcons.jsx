import React from "react";
import { socialLinksData } from "../data/social";

export function SocialButtonsRow({ style, compact = false }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: compact ? "0.5rem" : "0.75rem", ...style }}>
      {socialLinksData.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: compact ? "0.4rem 0.75rem" : "0.55rem 1rem",
            borderRadius: "var(--radius-sm)",
            textDecoration: "none",
            fontSize: compact ? "0.75rem" : "0.8125rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            transition: "all 0.15s ease"
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            {item.svg}
          </span>
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
}
