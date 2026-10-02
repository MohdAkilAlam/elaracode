export const portfolioItems = [
  {
    id: "aetheria-cloud",
    title: "Aetheria Asset Cloud",
    category: "web",
    categoryLabel: "Web & UI/UX",
    industry: "FINTECH ENTERPRISE",
    description: "Engineered an institutional-grade portfolio portal with real-time WebSockets and sub-50ms render latency.",
    metricValue: "0.38s",
    metricLabel: "Load Speed",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFSJ2eAimtEZJ06DlWkcNzeHsd8WVlVv-VY8uuQ3WjAYS44h42SVCBKhDO3zmSEZjnLnAcMKthNVvcjGRLTTiaAWYZCGTelhC3LvuzQyH0j23UIOhT9FrQwgxmf-3CWEgh0Q8BhnLVt8B7wdJSTvBSE6lRldfC5l4apxvZMQAfw7go_L9x4j-HrCxL020xOW6gbZb-z-cGO2JbD-2NW9PGmwWmQqgCsaF-y0Igb-FedCKhczWmITJE",
    imageAlt: "Modern dark-mode fintech interface mockup showing cryptocurrency asset distribution and charts",
    details: {
      client: "Quantix Global Financial",
      timeline: "8 Weeks Sprint",
      stack: ["React 19", "Next.js App Router", "Tailwind CSS", "Go WebSocket Microservices", "ClickHouse"],
      challenge: "Quantix needed to visualize over 120,000 real-time market ticks per second without triggering browser DOM recalculation bottlenecks.",
      solution: "Implemented WebGL canvas charting layers coupled with an optimized offscreen web worker buffer pipeline, delivering fluid 60fps renders.",
      results: [
        "99.998% telemetry uptime under peak transaction spikes",
        "0.38s global median initial load time",
        "Over ₹11,000 Cr+ in institutional transactions settled through the interface in Q1"
      ]
    }
  },
  {
    id: "omnihealth-portal",
    title: "OmniHealth Medical Systems",
    category: "seo",
    categoryLabel: "Organic SEO",
    industry: "HEALTHCARE SAAS",
    description: "Total architectural SEO overhaul, programmatic medical schema deployment, and authoritative content cluster scaling.",
    metricValue: "+312%",
    metricLabel: "Organic Inbound",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwifbrGssCCe9SbqymY62YfhxwjK3XMTckdZzcG2xcgmLHNhnyzFa_ukyOpFLI7QLmMrv1dvYfo4OFNu2w1U0KKR7UFnvlGJcbvPoKsoBA2n3_-Ytrz1fZDYyyMqmQZw5-qLn7-slM7X2M6AJNmX-C38XD3SsAs9PDWNTL3LKHtbkuzXH0lOHnvXcWCLStBcXTqmlBrm9mKrIQX3GeC1EEDiaqKYLrXfT6kw84CGQTnzNwYOdaiWX1",
    imageAlt: "Digital marketing analytics workstation showcasing multi-screen organic SEO search rankings",
    details: {
      client: "OmniHealth Network",
      timeline: "12 Weeks Sprint",
      stack: ["Next.js SSG", "Headless CMS", "Schema.org Automation", "Google BigQuery SEO Telemetry"],
      challenge: "High customer acquisition costs driven almost solely by Google Ads, with zero organic visibility across 8,000+ medical condition queries.",
      solution: "Engineered automated medical schema pipelines, established localized physician authority hubs, and refactored Core Web Vitals to 100/100.",
      results: [
        "+312% verified organic patient consultations in 6 months",
        "Captured #1 SERP ranking for 180+ competitive clinical terms",
        "₹3.5 Cr+ annualized reduction in paid search ad reliance"
      ]
    }
  },
  {
    id: "novus-dental",
    title: "Novus Dental Multi-Location",
    category: "local",
    categoryLabel: "GBP & Local SEO",
    industry: "HEALTHCARE PRACTICES",
    description: "Consolidated 14 regional locations into automated Google Business Profile engines, generating thousands of qualified local calls.",
    metricValue: "4.9★",
    metricLabel: "900+ Reviews",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0mlDqHOg6GGcOkXEJ9VULa_nMBP-pnlyjcgxZFsc-n8XWavnM8dKB110tSem3muAIyklQkdmkWuVlBve8A_Wz24pRH14G0mw-DNw-hqDHzKHOAPsoY3CoITd0IX5cAgwKuRUXp_Lcg5r1CHs2fqI1O-e8mXgsaFPrshWV_j8Kn5wCGRXD9er09xBpX8Mw5Oupwl4cOOw0K8lfXQDku6bXNW3x3eek7BZWm66ICxZ3AOEBvCSGxBjS",
    imageAlt: "Smartphone mockup showing Google Maps local business listing ranking #1",
    details: {
      client: "Novus Healthcare Group",
      timeline: "6 Weeks Sprint",
      stack: ["Google Maps API", "Twilio SMS Review Gateway", "GeoJSON Microdata", "Multi-Tenant Hub"],
      challenge: "14 dental clinics suffered inconsistent map placement, disjointed NAP citations, and fierce competition from legacy hospital networks.",
      solution: "Created an automated post-treatment SMS review acquisition engine, synced unified location schemas, and targeted neighborhood geo-clusters.",
      results: [
        "All 14 clinics reached Google 3-Pack within 90 days",
        "+185% increase in direct click-to-call phone inquiries",
        "Average clinic review score rose to 4.9 stars across 900+ verified ratings"
      ]
    }
  },
  {
    id: "synthex-telemetry",
    title: "Synthex AI Cloud Telemetry",
    category: "ux",
    categoryLabel: "UI/UX & Platform",
    industry: "DEVTOOLS & AI",
    description: "Designed a multi-cluster GPU observability suite with high-density timeline graphs and instant incident diagnostics.",
    metricValue: "99.8%",
    metricLabel: "Diagnostic Accuracy",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1X3rJ9xyEzr4ktb6__60gEWbDiWjFQtkBYN_s8kILbkhCbZkq2AySQrb7jUOh3XvoZQ4tFAAVN0vZGVVpGu4-epl3nFNMXc2Trt7YCU907F_WxiJWCV86ioUM4sGeAhWpPJ7VsrwtOyX9Nb1QTTSOftFH-bJ7BPUS7acJqcPz20a2_VT90aQbWkBJlWjtzXlKmc6hc1F4RBw5RblgNp3E-FLJx1-fYEci_Wv7uJZcoyj6X7Iqo2kaoyyGU",
    imageAlt: "Modern cloud infrastructure and AI analytics web application dashboard",
    details: {
      client: "Synthex Autonomous Systems",
      timeline: "10 Weeks Sprint",
      stack: ["React 19", "TypeScript", "D3.js Charts", "WebAssembly Parsers", "Tailwind CSS"],
      challenge: "Engineering teams were blinded by fragmented logging consoles, losing critical hours isolating silent model drift and cluster bottlenecks.",
      solution: "Synthesized 12 telemetry streams into an ergonomic single-pane-of-glass workspace with keyboard-first shortcuts and neural anomaly markers.",
      results: [
        "74% reduction in mean time to resolution (MTTR)",
        "Adopted by 4,200+ enterprise AI engineers globally",
        "Selected as DevTool of the Year finalist"
      ]
    }
  },
  {
    id: "travertine-luxury",
    title: "Travertine Architectural E-Commerce",
    category: "web",
    categoryLabel: "High-End E-Commerce",
    industry: "LUXURY ARCHITECTURE",
    description: "Editorial minimalist digital commerce experience with fluid physics-based transitions and 3D material previews.",
    metricValue: "+148%",
    metricLabel: "Checkout Velocity",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1W6-1_D8vMzgK0eXBzI7lqIwGVkTo_6NEM0aP_Zn2Ju92mU0kcEiPySml9gSAijLhB3HMaJVg-fQ0_7Oif4ML0sMX7r-ne91YnWaZmsqyMggQocivFo6MpRGSfudq8nIKCQXLrWpsUB-EsbnxQzxI5yuVCBAIPD0rbGqxhpNd5qoCRNxRmoi8bx3HX_1tJRTDrH52G4fk5uTymHGuld-DZ1y7Uf0NlOF7wVP4Dp4AiUTJaXJ91dFcn5jnI",
    imageAlt: "High-end architectural e-commerce platform on an ultra-thin laptop mockup",
    details: {
      client: "Studio Travertine Milan",
      timeline: "7 Weeks Sprint",
      stack: ["Next.js 14", "Shopify Storefront GraphQL", "Three.js / WebGL", "Stripe Custom Elements"],
      challenge: "Bespoke stone and furniture brand needed digital storytelling that matched the sensory luxury of their physical Milan showroom.",
      solution: "Engineered ultra-smooth editorial navigation, high-fidelity tactile material lighting, and instant one-click private consultation checkout.",
      results: [
        "Average order value jumped by 54%",
        "Mobile conversion rate increased from 1.1% to 3.8%",
        "Featured in Architectural Digest Digital Craft roundup"
      ]
    }
  },
  {
    id: "apex-telemedicine",
    title: "Apex Telehealth Consultation Suite",
    category: "ux",
    categoryLabel: "Telehealth Application",
    industry: "HEALTHCARE TECH",
    description: "End-to-end HIPAA compliant patient onboarding, video consultation rooms, and automated electronic health record sync.",
    metricValue: "4.95★",
    metricLabel: "Patient Experience",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1XRVyqkE8A9-f3eaXSzznYO3N53jCPZse2et73FHKEEbb-joRtfQMFMES9u7aEZm579FRlQ3c3-pHHgbSBYXSNheZ2itbnsU8U3aGhb3zfYaFUbsoszGHkk4MUv9qu1h4wTCKi6TxU3gzfgw89iO3YhQSuzl6iFG_oWuSz32WVGOEfa5P1_IFHALe8m_89dh870lMP2sIqTW35-YWHz1tVq-gIiwEv9nB7gcmA6cesd44Pyhb13EloatSQ",
    imageAlt: "Modern healthcare telemedicine and patient management web application interface",
    details: {
      client: "Apex Health Partners",
      timeline: "9 Weeks Sprint",
      stack: ["React", "WebRTC Video Engine", "HIPAA Compliant Node.js Microservices", "PostgreSQL"],
      challenge: "Patients over 60 struggled with complicated telemedicine logins and dropped video connections during appointments.",
      solution: "Created zero-install browser video links with biometric phone sign-in, adaptive network bitrate throttling, and single-click prescriptions.",
      results: [
        "Zero dropped consultation calls over 60,000 appointments",
        "Sub-15 second average patient join time",
        "100% HIPAA and SOC2 compliance accreditation"
      ]
    }
  }
];
