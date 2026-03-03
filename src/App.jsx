import React, { useState, useEffect } from "react";
import "./index.css";

// --- Theme Toggle Hook ---
const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
};

// --- Shared Components ---
const Button = ({ children, variant = "primary", onClick, ...props }) => {
  const baseStyle = {
    padding: "16px 36px",
    borderRadius: 8,
    fontFamily: "var(--font-sans)",
    fontSize: 16,
    fontWeight: 500,
    textDecoration: "none",
    transition: "all 0.2s ease",
  };

  const styles = {
    primary: {
      ...baseStyle,
      background: "linear-gradient(90deg, var(--btn-primary-start) 0%, var(--btn-primary-end) 100%)",
      color: "#FFF",
    },
    secondary: {
      ...baseStyle,
      background: "var(--btn-secondary-bg)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-light)",
    }
  };

  return (
    <button style={{ ...styles[variant] }} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, bgCenter, bgOuter, background, padding = "100px 120px", type = "radial", ...props }) => {
  let bgStyle = background;
  if (!bgStyle) {
    if (type === "radial") {
      bgStyle = `radial-gradient(circle at center, var(${bgCenter}) 0%, var(${bgOuter}) 80%)`;
    } else if (type === "linear") {
      bgStyle = `linear-gradient(180deg, var(${bgCenter}) 0%, var(${bgOuter}) 100%)`;
    } else {
      bgStyle = `var(${bgCenter})`;
    }
  }

  return (
    <section style={{
      background: bgStyle,
      padding: padding,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      ...props
    }}>
      {children}
    </section>
  );
};

// --- Page Sections ---

const Nav = ({ theme, toggleTheme }) => (
  <nav style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 60px",
    height: 72,
    background: "var(--bg-nav)",
    borderBottom: "1px solid var(--border-subtle)",
    position: "sticky",
    top: 0,
    zIndex: 100
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: 28, height: 28, borderRadius: 6,
        background: "linear-gradient(180deg, var(--btn-primary-start) 0%, var(--btn-primary-end) 100%)"
      }} />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 600, letterSpacing: 4, color: "var(--text-primary)" }}>
        svrn_alpha
      </span>
    </div>

    <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
      {["The Three Pillars", "Solutions", "Research"].map(link => (
        <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)" }}>
          {link}
        </a>
      ))}
      <a href="#contact" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)" }}>Contact</a>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <button
        onClick={toggleTheme}
        style={{ background: "transparent", color: "var(--text-primary)", fontSize: 20, cursor: "pointer", border: "1px solid var(--border-subtle)", padding: "4px 8px", borderRadius: 4 }}
        title="Toggle Theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <a href="#login" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)" }}>Login</a>
      <div style={{
        padding: "10px 24px", borderRadius: 6, cursor: "pointer",
        background: "linear-gradient(90deg, var(--btn-primary-start) 0%, var(--btn-primary-end) 100%)",
        color: "#FFF", fontFamily: "var(--font-sans)", fontSize: 14
      }}>
        Get Started
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <Section bgCenter="--bg-hero-center" bgOuter="--bg-hero-outer" type="radial" padding="100px 120px 80px">
    <div style={{ maxWidth: 1080, display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>

      <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(16, 58, 90, 0.25)", padding: "6px 14px", borderRadius: 100, border: "1px solid var(--border-subtle)" }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-accent)" }} />
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: 2, color: "var(--text-accent)" }}>
          Academic Rigour. Institutional Impact.
        </span>
      </div>

      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 64, fontWeight: "normal", letterSpacing: -2, color: "var(--text-primary)", textAlign: "center", lineHeight: 1.1, margin: 0 }}>
        Sovereign AI Enablement<br />for Investment Banking and the Financial Industry
      </h1>

      <p style={{ fontFamily: "var(--font-sans)", fontSize: 19, color: "var(--text-secondary)", textAlign: "center", maxWidth: 720, lineHeight: 1.6, margin: 0 }}>
        Transforming capital markets through our proprietary Three-Pillar Model. Reclaim your institutional alpha with our SaaS Investor Relations Dashboard and Dispute Resolution tools, built on sovereign, model-agnostic infrastructure.
      </p>

      <div style={{ display: "flex", gap: 16 }}>
        <Button variant="primary">Start Transformation</Button>
        <Button variant="secondary">Read Approach</Button>
      </div>

      <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", textAlign: "center", letterSpacing: 0.5 }}>
        Founded by Prof. Dr. Tobias Blask — bringing academic depth and financial expertise to every engagement
      </p>

      {/* Hero Visualization - The Three Pillars */}
      <div style={{
        width: "100%", borderRadius: 12, display: "flex", overflow: "hidden",
        border: "1px solid var(--border-light)", background: "var(--card-bg)"
      }}>
        {/* Pillar 1 */}
        <div style={{ flex: 1, borderRight: "1px solid var(--border-subtle)", padding: 48, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", fontWeight: 600, letterSpacing: 1 }}>PILLAR I</div>
          <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 28, color: "var(--text-primary)", margin: 0, fontWeight: 500 }}>Education</h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
            <strong>The Creator-to-Curator Shift.</strong><br /><br />Reorienting professionals from manual content creation to high-value insight curation and validation.
          </p>
        </div>
        {/* Pillar 2 */}
        <div style={{ flex: 1, borderRight: "1px solid var(--border-subtle)", padding: 48, display: "flex", flexDirection: "column", gap: 24, background: "rgba(0,184,255,0.02)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", fontWeight: 600, letterSpacing: 1 }}>PILLAR II</div>
          <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 28, color: "var(--text-primary)", margin: 0, fontWeight: 500 }}>Process</h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
            <strong>The Capacity Flip.</strong><br /><br />Inverting analyst time allocation from 70% routine to 70% strategic work through workflow redesign.
          </p>
        </div>
        {/* Pillar 3 */}
        <div style={{ flex: 1, padding: 48, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", fontWeight: 600, letterSpacing: 1 }}>PILLAR III</div>
          <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 28, color: "var(--text-primary)", margin: 0, fontWeight: 500 }}>Technology</h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
            <strong>Sovereign Architecture.</strong><br /><br />Model-agnostic infrastructure embedding structural Human-in-the-Loop checkpoints by design.
          </p>
        </div>
      </div>

    </div>
  </Section>
);

const Stats = () => {
  const statItems = [
    { num: "70% → 30%", lbl: "Routine Task Reduction" },
    { num: "Zero", lbl: "Vendor Lock-in" },
    { num: "100%", lbl: "EU AI Act Compliant", highlight: true },
    { num: "Full", lbl: "Audit Trail Coverage" }
  ];

  return (
    <section style={{ background: "var(--bg-stats)", padding: "0 120px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 112 }}>
      {statItems.map((s, i) => (
        <React.Fragment key={i}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 36, fontWeight: 600, letterSpacing: -1, color: s.highlight ? "var(--text-accent)" : "var(--text-primary)" }}>{s.num}</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", letterSpacing: 0.5 }}>{s.lbl}</div>
          </div>
          {i < statItems.length - 1 && <div style={{ width: 1, height: 48, background: "var(--border-subtle)" }} />}
        </React.Fragment>
      ))}
    </section>
  );
};

const Problem = () => (
  <Section background="var(--bg-prob)" padding="100px 120px">
    <div style={{ maxWidth: 1200, display: "flex", flexDirection: "column", gap: 64, width: "100%" }}>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ background: "transparent", border: "1px solid var(--border-light)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-secondary)" }}>
          THE GAP
        </div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 52, color: "var(--text-primary)", textAlign: "center", letterSpacing: -1, maxWidth: 800 }}>
          The AI Transformation Paradox
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", textAlign: "center", maxWidth: 600, lineHeight: 1.6 }}>
          70% of AI initiatives in financial services fail because banks systematically overinvest in technology and underinvest in human readiness. We solve the 90/10 budget inversion.
        </p>
      </div>

      <div style={{ display: "flex", gap: 16, width: "100%" }}>
        {[
          {
            title: "The Technology-First Fallacy",
            desc: "Banks spend 90% of their budget on infrastructure and 10% on change management. Deployment without the cognitive Creator-to-Curator shift guarantees failure."
          },
          {
            title: "Unrestructured Workflows",
            desc: "Layering AI onto legacy processes creates the 'jet engine on a bicycle' effect. True transformation requires redesigning workflows to achieve the Capacity Flip."
          },
          {
            title: "The Vendor Lock-in Trap",
            desc: "Building around a single provider's ecosystem creates unacceptable geopolitical and business risk. Proprietary knowledge must be protected by sovereign architecture."
          }
        ].map((chal, i) => (
          <div key={i} style={{
            flex: 1, padding: "32px 32px 28px", borderRadius: 12,
            background: `linear-gradient(135deg, var(--card-grad-start) 0%, var(--card-grad-end) 100%)`,
            border: "1px solid var(--border-light)", display: "flex", flexDirection: "column", gap: 16
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: "var(--border-subtle)", marginBottom: 16 }} />
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-primary)", fontWeight: 600 }}>{chal.title}</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.5 }}>
              {chal.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </Section>
);

const Capabilities = () => (
  <Section background="var(--bg-cap)" padding="100px 120px">
    <div style={{ maxWidth: 1200, width: "100%", display: "flex", flexDirection: "column", gap: 60 }}>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 44, color: "var(--text-primary)", letterSpacing: -1, margin: 0 }}>
          Sovereign Products built on<br />The Three-Pillar Model
        </h2>
        <a href="#more" style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-accent)", fontWeight: 500 }}>
          View all capabilities →
        </a>
      </div>

      <div style={{
        display: "flex", gap: 48, padding: "40px 48px", borderRadius: 12,
        background: "var(--card-bg)", border: "1px solid var(--border-light)", alignItems: "center"
      }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 28, color: "var(--text-primary)" }}>SaaS Investor Relations Dashboard</h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
            A scalable solution combining deep data visualization with AI chat capabilities. Deployed on our model-agnostic architecture, it protects your proprietary knowledge as a competitive moat while ensuring full EU regulatory compliance natively.
          </p>
        </div>
        <div style={{ width: 360, height: 200, background: "var(--border-subtle)", borderRadius: 10, border: "1px solid var(--border-light)" }} />
      </div>

      <div style={{ display: "flex", gap: 16, width: "100%" }}>
        {[
          {
            title: "Customizable Dispute Resolution",
            desc: "A specialized tool featuring extensive adjustment options. Embeds architectural Human-in-the-Loop (HITL) checkpoints to structurally require professional judgment."
          },
          {
            title: "Model-Agnostic Infrastructure",
            desc: "Evaluate and deploy any LLM per use case. Zero lock-in means your institutional operations continue uninterrupted when the technology landscape shifts."
          },
          {
            title: "The Capacity Flip Engine",
            desc: "Invert your time allocation from 70% routine to 70% strategic. Free your most expensive talent to focus purely on alpha generation."
          }
        ].map((feature, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, paddingTop: 16, borderTop: "1px solid var(--border-subtle)" }}>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", fontWeight: 600 }}>{feature.title}</h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5 }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </Section>
);

const BudgetInversion = () => (
  <Section background="var(--bg-prob)" padding="0 120px 100px">
    <div style={{ maxWidth: 1000, width: "100%", display: "flex", flexDirection: "column", gap: 48 }}>
      <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: 64, display: "flex", flexDirection: "column", gap: 32 }}>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 36, color: "var(--text-primary)", letterSpacing: -0.5, margin: 0 }}>
          The Budget Inversion
        </h3>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: 800, margin: 0 }}>
          Banks typically allocate 90% of their AI transformation budget to technology and 10% to change management. This allocation is precisely backwards. The Three-Pillar Model corrects this inversion.
        </p>

        <div style={{ display: "flex", gap: 32, marginTop: 16 }}>
          {/* Typical Allocation */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", letterSpacing: 1 }}>INDUSTRY STANDARD (70% FAILURE RATE)</div>
            <div style={{ display: "flex", height: 48, borderRadius: 8, overflow: "hidden" }}>
              <div style={{ width: "90%", background: "var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", fontWeight: 500 }}>Technology (90%)</div>
              <div style={{ width: "10%", background: "var(--text-accent)", opacity: 0.5, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 14, color: "#FFF", fontWeight: 500 }} title="Change Mgmt (10%)">...</div>
            </div>
          </div>

          {/* Optimal Allocation */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", letterSpacing: 1 }}>THE THREE-PILLAR MODEL (OPTIMAL)</div>
            <div style={{ display: "flex", height: 48, borderRadius: 8, overflow: "hidden" }}>
              <div style={{ width: "40%", background: "var(--text-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 14, color: "#FFF", fontWeight: 500 }}>Education (40%)</div>
              <div style={{ width: "30%", background: "var(--btn-primary-end)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 14, color: "#FFF", fontWeight: 500 }}>Process (30%)</div>
              <div style={{ width: "30%", background: "var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", fontWeight: 500 }}>Tech (30%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const CapacityFlip = () => (
  <Section bgCenter="--bg-hero-center" bgOuter="--bg-hero-outer" type="radial" padding="100px 120px">
    <div style={{ maxWidth: 1200, display: "flex", flexDirection: "column", gap: 64, width: "100%" }}>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ background: "transparent", border: "1px solid var(--border-light)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-secondary)" }}>
          PILLAR II : PROCESS
        </div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--text-primary)", textAlign: "center", letterSpacing: -1, maxWidth: 800 }}>
          The Capacity Flip
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", textAlign: "center", maxWidth: 700, lineHeight: 1.6 }}>
          Layering AI onto legacy processes creates a 'jet engine on a bicycle' effect. True transformation requires redesigning workflows from first principles to invert professional time allocation.
        </p>
      </div>

      <div style={{ background: "var(--card-bg)", borderRadius: 12, border: "1px solid var(--border-light)", overflow: "hidden" }}>

        {/* Table Header */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--border-subtle)", background: "rgba(0,0,0,0.02)", padding: "20px 32px" }}>
          <div style={{ flex: 2, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", letterSpacing: 1 }}>TASK CATEGORY</div>
          <div style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", letterSpacing: 1 }}>BEFORE (TYPICAL)</div>
          <div style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", letterSpacing: 1 }}>AFTER (TARGET)</div>
          <div style={{ flex: 2, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", letterSpacing: 1 }}>AI ROLE</div>
        </div>

        {/* Table Rows */}
        {[
          { task: "Data extraction & Formatting", before: "~40% of time", after: "~10% of time", role: "Automated with human verification" },
          { task: "Model population", before: "~15% of time", after: "~5% of time", role: "AI-assisted with analyst validation" },
          { task: "Cross-referencing", before: "~10% of time", after: "~5% of time", role: "AI-powered with flagged exceptions" },
          { task: "Strategic analysis & Advisory", before: "~30% of time", after: "~75% of time", role: "Human-led, AI-augmented", highlight: true }
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", borderBottom: i === 3 ? "none" : "1px solid var(--border-subtle)", padding: "24px 32px", background: row.highlight ? "rgba(0,184,255,0.03)" : "transparent" }}>
            <div style={{ flex: 2, fontFamily: "var(--font-sans)", fontSize: 16, color: row.highlight ? "var(--text-primary)" : "var(--text-secondary)", fontWeight: row.highlight ? 600 : 400 }}>{row.task}</div>
            <div style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: 15, color: "var(--text-muted)" }}>{row.before}</div>
            <div style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: 15, color: row.highlight ? "var(--text-accent)" : "var(--text-primary)", fontWeight: 600 }}>{row.after}</div>
            <div style={{ flex: 2, fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-muted)" }}>{row.role}</div>
          </div>
        ))}

      </div>
    </div>
  </Section>
);

const SovereignArchitecture = () => (
  <Section background="var(--bg-stats)" padding="100px 120px">
    <div style={{ maxWidth: 1200, width: "100%", display: "flex", flexDirection: "column", gap: 64 }}>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "inline-block", alignSelf: "flex-start", border: "1px solid var(--border-light)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)" }}>
          PILLAR III : TECHNOLOGY
        </div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--text-primary)", letterSpacing: -1 }}>
          The Sovereign Data Fortress
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", maxWidth: 700, lineHeight: 1.6 }}>
          Models are interchangeable commodities. Your proprietary knowledge—protected by a model-agnostic architecture—is your only defensible moat.
        </p>
      </div>

      <div style={{ display: "flex", gap: 32 }}>
        {[
          { layer: "OUTER LAYER", title: "Model Agnosticism", desc: "Connects to any AI model (US closed, Chinese open, European) via standardized APIs. Zero lock-in guarantees geopolitical resilience." },
          { layer: "MIDDLE LAYER", title: "Institutional Control", desc: "Orchestration, data pipelines, and architectural Human-in-the-Loop checkpoints owned exclusively by the institution, ensuring full EU AI Act auditability." },
          { layer: "INNER LAYER", title: "Proprietary Knowledge", desc: "The institutional memory, research archives, and client insights that generate alpha. Fully protected from external access." }
        ].map((block, i) => (
          <div key={i} style={{
            flex: 1, padding: 40, borderRadius: 12,
            background: i === 2 ? "rgba(0,184,255,0.05)" : "var(--card-bg)",
            border: i === 2 ? "1px solid var(--text-accent)" : "1px solid var(--border-light)",
            display: "flex", flexDirection: "column", gap: 16
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-accent)", fontWeight: 600, letterSpacing: 1 }}>{block.layer}</div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", margin: 0 }}>{block.title}</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
              {block.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </Section>
);

const ReferenceCase = () => (
  <Section bgCenter="--bg-social-top" bgOuter="--bg-social-bottom" type="linear" padding="100px 120px">
    <div style={{ maxWidth: 1200, width: "100%", display: "flex", flexDirection: "column", gap: 64 }}>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "inline-block", alignSelf: "flex-start", border: "1px solid var(--border-light)", background: "rgba(0,200,255,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)" }}>
          REFERENCE CASE
        </div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--text-primary)", letterSpacing: -1, maxWidth: 800 }}>
          MP Capital Markets:<br />Sovereign AI Enablement Validated
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", maxWidth: 700, lineHeight: 1.6 }}>
          The SVRN ALPHA framework was developed and validated in close collaboration with MP Capital Markets — our founding investor. The results prove the Three-Pillar Model in practice.
        </p>
      </div>

      <div style={{ display: "flex", gap: 48 }}>

        {/* Left Col: Phases */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32 }}>
          <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", margin: 0 }}>The Deployment Approach</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { phase: "PHASE 1 : EDUCATION", desc: "Structured AI fluency workshops driving the Creator-to-Curator mindset shift across the entire analyst team." },
              { phase: "PHASE 2 : PROCESS", desc: "Granular workflow redesign routing routine extractions to AI, embedding Human-in-the-Loop checkpoints by default." },
              { phase: "PHASE 3 : TECHNOLOGY", desc: "Sovereign, model-agnostic infrastructure deployed locally, ensuring zero data leakage and full AI Act compliance." }
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 24, borderLeft: "2px solid var(--border-subtle)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", fontWeight: 600 }}>{p.phase}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.5 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Results */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, background: "var(--card-bg)", border: "1px solid var(--border-light)", padding: 40, borderRadius: 12 }}>
          <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", margin: 0 }}>Validated Results</h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6 }}>
            The capacity flip was achieved: analyst ratios inverted from majority-routine to majority-strategic.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
            {[
              "Capacity Flip Achieved",
              "Zero Data Leakage",
              "Measurable Alpha Generation",
              "Zero Vendor Lock-in",
              "Full EU Compliance (AI Act, GDPR)"
            ].map((res, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--text-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-primary)", fontWeight: 500 }}>{res}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  </Section>
);

const AcademicFoundations = () => (
  <Section bgCenter="--bg-team-top" bgOuter="--bg-team-bottom" type="linear" padding="100px 120px">
    <div style={{ maxWidth: 1200, width: "100%", display: "flex", flexDirection: "column", gap: 64 }}>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ border: "1px solid var(--border-light)", background: "rgba(0,184,255,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)" }}>
          ACADEMIC FOUNDATION
        </div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--text-primary)", textAlign: "center", letterSpacing: -1, maxWidth: 800 }}>
          Founded on Academic Rigour. Engineered for Reality.
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", textAlign: "center", maxWidth: 700, lineHeight: 1.6 }}>
          After 10+ years of published research on digital transformation, Prof. Dr. Tobias Blask founded SVRN ALPHA to bridge the gap between academic theory and institutional execution.
        </p>
      </div>

      <div style={{ display: "flex", gap: 48, width: "100%", alignItems: "flex-start" }}>

        {/* Core Principles */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", margin: 0 }}>The 5 Core Principles</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { num: "01", title: "Education Before Technology", desc: "No technology deployment until organizational readiness is established." },
              { num: "02", title: "Sovereign Means You Decide", desc: "Model-agnostic per use case. Evaluate US, Chinese, or European. Never locked in." },
              { num: "03", title: "Human-in-the-Loop Always", desc: "AI assists. Humans decide. Architectural, not a feature toggle." },
              { num: "04", title: "Evidence Over Claims", desc: "Capacity flip. Measurable alpha. If we can't measure it, we don't claim it." },
              { num: "05", title: "Compliance by Design", desc: "EU AI Act, MiFID II, MAR built directly into the architecture." }
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 20, color: "var(--border-light)", fontWeight: 300 }}>{p.num}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 4 }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-primary)", fontWeight: 600 }}>{p.title}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Whitepaper CTA Box */}
        <div style={{
          flex: 1, padding: 48, borderRadius: 12,
          background: `linear-gradient(135deg, var(--card-grad-start) 0%, var(--card-grad-end) 100%)`,
          border: "1px solid var(--text-accent)", display: "flex", flexDirection: "column", gap: 24
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-accent)", letterSpacing: 1 }}>FOUNDING PAPER</div>
          <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 32, color: "var(--text-primary)", margin: 0, lineHeight: 1.2 }}>
            The Three-Pillar Model:<br />A Framework for Sovereign AI
          </h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
            44 pages of research, methodology, and evidence. Discover why 70% of banking AI initiatives fail, and the architectural shift required to succeed.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
            <Button variant="primary" style={{ width: "fit-content" }}>Download the Founding Paper</Button>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", display: "flex", gap: 16 }}>
              <span>PDF Format</span>
              <span>•</span>
              <span>44 pages</span>
              <span>•</span>
              <span>No Reg. Required</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </Section>
);

const FinalCTA = () => (
  <Section bgCenter="--bg-cta-center" bgOuter="--bg-cta-outer" type="radial" padding="100px 120px" style={{ minHeight: 520 }}>
    <div style={{ maxWidth: 900, display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>

      <div style={{ width: 1, height: 80, background: "linear-gradient(180deg, transparent 0%, var(--btn-primary-start) 50%, transparent 100%)" }} />

      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 60, color: "var(--text-primary)", textAlign: "center", letterSpacing: -1, lineHeight: 1.1 }}>
        Your institution.<br />Reborn for the AI Age.
      </h2>

      <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", textAlign: "center", maxWidth: 560, lineHeight: 1.6 }}>
        Discover our scalable SaaS Investor Relations Dashboard and customizable Dispute Resolution products. Built to differentiate and deliver high value.
      </p>

      <div style={{ display: "flex", gap: 16 }}>
        <Button variant="primary">Schedule Consultation</Button>
        <Button variant="secondary">Contact Partners</Button>
      </div>

      <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", letterSpacing: 0.5 }}>
        Engagements are bespoke, confidential, and scoped to your institution's priorities.
      </p>

    </div>
  </Section>
);

const Footer = () => (
  <footer style={{ background: "var(--bg-footer)", padding: "60px 120px 40px", display: "flex", flexDirection: "column", gap: 48 }}>
    <div style={{ display: "flex", justifyContent: "space-between", gap: 80 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 280 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 600, letterSpacing: 2, color: "var(--text-primary)" }}>svrn_alpha</div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>
          Sovereign AI enablement and organizational transformation for investment banking.
        </p>
      </div>
      <div style={{ display: "flex", gap: 60 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)", fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>PLATFORM</div>
          <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>Architecture</a>
          <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>Compliance</a>
          <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>Use Cases</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)", fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>COMPANY</div>
          <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>About</a>
          <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>Research</a>
          <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>Careers</a>
        </div>
      </div>
    </div>

    <div style={{ width: "100%", height: 1, background: "var(--border-subtle)" }} />

    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)" }}>
        © 2026 svrn_alpha Ltd. All rights reserved. Regulated where applicable.
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: 1 }}>
        London · Frankfurt · Amsterdam · Paris
      </div>
    </div>
  </footer>
);

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Stats />
      <Problem />
      <BudgetInversion />
      <CapacityFlip />
      <Capabilities />
      <SovereignArchitecture />
      <ReferenceCase />
      <AcademicFoundations />
      <FinalCTA />
      <Footer />
    </div>
  );
}
