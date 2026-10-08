import { useState } from "react";
import { SocialButtonsRow } from "./SocialIcons";

const serviceOptions = [
  "GMB Optimization",
  "Static Website",
  "Dynamic Website",
  "E-Commerce"
];

export default function Contact({ preselectedService, prefilledBrief, prefilledBudget }) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    budgetRange: "14999",
    projectDetails: ""
  });
  const [customBudget, setCustomBudget] = useState("");

  const [selectedServices, setSelectedServices] = useState(["Static Website"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Synchronize state with props during render without synchronous setState in useEffect
  const [prevService, setPrevService] = useState(preselectedService);
  if (preselectedService && preselectedService !== prevService) {
    setPrevService(preselectedService);
    const matched = serviceOptions.find((opt) =>
      opt.toLowerCase().includes(preselectedService.toLowerCase())
    ) || preselectedService;

    if (!selectedServices.includes(matched)) {
      setSelectedServices((prev) => [...prev, matched]);
    }
  }

  const [prevBrief, setPrevBrief] = useState(prefilledBrief);
  if (prefilledBrief && prefilledBrief !== prevBrief) {
    setPrevBrief(prefilledBrief);
    setFormData((prev) => ({
      ...prev,
      projectDetails: prev.projectDetails ? `${prev.projectDetails}\n\n${prefilledBrief}` : prefilledBrief
    }));
  }

  const [prevBudget, setPrevBudget] = useState(prefilledBudget);
  if (prefilledBudget && prefilledBudget !== prevBudget) {
    setPrevBudget(prefilledBudget);
    const numeric = parseInt(prefilledBudget.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(numeric)) {
      if (numeric <= 14999) {
        setFormData((prev) => ({ ...prev, budgetRange: "14999" }));
      } else if (numeric <= 34999) {
        setFormData((prev) => ({ ...prev, budgetRange: "34999" }));
      } else if (numeric <= 79999) {
        setFormData((prev) => ({ ...prev, budgetRange: "79999" }));
      } else {
        setFormData((prev) => ({ ...prev, budgetRange: "custom" }));
        setCustomBudget(prefilledBudget.replace(/[^0-9,]/g, ""));
      }
    }
  }

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
          formData.budgetRange === "14999"
            ? "₹14,999 (GMB / Static Website)"
            : formData.budgetRange === "34999"
              ? "₹34,999 (Dynamic Website)"
              : formData.budgetRange === "79999"
                ? "₹79,999 (E-Commerce Store)"
                : formData.budgetRange === "multi"
                  ? "₹1,00,000+ (Multi-Service Package)"
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
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
                      info@elaracode.com
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
                      backgroundColor: "#25D366",
                      border: "2px solid #1a1a1a",
                      boxShadow: "2px 2px 0px #1a1a1a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff"
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#4a4a4a" }}>Instant WhatsApp</div>
                    <a
                      href="https://wa.me/919990648033?text=Hi%20Elaracode,%20I'd%20like%20to%20discuss%20a%20project"
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
                      +91-9990648033
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
                      Instant via WhatsApp (&lt; 15 mins)
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
              className="contact-form-card"
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
                      <option value="14999">₹14,999 (GMB / Static Website)</option>
                      <option value="34999">₹34,999 (Dynamic Website)</option>
                      <option value="79999">₹79,999 (E-Commerce Store)</option>
                      <option value="multi">₹1,00,000+ (Multi-Service / Custom Package)</option>
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
        @media (max-width: 768px) {
          .contact-grid {
            gap: 2.25rem !important;
          }
          .contact-form-card {
            padding: 1.25rem !important;
            box-shadow: 4px 4px 0px #1a1a1a !important;
          }
        }
        @media (max-width: 480px) {
          .contact-form-card {
            padding: 1rem !important;
          }
        }
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
