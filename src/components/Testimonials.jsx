import React from "react";
import { testimonialsData } from "../data/process";

export default function Testimonials() {
  const avatarThemes = [
    { bg: "#ffcc00", color: "#1a1a1a" },
    { bg: "#ffdad6", color: "#e63b2e" },
    { bg: "#d6e3ff", color: "#0055ff" }
  ];

  const renderCard = (t, idx, keyPrefix) => {
    const av = avatarThemes[idx % avatarThemes.length];
    return (
      <div
        key={`${keyPrefix}-${t.id}`}
        className="review-card"
        style={{
          width: "380px",
          minWidth: "280px",
          maxWidth: "420px",
          flexShrink: 0,
          borderRadius: "var(--radius-lg)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          border: "2px solid #1a1a1a",
          boxShadow: "4px 4px 0px #1a1a1a",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          userSelect: "none"
        }}
      >
        <div>
          {/* Header row: 5 Stars + Verified Badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "2px", color: "#1a1a1a" }}>
              {[...Array(t.rating)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "20px",
                    fontVariationSettings: "'FILL' 1",
                    color: "#ffcc00"
                  }}
                >
                  star
                </span>
              ))}
            </div>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "0.2rem 0.55rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "#f5f0e8",
                border: "1px solid #1a1a1a",
                color: "#1a1a1a"
              }}
            >
              Verified Partner
            </span>
          </div>

          {/* Quote */}
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#1a1a1a",
              lineHeight: 1.65,
              marginBottom: "1.75rem",
              fontStyle: "normal"
            }}
          >
            "{t.quote}"
          </p>
        </div>

        {/* Author Info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            paddingTop: "1.25rem",
            borderTop: "2px solid #1a1a1a"
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "var(--radius-sm)",
              backgroundColor: av.bg,
              color: av.color,
              border: "2px solid #1a1a1a",
              boxShadow: "2px 2px 0px #1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "0.9rem"
            }}
          >
            {t.initials}
          </div>
          <div>
            <div style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#1a1a1a", fontFamily: "var(--font-display)" }}>
              {t.name}
            </div>
            <div style={{ fontSize: "0.8125rem", color: "#4a4a4a", fontWeight: 600 }}>
              {t.role}, <span style={{ color: "#1a1a1a" }}>{t.company}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="reviews"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundColor: "#f5f0e8",
        borderBottom: "2px solid #1a1a1a",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container-custom" style={{ marginBottom: "3rem" }}>
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
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
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>star</span>
            VERIFIED CLIENT REVIEWS
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
            What Leaders Say About Elaracode
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#4a4a4a", lineHeight: 1.6 }}>
            Independent feedback from executives, CTOs, and founders across demanding commercial verticals.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Endless Marquee */}
      <div
        className="reviews-marquee-wrapper"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          padding: "1rem 0"
        }}
      >
        {/* Left Fade Gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "120px",
            zIndex: 3,
            background: "linear-gradient(to right, #f5f0e8 15%, rgba(245, 240, 232, 0) 100%)",
            pointerEvents: "none"
          }}
        />

        {/* Right Fade Gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "120px",
            zIndex: 3,
            background: "linear-gradient(to left, #f5f0e8 15%, rgba(245, 240, 232, 0) 100%)",
            pointerEvents: "none"
          }}
        />

        {/* Double-buffered Scrolling Track */}
        <div className="reviews-marquee-track">
          {/* First Group */}
          <div className="reviews-marquee-group">
            {testimonialsData.map((t, idx) => renderCard(t, idx, "group1"))}
          </div>

          {/* Second Duplicate Group for Gapless Infinite Loop */}
          <div className="reviews-marquee-group" aria-hidden="true">
            {testimonialsData.map((t, idx) => renderCard(t, idx, "group2"))}
          </div>
        </div>
      </div>


      <style>{`
        .reviews-marquee-track {
          display: flex;
          width: max-content;
          animation: infiniteScrollReviews 40s linear infinite;
          will-change: transform;
        }

        .reviews-marquee-track:hover {
          animation-play-state: paused;
        }

        .reviews-marquee-group {
          display: flex;
          gap: 1.75rem;
          padding-right: 1.75rem;
          flex-shrink: 0;
        }

        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 6px 6px 0px #1a1a1a !important;
        }

        @keyframes infiniteScrollReviews {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .reviews-marquee-track {
            animation-duration: 28s;
          }
          .review-card {
            width: 290px !important;
            min-width: 0 !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
