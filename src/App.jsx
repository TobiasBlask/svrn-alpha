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
        svrn alpha
      </span>
    </div>

    <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
      {["Approach", "Solutions", "About"].map(link => (
        <a key={link} href={`#${link.toLowerCase()}`} style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)" }}>
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
        Institutional-Grade AI<br />for Regulated Finance
      </h1>

      <p style={{ fontFamily: "var(--font-sans)", fontSize: 19, color: "var(--text-secondary)", textAlign: "center", maxWidth: 720, lineHeight: 1.6, margin: 0 }}>
        Empowering capital markets with two core scalable solutions: A SaaS AI-powered Investor Relations Dashboard for deep data visualization and a customizable Dispute Resolution Tool.
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
    { num: "550K+", lbl: "Company Profiles" },
    { num: "14×", lbl: "Faster Workflows" },
    { num: "<2hrs", lbl: "Deal Memo Turnaround", highlight: true },
    { num: "100%", lbl: "Audit Trail Coverage" }
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
          Financial institutions are running on borrowed time.
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", textAlign: "center", maxWidth: 600, lineHeight: 1.6 }}>
          The window to transform is closing. Competitors who embed AI into their operations today will be structurally unassailable within three years. The question is no longer whether to change — it's whether you can change fast enough.
        </p>
      </div>

      <div style={{ display: "flex", gap: 16, width: "100%" }}>
        {[
          {
            title: "Education Deficit",
            desc: "Most AI initiatives skip straight to deployment. The shift from Creator to Curator is cognitive, requiring analysts to understand why curating AI-generated outputs lets them focus on alpha generation."
          },
          {
            title: "Process Rigidity",
            desc: "Dropping AI into existing workflows fails because the workflows themselves need restructuring. The typical analyst spends 70% of their time on routine tasks—AI must invert that ratio."
          },
          {
            title: "Abdicated Leadership",
            desc: "AI transformation is not an IT project. When the C-suite delegates this to technology departments, it dies. Successful AI deployment requires the CEO or MD to personally own the transformation."
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
          Platform + FDE for<br />Institutional Transformation
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
            A super attractive, scalable business model combining deep data visualization with AI chat capabilities. Designed specifically to differentiate your firm from established players like Nastic AR or German Börse Cockpit through a more agile, high-value offering.
          </p>
        </div>
        <div style={{ width: 360, height: 200, background: "var(--border-subtle)", borderRadius: 10, border: "1px solid var(--border-light)" }} />
      </div>

      <div style={{ display: "flex", gap: 16, width: "100%" }}>
        {[
          {
            title: "Customizable Dispute Resolution",
            desc: "A specialized tool featuring extensive adjustment options to tailor the dispute resolution process entirely to your institution's specific workflow."
          },
          {
            title: "Cost-Effective Pricing Models",
            desc: "Positioned competitively against legacy systems with flexible licensing models."
          },
          {
            title: "Scalable Value Proposition",
            desc: "Designed to serve our target market of 20-30 core enterprise customers."
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
          From Advisory to<br />Embedded Execution
        </h2>
      </div>

      <div style={{ display: "flex", gap: 16, width: "100%" }}>
        {[
          {
            client: "Tier 1 European Bank",
            quote: `"The SaaS Investor Relations Dashboard gave our IR team a completely new level of insight. The AI chat feature combined with real-time data visualization is far superior to legacy systems we previously used."`,
            author: "— Head of Investor Relations"
          },
          {
            client: "Global Asset Manager",
            quote: `"The sophisticated adjustment options within the Dispute Resolution Tool allowed us to perfectly map our internal compliance workflows. It's a highly customizable, low-cost solution that just works."`,
            author: "— Chief Compliance Officer"
          },
          {
            client: "Private Equity Firm",
            quote: `"With EU AI Act compliance natively embedded into our model-agnostic infrastructure, we deploy state-of-the-art models without risking data sovereignty or proprietary knowledge."`,
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
          svrn alpha was founded by Prof. Dr. Tobias Blask — bringing together a team of academics, capital markets practitioners, and AI engineers with a shared conviction: that financial institutions can only truly transform when education, process, roles, and technology move together.
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
            "We built svrn alpha because we saw financial institutions buying LLM subscriptions and expecting alpha. True transformation requires a sovereign strategy that re-engineers the institution from the inside out."
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          {["European Sovereign Architecture", "Capital Markets Domain Expertise", "Academic Research & Validation"].map((val, i) => (
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
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 600, letterSpacing: 2, color: "var(--text-primary)" }}>svrn alpha</div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>
          Sovereign AI infrastructure and organizational transformation for regulated finance.
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
        © 2026 svrn alpha Ltd. All rights reserved. Regulated where applicable.
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
