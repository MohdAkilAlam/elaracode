import React, { useState, useEffect } from "react";
import { SocialButtonsRow } from "./SocialIcons";

export default function Navbar({ theme, onToggleTheme, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Calculator", href: "#calculator" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.2s ease",
        backgroundColor: "rgba(245, 240, 232, 0.96)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "2px solid #1a1a1a",
        boxShadow: isScrolled ? "0 4px 12px rgba(26, 26, 26, 0.08)" : "none"
      }}
    >
      <div
        className="container-custom"
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            color: "#1a1a1a"
          }}
        >
          <img
            src={theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
            alt="Elaracode Logo"
            className="brand-logo-img"
            style={{
              height: "38px",
              width: "auto",
              display: "block"
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "2rem"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#4a4a4a",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                transition: "all 0.15s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#1a1a1a";
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#4a4a4a";
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Action Cluster */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Dark Mode"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "var(--radius-md)",
              backgroundColor: theme === "dark" ? "#ffcc00" : "#ffffff",
              color: "#1a1a1a",
              border: "2px solid #1a1a1a",
              boxShadow: theme === "dark" ? "2px 2px 0px #ffffff" : "2px 2px 0px #1a1a1a",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "transform 0.15s ease, background-color 0.2s ease, box-shadow 0.15s ease"
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "20px",
                fontVariationSettings: "'FILL' 1",
                color: "#1a1a1a"
              }}
            >
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <button
            onClick={onOpenQuote}
            className="btn-secondary"
            style={{
              padding: "0.6rem 1.1rem",
              fontSize: "0.8125rem",
              display: "none"
            }}
            id="quoteNavBtn"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>calculate</span>
            <span>Estimate ROI</span>
          </button>

          <a
            href="#contact"
            className="btn-primary"
            style={{
              padding: "0.65rem 1.3rem",
              fontSize: "0.8125rem"
            }}
          >
            <span>Start Project</span>
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "#ffffff",
              border: "2px solid #1a1a1a",
              color: "#1a1a1a",
              borderRadius: "var(--radius-md)",
              padding: "0.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "2px 2px 0px #1a1a1a"
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#faf7f2",
            borderBottom: "2px solid #1a1a1a",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "#1a1a1a",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "0.4rem 0",
                borderBottom: "1px solid #d0cbc3"
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ paddingTop: "1rem", borderTop: "2px solid #1a1a1a", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <button
              onClick={() => {
                onToggleTheme();
              }}
              className="btn-secondary"
              style={{ width: "100%", justifyContent: "center", gap: "0.5rem" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
              <span>{theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>calculate</span>
              <span>Estimate Project &amp; ROI</span>
            </button>
            <div style={{ paddingTop: "0.5rem" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#4a4a4a", marginBottom: "0.5rem" }}>
                Connect With Us
              </div>
              <SocialButtonsRow compact={true} />
              <a
                href="mailto:elaracode1@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#1a1a1a",
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  marginTop: "0.5rem"
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>mail</span>
                elaracode1@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          #quoteNavBtn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
