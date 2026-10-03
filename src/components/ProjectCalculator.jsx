import React, { useState } from "react";

export default function ProjectCalculator({ onApplyEstimate }) {
  const [projectType, setProjectType] = useState("gmb");
  const [tier, setTier] = useState("standard");
  const [speed, setSpeed] = useState("standard");
  const [addons, setAddons] = useState({
    whatsapp: false,
    seo: false,
    domainHosting: false,
    amc: false
  });

  const baseRates = {
    "gmb": {
      title: "GMB Optimization",
      base: 14999,
      timeWeeks: 1,
      roi: "4.5x",
      tagline: "Google Business Profile & 3-Pack Maps Domination"
    },
    "static-website": {
      title: "Static Website",
      base: 14999,
      timeWeeks: 1,
      roi: "3.2x",
      tagline: "Ultra-Fast Modern Business Website & Landing Page"
    },
    "dynamic-website": {
      title: "Dynamic Website",
      base: 34999,
      timeWeeks: 3,
      roi: "3.8x",
      tagline: "Full-Featured Web Platform with CMS & Database"
    },
    "ecommerce": {
      title: "E-Commerce",
      base: 79999,
      timeWeeks: 4,
      roi: "5.2x",
      tagline: "High-Converting Online Store & Payment Gateway"
    }
  };

  const tierMultiplier = {
    standard: 1.0,
    growth: 1.2,
    enterprise: 1.4
  };

  const speedMultiplier = {
    standard: 1.0,
    express: 1.15
  };

  const addonPrices = {
    whatsapp: { label: "WhatsApp Chat & Auto-Alerts", price: 2999, priceDisplay: "+₹2,999" },
    seo: { label: "Advanced Local Schema & Citations", price: 3999, priceDisplay: "+₹3,999" },
    domainHosting: { label: "High-Speed Hosting & Domain (1 Yr)", price: 3499, priceDisplay: "+₹3,499" },
    amc: { label: "1-Year Priority Maintenance SLA", price: 4999, priceDisplay: "+₹4,999" }
  };

  const currentBase = baseRates[projectType] || baseRates["gmb"];
  const calculatedBase = currentBase.base * tierMultiplier[tier] * speedMultiplier[speed];
  const calculatedAddons = Object.keys(addons).reduce((acc, key) => {
    return acc + (addons[key] ? addonPrices[key].price : 0);
  }, 0);

  const totalEstimate = Math.round(calculatedBase + calculatedAddons);
  const estimatedWeeks = speed === "express"
    ? Math.max(1, Math.round(currentBase.timeWeeks * (tier === "standard" ? 0.75 : tier === "enterprise" ? 1.25 : 1) * 0.75))
    : Math.max(1, Math.round(currentBase.timeWeeks * (tier === "standard" ? 1 : tier === "enterprise" ? 1.35 : 1.15)));

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleApply = () => {
    const summary = `Selected ${currentBase.title} (${tier} tier, ${speed} pace) with estimated investment ₹${totalEstimate.toLocaleString('en-IN')} across ${estimatedWeeks} week${estimatedWeeks > 1 ? 's' : ''}.`;
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
            Instant Scope &amp; Pricing Modeler
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#4a4a4a", lineHeight: 1.6 }}>
            Select your preferred service to instantly calculate exact delivery timelines, transparent pricing, and projected commercial return.
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
                1. Select Core Service
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  { id: "gmb", label: "GMB Optimization", price: "₹14,999" },
                  { id: "static-website", label: "Static Website", price: "₹14,999" },
                  { id: "dynamic-website", label: "Dynamic Website", price: "₹34,999" },
                  { id: "ecommerce", label: "E-Commerce", price: "₹79,999" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProjectType(item.id)}
                    className={`calc-select-btn ${projectType === item.id ? "active" : ""}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "0.25rem",
                      padding: "0.85rem 1rem",
                      textAlign: "left"
                    }}
                  >
                    <span style={{ fontWeight: 800, fontSize: "0.875rem" }}>{item.label}</span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: projectType === item.id ? "#1a1a1a" : "#0055ff" }}>
                      {item.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale & Complexity */}
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: 800, color: "#1a1a1a", display: "block", marginBottom: "0.75rem", textTransform: "uppercase" }}>
                2. Package Scope &amp; Tier
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
                {[
                  { id: "standard", label: "Standard", sub: "Exact Base" },
                  { id: "growth", label: "Growth", sub: "+20% Scope" },
                  { id: "enterprise", label: "Enterprise", sub: "+40% Scope" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTier(item.id)}
                    className={`calc-select-btn ${tier === item.id ? "active" : ""}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.2rem",
                      padding: "0.75rem 0.5rem",
                      textAlign: "center"
                    }}
                  >
                    <span style={{ fontWeight: 800, fontSize: "0.8125rem" }}>{item.label}</span>
                    <span style={{ fontSize: "0.7rem", opacity: 0.8, fontWeight: 600 }}>{item.sub}</span>
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
                  { id: "standard", label: "Standard Agile Cadence", sub: "Standard Time" },
                  { id: "express", label: "Priority Rush (+15%)", sub: "Fast-Track Sprints" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSpeed(item.id)}
                    className={`calc-select-btn ${speed === item.id ? "active" : ""}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "0.2rem",
                      padding: "0.75rem 1rem",
                      textAlign: "left"
                    }}
                  >
                    <span style={{ fontWeight: 800, fontSize: "0.8125rem" }}>{item.label}</span>
                    <span style={{ fontSize: "0.7rem", opacity: 0.8, fontWeight: 600 }}>{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Strategic Add-ons */}
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: 800, color: "#1a1a1a", display: "block", marginBottom: "0.75rem", textTransform: "uppercase" }}>
                4. Optional Add-ons
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {Object.keys(addonPrices).map((key) => {
                  const addon = addonPrices[key];
                  return (
                    <div
                      key={key}
                      onClick={() => toggleAddon(key)}
                      className={`calc-addon-item ${addons[key] ? "active" : ""}`}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span
                          className="material-symbols-outlined addon-check-icon"
                          style={{ fontSize: "18px" }}
                        >
                          {addons[key] ? "check_box" : "check_box_outline_blank"}
                        </span>
                        <span style={{ fontSize: "0.8125rem", fontWeight: 700 }}>
                          {addon.label}
                        </span>
                      </div>
                      <span className="addon-price-tag" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                        {addon.priceDisplay}
                      </span>
                    </div>
                  );
                })}
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
                {currentBase.tagline} with full code and intellectual property ownership.
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
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#4a4a4a" }}>Estimated Velocity</div>
                  <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1a1a1a", marginTop: "0.25rem" }}>
                    {estimatedWeeks} {estimatedWeeks === 1 ? "Week" : "Weeks"}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#4a4a4a", marginTop: "0.25rem" }}>
                    To Live Deployment
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
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#4a4a4a" }}>Projected Upside</div>
                  <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0055ff", marginTop: "0.25rem" }}>
                    {currentBase.roi} Lift
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#4a4a4a", marginTop: "0.25rem" }}>
                    Inbound Traffic / ROI
                  </div>
                </div>
              </div>

              {/* Included Checklist */}
              <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  "100% Upfront transparent pricing with zero hidden fees",
                  "Direct Principal Engineer access via WhatsApp & Slack",
                  "30-day post-launch warranty & complimentary support"
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
