import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Advantage from "./components/Advantage";
import Process from "./components/Process";
import ProjectCalculator from "./components/ProjectCalculator";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("elara-theme") || "light";
  });
  const [selectedService, setSelectedService] = useState("");
  const [prefilledBrief, setPrefilledBrief] = useState("");
  const [prefilledBudget, setPrefilledBudget] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("elara-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplyEstimate = (briefSummary, budgetStr) => {
    setPrefilledBrief(briefSummary);
    setPrefilledBudget(budgetStr);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenQuote = () => {
    const calcElem = document.getElementById("calculator");
    if (calcElem) {
      calcElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen app-shell">
      <Navbar theme={theme} onToggleTheme={toggleTheme} onOpenQuote={handleOpenQuote} />
      <main>
        <Hero />
        <Services onSelectService={handleSelectService} />
        <About />
        <CaseStudies onSelectService={handleSelectService} />
        <Advantage />
        <Process />
        <ProjectCalculator onApplyEstimate={handleApplyEstimate} />
        <Testimonials />
        <FAQ />
        <Contact
          preselectedService={selectedService}
          prefilledBrief={prefilledBrief}
          prefilledBudget={prefilledBudget}
        />
      </main>
      <Footer theme={theme} />
    </div>
  );
}
