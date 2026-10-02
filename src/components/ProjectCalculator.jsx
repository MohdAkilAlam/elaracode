import React, { useState } from "react";

export default function ProjectCalculator({ onApplyEstimate }) {
  const [projectType, setProjectType] = useState("web-app");
  const [scale, setScale] = useState("growth");
  const [speed, setSpeed] = useState("standard");
  const [addons, setAddons] = useState({
    seo: true,
    tracking: true,
    sla: false,
    designSystem: true
  });

  const baseRates = {
    "web-app": { base: 75000, timeWeeks: 5, roi: "3.5x" },
    "seo-campaign": { base: 35000, timeWeeks: 4, roi: "4.2x" },
    "ui-ux-design": { base: 40000, timeWeeks: 4, roi: "2.8x" },
    "full-suite": { base: 150000, timeWeeks: 8, roi: "5.4x" }
  };

  const scaleMultiplier = {
    mvp: 0.7,
    growth: 1.0,
    enterprise: 1.8
  };

  const speedMultiplier = {
    standard: 1.0,
    accelerated: 1.25
  };

  const addonPrices = {
    seo: 15000,
    tracking: 10000,
    sla: 12000,
    designSystem: 18000
  };

  const currentBase = baseRates[projectType];
  const calculatedBase = currentBase.base * scaleMultiplier[scale] * speedMultiplier[speed];
  const calculatedAddons = Object.keys(addons).reduce((acc, key) => {
    return acc + (addons[key] ? addonPrices[key] : 0);
  }, 0);

  const totalEstimate = Math.round((calculatedBase + calculatedAddons) / 1000) * 1000;
  const estimatedWeeks = speed === "accelerated"
    ? Math.max(3, Math.round(currentBase.timeWeeks * (scale === "mvp" ? 0.7 : scale === "enterprise" ? 1.5 : 1) * 0.75))
    : Math.round(currentBase.timeWeeks * (scale === "mvp" ? 0.7 : scale === "enterprise" ? 1.5 : 1));

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleApply = () => {
    const summary = `Selected ${projectType} (${scale} scale, ${speed} pace) with estimated budget ₹${totalEstimate.toLocaleString('en-IN')} across ${estimatedWeeks} weeks.`;
    if (onApplyEstimate) {
      onApplyEstimate(summary, `₹${totalEstimate.toLocaleString('en-IN')}`);
    }
  };

  return (
    <section
      id="calculator"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundColor: "#ffffff",
        position: "relative",
        borderBottom: "2px solid #1a1a1a"
      }}
    >
      <div className="container-custom">
        <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem" }}>
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
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>calculate</span>
            PROJECT ESTIMATOR &amp; ROI
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
            Instant Scope &amp; Investment Modeler
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#4a4a4a", lineHeight: 1.6 }}>
            Select your architectural parameters to calculate realistic delivery timelines, budget brackets, and projected commercial upside.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            backgroundColor: "#f5f0e8",
            borderRadius: "var(--radius-lg)",
            border: "2px solid #1a1a1a",
            padding: "2.5rem",
            boxShadow: "6px 6px 0px #1a1a1a"
          }}
          className="calculator-container"
        >
          {/* Controls Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {/* 1. Initiative Type */}
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: 800, color: "#1a1a1a", display: "block", marginBottom: "0.75rem", textTransform: "uppercase" }}>
                1. Select Core Initiative
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  { id: "web-app", label: "Web Platform / App" },
                  { id: "seo-campaign", label: "Organic SEO Engine" },
                  { id: "ui-ux-design", label: "UI/UX & Design System" },
                  { id: "full-suite", label: "Full Agency Squad" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProjectType(item.id)}
                    className={`calc-select-btn ${projectType === item.id ? "active" : ""}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale & Complexity */}
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: 800, color: "#1a1a1a", display: "block", marginBottom: "0.75rem", textTransform: "uppercase" }}>
                2. Project Scale &amp; Scope
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
                {[
                  { id: "mvp", label: "Sprint MVP" },
                  { id: "growth", label: "Growth Build" },
                  { id: "enterprise", label: "Enterprise Scale" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScale(item.id)}
                    className={`calc-select-btn ${scale === item.id ? "active" : ""}`}
                    style={{ textAlign: "center" }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Delivery Speed */}
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: 800, color: "#1a1a1a", display: "block", marginBottom: "0.75rem", textTransform: "uppercase" }}>
                3. Delivery Velocity
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  { id: "standard", label: "Standard Agile Cadence" },
                  { id: "accelerated", label: "Priority Rush (+25% Speed)" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSpeed(item.id)}
                    className={`calc-select-btn ${speed === item.id ? "active" : ""}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Strategic Add-ons */}
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: 800, color: "#1a1a1a", display: "block", marginBottom: "0.75rem", textTransform: "uppercase" }}>
                4. Select Strategic Capabilities
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  { id: "seo", label: "Semantic SEO & Schema", price: "+₹15,000" },
                  { id: "tracking", label: "GA4 / CAPI Telemetry", price: "+₹10,000" },
                  { id: "designSystem", label: "Figma Tokenized System", price: "+₹18,000" },
                  { id: "sla", label: "24/7 Dedicated SLA", price: "+₹12,000/mo" }
                ].map((addon) => (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`calc-addon-item ${addons[addon.id] ? "active" : ""}`}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span
                        className="material-symbols-outlined addon-check-icon"
                        style={{ fontSize: "18px" }}
                      >
                        {addons[addon.id] ? "check_box" : "check_box_outline_blank"}
                      </span>
                      <span style={{ fontSize: "0.8125rem", fontWeight: 700 }}>
                        {addon.label}
                      </span>
                    </div>
                    <span className="addon-price-tag" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Readout Column */}
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              backgroundColor: "#ffffff",
              border: "2px solid #1a1a1a",
              boxShadow: "6px 6px 0px #1a1a1a",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Estimated Investment
                </span>
                <span
                  style={{
                    padding: "0.25rem 0.65rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "#ffcc00",
                    border: "1px solid #1a1a1a",
                    color: "#1a1a1a",
                    fontSize: "0.75rem",
                    fontWeight: 700
                  }}
                >
                  Live Calculation
                </span>
              </div>

              {/* Price Readout */}
              <div
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  fontFamily: "var(--font-display)",
                  color: "#1a1a1a",
                  letterSpacing: "-0.03em",
                  lineHeight: 1
                }}
              >
                ₹{totalEstimate.toLocaleString('en-IN')}
                <span style={{ fontSize: "1rem", color: "#4a4a4a", fontWeight: 700, marginLeft: "0.5rem" }}>
                  INR
                </span>
              </div>

              <p style={{ fontSize: "0.875rem", color: "#4a4a4a", marginTop: "0.75rem", lineHeight: 1.5 }}>
                Estimated for a fixed-bid sprint deliverables package with full intellectual property ownership.
              </p>

              {/* Output Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1.75rem" }}>
                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "#f5f0e8",
                    border: "2px solid #1a1a1a",
                    boxShadow: "2px 2px 0px #1a1a1a"
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#4a4a4a" }}>Target Velocity</div>
                  <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginTop: "0.25rem" }}>
                    {estimatedWeeks} Weeks
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#4a4a4a", marginTop: "0.25rem" }}>
                    To Production Launch
                  </div>
                </div>

                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "#f5f0e8",
                    border: "2px solid #1a1a1a",
                    boxShadow: "2px 2px 0px #1a1a1a"
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#4a4a4a" }}>Historical Upside</div>
                  <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0055ff", marginTop: "0.25rem" }}>
                    {currentBase.roi} Lift
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#4a4a4a", marginTop: "0.25rem" }}>
                    12-Month Traffic/Rev
                  </div>
                </div>
              </div>

              {/* Included Checklist */}
              <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  "100% Strict TypeScript & WCAG AA Compliance",
                  "Direct Principal Architect Slack channel access",
                  "30-day post-launch hypercare & bug warranty"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "#1a1a1a" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "#1a1a1a" }}>check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transfer to Brief CTA */}
            <div style={{ marginTop: "2rem" }}>
              <a
                href="#contact"
                onClick={handleApply}
                className="btn-primary"
                style={{ width: "100%", padding: "1rem", fontSize: "0.9375rem" }}
              >
                <span>Transfer Estimate to Brief</span>
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
              </a>
              <div style={{ textAlign: "center", fontSize: "0.75rem", color: "#4a4a4a", marginTop: "0.75rem", fontWeight: 600 }}>
                🔒 Covered by mutual non-disclosure agreement.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .calculator-container {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
