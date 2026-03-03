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
    <div style={{ maxWidth: 900, display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>

      <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(16, 58, 90, 0.25)", padding: "6px 14px", borderRadius: 100, border: "1px solid var(--border-subtle)" }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-accent)" }} />
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: 2, color: "var(--text-accent)" }}>
          Academic Rigour. Institutional Impact.
        </span>
      </div>

      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 72, fontWeight: "normal", letterSpacing: -2, color: "var(--text-primary)", textAlign: "center", lineHeight: 1.1, margin: 0 }}>
        Sovereign AI Enablement<br />for Investment Banking
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

      {/* Hero Visualization Placeholder */}
      <div style={{
        width: 900, height: 480, borderRadius: 12, display: "flex", overflow: "hidden",
        border: "1px solid var(--border-light)", background: "var(--card-bg)"
      }}>
        <div style={{ flex: 1, borderRight: "1px solid var(--border-subtle)" }}></div>
        <div style={{ flex: 1, borderRight: "1px solid var(--border-subtle)" }}></div>
        <div style={{ flex: 1 }}></div>
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
            title: "The Capacity Flip",
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

const SocialProof = () => (
  <Section bgCenter="--bg-social-top" bgOuter="--bg-social-bottom" type="linear" padding="100px 120px">
    <div style={{ maxWidth: 1200, width: "100%", display: "flex", flexDirection: "column", gap: 60, alignItems: "center" }}>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ border: "1px solid var(--border-light)", background: "rgba(0,200,255,0.1)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)" }}>
          IMPACT
        </div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--text-primary)", textAlign: "center", letterSpacing: -1 }}>
          The Creator-to-Curator<br />Shift in Practice
        </h2>
      </div>

      <div style={{ display: "flex", gap: 16, width: "100%" }}>
        {[
          {
            client: "Tier 1 European Bank",
            quote: `"The transition from Creator to Curator changed how our analysts work. The SaaS IR Dashboard didn't just automate data—it structurally shifted our team's capacity to strategic analysis."`,
            author: "— Head of Investor Relations"
          },
          {
            client: "Global Asset Manager",
            quote: `"Bypassing a human checkpoint in their Dispute Resolution Tool is architecturally impossible. This isn't just a feature; it's the load-bearing structure that guarantees our EU AI Act compliance."`,
            author: "— Chief Compliance Officer"
          },
          {
            client: "Private Equity Firm",
            quote: `"Their sovereign architecture protected our proprietary knowledge as a competitive moat. When a new open-source model outperformed our incumbent, we switched overnight with zero workflow disruption."`,
            author: "— Chief Operating Officer"
          }
        ].map((proof, i) => (
          <div key={i} style={{
            flex: 1, padding: 32, borderRadius: 12,
            background: `linear-gradient(135deg, var(--card-grad-start) 0%, var(--card-grad-end) 100%)`,
            border: i === 1 ? "2px solid var(--text-accent)" : "1px solid var(--border-light)",
            display: "flex", flexDirection: "column", gap: 24
          }}>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-primary)" }}>{proof.client}</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.5 }}>
              {proof.quote}
            </p>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>{proof.author}</div>
          </div>
        ))}
      </div>

    </div>
  </Section>
);

const FoundingTeam = () => (
  <Section bgCenter="--bg-team-top" bgOuter="--bg-team-bottom" type="linear" padding="100px 120px">
    <div style={{ maxWidth: 1200, width: "100%", display: "flex", flexDirection: "column", gap: 64 }}>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ border: "1px solid var(--border-light)", background: "rgba(0,184,255,0.13)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)" }}>
          TEAM
        </div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--text-primary)", textAlign: "center", letterSpacing: -1, width: 800 }}>
          Where Academic Rigour Meets Capital Markets
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", textAlign: "center", maxWidth: 700, lineHeight: 1.6 }}>
          svrn_alpha was founded by Prof. Dr. Tobias Blask — bringing together a team of academics, capital markets practitioners, and AI engineers with a shared conviction: that financial institutions can only truly transform when education, process, roles, and technology move together.
        </p>
      </div>

      <div style={{ display: "flex", gap: 48, width: "100%", alignItems: "center" }}>
        <div style={{
          flex: 1, padding: 40, borderRadius: 12,
          background: `linear-gradient(135deg, var(--card-grad-start) 0%, var(--card-grad-end) 100%)`,
          border: "1px solid var(--border-light)", display: "flex", flexDirection: "column", gap: 24
        }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--border-subtle)" }} />
            <div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", margin: 0 }}>Prof. Dr. Tobias Blask</h3>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", marginTop: 4 }}>FOUNDER & CHAIRMAN</div>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
            "We built svrn_alpha because we saw financial institutions buying LLM subscriptions and expecting alpha. True transformation requires a sovereign strategy that re-engineers the institution from Education, to Process, to Technology."
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          {["The Three-Pillar Methodology", "Model-Agnostic Sovereign Architecture", "Architectural Human-in-the-Loop Design"].map((val, i) => (
            <div key={i} style={{ padding: "20px 0", borderBottom: i < 2 ? "1px solid var(--border-subtle)" : "none" }}>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", fontWeight: 500 }}>{val}</div>
            </div>
          ))}
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
      <Capabilities />
      <SocialProof />
      <FoundingTeam />
      <FinalCTA />
      <Footer />
    </div>
  );
}
