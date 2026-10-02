import React, { useState, useEffect } from "react";
import { SocialButtonsRow } from "./SocialIcons";

export default function Contact({ preselectedService, prefilledBrief, prefilledBudget }) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    budgetRange: "50k-150k",
    projectDetails: ""
  });
  const [customBudget, setCustomBudget] = useState("");

  const [selectedServices, setSelectedServices] = useState(["Web Development"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService && !selectedServices.includes(preselectedService)) {
      setSelectedServices((prev) => [...prev, preselectedService]);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (prefilledBrief) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: prev.projectDetails ? `${prev.projectDetails}\n\n${prefilledBrief}` : prefilledBrief
      }));
    }
  }, [prefilledBrief]);

  useEffect(() => {
    if (prefilledBudget) {
      const numeric = parseInt(prefilledBudget.replace(/[^0-9]/g, ""), 10);
      if (numeric <= 50000) {
        setFormData((prev) => ({ ...prev, budgetRange: "25k-50k" }));
      } else if (numeric <= 150000) {
        setFormData((prev) => ({ ...prev, budgetRange: "50k-150k" }));
      } else if (numeric <= 350000) {
        setFormData((prev) => ({ ...prev, budgetRange: "150k-350k" }));
      } else {
        setFormData((prev) => ({ ...prev, budgetRange: "custom" }));
        setCustomBudget(prefilledBudget.replace(/[^0-9,]/g, ""));
      }
    }
  }, [prefilledBudget]);

  const serviceOptions = [
    "Web Development",
    "Organic SEO",
    "Digital Marketing",
    "GBP Optimization",
    "UI/UX Architecture",
    "Cloud IT & Maintenance"
  ];

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedBudget =
      formData.budgetRange === "custom"
        ? (customBudget ? `Custom: ₹${customBudget.replace(/^₹\s*/, "")}` : "Custom Specified Budget")
        : (
          formData.budgetRange === "25k-50k"
            ? "₹25,000 – ₹50,000 (Sprint MVP)"
            : formData.budgetRange === "50k-150k"
            ? "₹50,000 – ₹1,50,000 (Comprehensive Build / Redesign)"
            : formData.budgetRange === "150k-350k"
            ? "₹1,50,000 – ₹3,50,000 (Enterprise Scaling & Full Funnel)"
            : formData.budgetRange
        );

    const payload = {
      _subject: `New Strategic Project Brief from ${formData.fullName}`,
      _template: "table",
      _captcha: "false",
      name: formData.fullName,
      email: formData.businessEmail,
      budget: formattedBudget,
      services: selectedServices.join(", "),
      brief: formData.projectDetails || "No additional notes provided"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/elaracode1@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }
    } catch (err) {
      console.warn("FormSubmit fetch fallback:", err);
      const mailtoSubject = encodeURIComponent(`Project Brief: ${formData.fullName}`);
      const mailtoBody = encodeURIComponent(
        `Full Name: ${formData.fullName}\nEmail: ${formData.businessEmail}\nBudget: ${formattedBudget}\nServices: ${selectedServices.join(", ")}\n\nProject Brief:\n${formData.projectDetails}`
      );
      window.location.href = `mailto:elaracode1@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundColor: "#f5f0e8",
        position: "relative",
        borderBottom: "2px solid #1a1a1a"
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "start"
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Channels */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
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
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>headset_mic</span>
                DIRECT DISCOVERY
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
                Let's Engineer Your Next Milestone.
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "#4a4a4a",
                  lineHeight: 1.6,
                  marginBottom: "2.5rem"
                }}
              >
                Have an upcoming product launch, redesign, or organic scaling goal? Speak directly with an Elaracode principal today.
              </p>

              {/* Contact Channels */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    backgroundColor: "#ffffff",
                    border: "2px solid #1a1a1a",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "2px 2px 0px #1a1a1a"
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "#ffcc00",
                      border: "2px solid #1a1a1a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1a1a1a"
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>mail</span>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#4a4a4a" }}>Direct Intake</div>
                    <a
                      href="mailto:elaracode1@gmail.com"
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        textDecoration: "none"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                    >
                      elaracode1@gmail.com
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    backgroundColor: "#ffffff",
                    border: "2px solid #1a1a1a",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "2px 2px 0px #1a1a1a"
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "#ffdad6",
                      border: "2px solid #1a1a1a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#e63b2e"
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>chat</span>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#4a4a4a" }}>Instant WhatsApp</div>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        textDecoration: "none"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                    >
                      +1 (415) 890-3240
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    backgroundColor: "#ffffff",
                    border: "2px solid #1a1a1a",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "2px 2px 0px #1a1a1a"
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "#d6e3ff",
                      border: "2px solid #1a1a1a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0055ff"
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>timer</span>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#4a4a4a" }}>Typical Response SLA</div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a" }}>
                      Under 2 hours during market hours
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div style={{ paddingTop: "0.5rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#1a1a1a", marginBottom: "0.6rem" }}>
                    Connect &amp; Message Directly
                  </div>
                  <SocialButtonsRow />
                </div>
              </div>
            </div>

            {/* Bottom Non-Disclosure Guarantee */}
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "1.5rem",
                borderTop: "2px solid #1a1a1a",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#4a4a4a",
                fontSize: "0.8125rem",
                fontWeight: 600
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "20px", color: "#e63b2e" }}>
                lock
              </span>
              <span>Non-Disclosure Guarantee: All project briefs covered under automated NDA.</span>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div>
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                backgroundColor: "#ffffff",
                border: "2px solid #1a1a1a",
                padding: "2.5rem",
                boxShadow: "6px 6px 0px #1a1a1a",
                position: "relative"
              }}
            >
              {isSubmitted ? (
                <div
                  style={{
                    padding: "2.5rem 1.5rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.25rem"
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "#ffcc00",
                      border: "2px solid #1a1a1a",
                      color: "#1a1a1a",
                      boxShadow: "2px 2px 0px #1a1a1a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "36px" }}>task_alt</span>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1a1a1a", fontFamily: "var(--font-display)" }}>
                    Strategic Brief Transmitted!
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "#4a4a4a", maxWidth: "440px", lineHeight: 1.6 }}>
                    Thank you, <strong style={{ color: "#1a1a1a" }}>{formData.fullName || "Partner"}</strong>. Your project details have been forwarded directly to <strong style={{ color: "#1a1a1a" }}>elaracode1@gmail.com</strong>. A Principal Architect will analyze your brief and respond within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: "", businessEmail: "", budgetRange: "50k-150k", projectDetails: "" });
                      setCustomBudget("");
                    }}
                    className="btn-secondary"
                    style={{ marginTop: "1rem" }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Name and Email */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Elena Rostova"
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: "#f5f0e8",
                          border: "1px solid #1a1a1a",
                          color: "#1a1a1a",
                          fontSize: "0.875rem",
                          outline: "none"
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#1a1a1a")}
                        onBlur={(e) => (e.target.style.borderColor = "#1a1a1a")}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        placeholder="elena@company.com"
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: "#f5f0e8",
                          border: "1px solid #1a1a1a",
                          color: "#1a1a1a",
                          fontSize: "0.875rem",
                          outline: "none"
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#1a1a1a")}
                        onBlur={(e) => (e.target.style.borderColor = "#1a1a1a")}
                      />
                    </div>
                  </div>

                  {/* Multi-Select Service Pills */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                      Services Needed (Select multiple)
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {serviceOptions.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`service-pill-btn ${isSelected ? "active" : ""}`}
                            style={{
                              padding: "0.45rem 0.85rem",
                              borderRadius: "var(--radius-sm)",
                              fontSize: "0.8125rem",
                              fontWeight: isSelected ? 800 : 600,
                              cursor: "pointer",
                              border: isSelected ? "2px solid #1a1a1a" : "1px solid #1a1a1a",
                              backgroundColor: isSelected ? "#ffcc00" : "#f5f0e8",
                              color: "#1a1a1a",
                              boxShadow: isSelected ? "2px 2px 0px #1a1a1a" : "none",
                              transform: isSelected ? "translate(-1px, -1px)" : "none",
                              transition: "all 0.15s ease"
                            }}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                      Estimated Investment Budget
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "#f5f0e8",
                        border: "1px solid #1a1a1a",
                        color: "#1a1a1a",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        outline: "none",
                        cursor: "pointer"
                      }}
                    >
                      <option value="25k-50k">₹25,000 – ₹50,000 (Sprint MVP)</option>
                      <option value="50k-150k">₹50,000 – ₹1,50,000 (Comprehensive Build / Redesign)</option>
                      <option value="150k-350k">₹1,50,000 – ₹3,50,000 (Enterprise Scaling &amp; Full Funnel)</option>
                      <option value="custom">Custom Budget (Specify Your Own Amount)</option>
                    </select>

                    {/* Customizable Amount Input */}
                    {formData.budgetRange === "custom" && (
                      <div style={{ marginTop: "0.75rem" }}>
                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                          Custom Budget Amount (INR) *
                        </label>
                        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                          <span
                            style={{
                              position: "absolute",
                              left: "1rem",
                              fontWeight: 800,
                              color: "#1a1a1a",
                              fontSize: "1.05rem",
                              pointerEvents: "none"
                            }}
                          >
                            ₹
                          </span>
                          <input
                            type="text"
                            required
                            value={customBudget}
                            onChange={(e) => setCustomBudget(e.target.value)}
                            placeholder="e.g. 75,000 or 5,00,000+"
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem 0.75rem 2.2rem",
                              borderRadius: "var(--radius-sm)",
                              backgroundColor: "#ffffff",
                              border: "2px solid #1a1a1a",
                              boxShadow: "2px 2px 0px #1a1a1a",
                              color: "#1a1a1a",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                              outline: "none"
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                      Project Brief &amp; Strategic Goals
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us about your target timeline, bottlenecks, current stack, or expected commercial outcomes..."
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "#f5f0e8",
                        border: "1px solid #1a1a1a",
                        color: "#1a1a1a",
                        fontSize: "0.875rem",
                        outline: "none",
                        resize: "vertical"
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      padding: "1rem",
                      fontSize: "0.9375rem"
                    }}
                  >
                    {isSubmitting ? (
                      <span>Transmitting Brief...</span>
                    ) : (
                      <>
                        <span>Submit Strategic Brief</span>
                        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
