import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export const Hero = () => (
    <Section bgCenter="--bg-hero-center" bgOuter="--bg-hero-outer" type="radial" padding="100px 120px 80px">
        <div style={{ maxWidth: 1080, display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>

            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(16, 58, 90, 0.25)", padding: "6px 14px", borderRadius: 100, border: "1px solid var(--border-subtle)" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-accent)" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: 2, color: "var(--text-accent)" }}>
                    Academic Rigour. Institutional Impact.
                </span>
            </div>

            <h1 style={{
                fontFamily: "var(--font-serif)",
                fontSize: 72,
                fontWeight: 400,
                color: "var(--text-primary)",
                textAlign: "center",
                lineHeight: 1.05,
                letterSpacing: -1,
                margin: 0
            }}>
                Sovereign AI Enablement<br />for Investment Banking<br />and the Financial Industry
            </h1>

            <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 20,
                color: "var(--text-secondary)",
                textAlign: "center",
                maxWidth: 720,
                lineHeight: 1.5,
                margin: 0
            }}>
                We bridge the gap between academic research and capital markets execution. Adopting AI isn't about deploying technology—it's about fundamentally restructuring your institution through the Three-Pillar Model.
            </p>

            <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
                <Button variant="primary">Explore the Architecture</Button>
                <Button variant="secondary">Download the Founding Paper</Button>
            </div>

            <div style={{ marginTop: 80, width: "100%", display: "flex", gap: 24 }}>
                {[
                    { title: "PILLAR I", subtitle: "Education", text: "The Creator-to-Curator Shift", desc: "Build strategic fluency before deploying technology. Transform your professionals from content creators to insight curators." },
                    { title: "PILLAR II", subtitle: "Process", text: "The Capacity Flip", desc: "Redesign workflows from first principles. Invert the analyst time allocation from 70% routine to 70% strategic analysis." },
                    { title: "PILLAR III", subtitle: "Technology", text: "Sovereign Architecture", desc: "Model-agnostic infrastructure. Zero vendor lock-in. Your proprietary knowledge stays inside the institutional fortress." }
                ].map((pillar, i) => (
                    <div key={i} style={{ flex: 1, padding: 32, borderRadius: 16, background: "var(--card-bg)", border: "1px solid var(--border-light)", display: "flex", flexDirection: "column", gap: 20 }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", fontWeight: 600, letterSpacing: 1 }}>{pillar.title}</div>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", margin: 0 }}>{pillar.subtitle}</h3>
                        </div>
                        <div style={{ height: 1, width: "100%", background: "var(--border-subtle)" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-primary)", fontWeight: 500 }}>{pillar.text}</div>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{pillar.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </Section>
);

export const Stats = () => (
    <section style={{
        width: "100%", background: "var(--bg-stats)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)",
        display: "flex", justifyContent: "center", padding: "40px 0"
    }}>
        <div style={{ maxWidth: 1200, width: "100%", display: "flex", justifyContent: "space-between", padding: "0 60px" }}>
            {[
                { val: "70% → 30%", label: "Capacity Flip (Routine vs. Strategic)" },
                { val: "100%", label: "EU AI Act Compliant Architecture" },
                { val: "Zero", label: "Vendor Lock-in (Model-Agnostic)" }
            ].map((stat, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--text-primary)", letterSpacing: -1 }}>{stat.val}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", letterSpacing: 1 }}>{stat.label}</div>
                </div>
            ))}
        </div>
    </section>
);

export const Problem = () => (
    <Section background="var(--bg-prob)" padding="100px 120px 0px">
        <div style={{ maxWidth: 1200, display: "flex", flexDirection: "column", gap: 64, width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--text-primary)", letterSpacing: -1, maxWidth: 800 }}>
                    The AI Transformation Paradox.
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", maxWidth: 700, lineHeight: 1.6 }}>
                    Every major investment bank has an AI initiative, yet the industry-wide failure rate hovers around 70%. The problem isn't the technology—it's the sequence of implementation.
                </p>
            </div>

            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {[
                    { title: "The Technology-First Fallacy", desc: "Deploying institutional LLM subscriptions before establishing the 'Creator-to-Curator' mindset inevitably results in low adoption rates. Education must precede technology." },
                    { title: "Unrestructured Workflows", desc: "Layering AI onto legacy processes creates a 'jet engine on a bicycle' scenario. Without deep workflow redesign, the structural Capacity Flip cannot be achieved." },
                    { title: "The Vendor Lock-in Trap", desc: "Committing your architecture to a single US provider sacrifices sovereign control and exposes the institution to geopolitical risk and shifting AI Act compliance gaps." }
                ].map((item, i) => (
                    <div key={i} style={{
                        flex: "1 1 300px", padding: 32, borderRadius: 12, border: "1px solid var(--border-subtle)",
                        display: "flex", flexDirection: "column", gap: 16
                    }}>
                        <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-primary)" }}>{item.title}</h3>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

export const BudgetInversion = () => (
    <Section background="var(--bg-prob)" padding="100px 120px">
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

export const CapacityFlip = () => (
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

const DashboardVisualization = () => (
    <div style={{
        width: "100%", height: 460, borderRadius: 16, background: "#0A0D14", border: "1px solid #1E2532",
        overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 24px 64px rgba(0,0,0,0.4)"
    }}>
        {/* Top App Bar */}
        <div style={{ height: 48, borderBottom: "1px solid #1E2532", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
            <div style={{ display: "flex", gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F56" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27C93F" }} />
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#6A778D", letterSpacing: 1 }}>SaaS IR Dashboard · Protected Session</div>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#1E2532", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00B8FF" }} />
            </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, display: "flex" }}>

            {/* Sidebar */}
            <div style={{ width: 220, borderRight: "1px solid #1E2532", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#6A778D", letterSpacing: 1, paddingLeft: 8 }}>PORTFOLIOS</div>
                    {["European Equities", "Global Tech", "ESG Select", "Fixed Income"].map((p, i) => (
                        <div key={i} style={{
                            padding: "8px 12px", borderRadius: 6, cursor: "pointer",
                            background: i === 0 ? "rgba(0,184,255,0.1)" : "transparent",
                            color: i === 0 ? "#FFF" : "#8A99B2",
                            fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: i === 0 ? 500 : 400
                        }}>
                            {p}
                        </div>
                    ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#6A778D", letterSpacing: 1, paddingLeft: 8 }}>AI ASSISTANT</div>
                    <div style={{ padding: "8px 12px", borderRadius: 6, background: "#1E2532", color: "#FFF", fontFamily: "var(--font-sans)", fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00B8FF", boxShadow: "0 0 8px #00B8FF" }} />
                        Query Engine
                    </div>
                    <div style={{ padding: "8px 12px", borderRadius: 6, color: "#8A99B2", fontFamily: "var(--font-sans)", fontSize: 13 }}>
                        Dispute Resolution
                    </div>
                </div>
            </div>

            {/* Content & Data */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#0F131C" }}>

                {/* Stats Row */}
                <div style={{ display: "flex", borderBottom: "1px solid #1E2532", padding: "24px" }}>
                    {[
                        { label: "AUM (EUR)", val: "€2.4B", tick: "+4.2%" },
                        { label: "YTD Return", val: "12.8%", tick: "+1.5%" },
                        { label: "Active Positions", val: "142", tick: "0" }
                    ].map((stat, i) => (
                        <div key={i} style={{ flex: 1, borderRight: i === 2 ? "none" : "1px solid #1E2532", paddingRight: 24, paddingLeft: i === 0 ? 0 : 24, display: "flex", flexDirection: "column", gap: 8 }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#6A778D", letterSpacing: 1 }}>{stat.label}</div>
                            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                                <div style={{ fontFamily: "var(--font-sans)", fontSize: 28, color: "#FFF", fontWeight: 500 }}>{stat.val}</div>
                                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: stat.tick.startsWith("+") ? "#27C93F" : "#6A778D" }}>{stat.tick}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main View Area */}
                <div style={{ flex: 1, display: "flex", padding: 24, gap: 24 }}>

                    {/* Chart Area */}
                    <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: 16 }}>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#FFF", fontWeight: 500 }}>Performance Trajectory vs Benchmark</div>
                        <div style={{ flex: 1, border: "1px solid #1E2532", borderRadius: 8, background: "#0A0D14", position: "relative", overflow: "hidden" }}>
                            {/* Abstract Chart Lines */}
                            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ position: "absolute", bottom: 0 }}>
                                {/* Grid */}
                                <line x1="0" y1="20" x2="100" y2="20" stroke="#1E2532" strokeWidth="0.5" />
                                <line x1="0" y1="50" x2="100" y2="50" stroke="#1E2532" strokeWidth="0.5" />
                                <line x1="0" y1="80" x2="100" y2="80" stroke="#1E2532" strokeWidth="0.5" />

                                {/* Benchmark */}
                                <polyline points="0,80 20,75 40,60 60,65 80,45 100,50" fill="none" stroke="#6A778D" strokeWidth="1.5" strokeDasharray="2,2" />

                                {/* Portfolio */}
                                <polyline points="0,75 20,60 40,30 60,35 80,15 100,10" fill="none" stroke="#00B8FF" strokeWidth="2.5" />
                                <polygon points="0,100 0,75 20,60 40,30 60,35 80,15 100,10 100,100" fill="url(#grad)" opacity="0.1" />

                                <defs>
                                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#00B8FF" />
                                        <stop offset="100%" stopColor="#00B8FF" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {/* AI Chat Area */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", border: "1px solid #1E2532", borderRadius: 8, background: "#0A0D14", overflow: "hidden" }}>
                        <div style={{ padding: "12px 16px", borderBottom: "1px solid #1E2532", fontFamily: "var(--font-sans)", fontSize: 13, color: "#FFF", fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00B8FF" }} />
                            Aura Assistant (Sovereign Core)
                        </div>
                        <div style={{ flex: 1, padding: 16, display: "flex", flexDirection: "column", gap: 16, overflowY: "auto" }}>
                            <div style={{ alignSelf: "flex-end", background: "#1E2532", padding: "10px 14px", borderRadius: "12px 12px 0 12px", fontFamily: "var(--font-sans)", fontSize: 13, color: "#FFF", maxWidth: "85%" }}>
                                Summarize the Q3 attribution for European Equities.
                            </div>
                            <div style={{ alignSelf: "flex-start", background: "rgba(0,184,255,0.1)", border: "1px solid rgba(0,184,255,0.2)", padding: "10px 14px", borderRadius: "12px 12px 12px 0", fontFamily: "var(--font-sans)", fontSize: 13, color: "#E0E5F0", maxWidth: "90%", lineHeight: 1.5 }}>
                                The +4.2% outperformance was primarily driven by overweight positioning in Industrials (Siemens, Schneider) and strong stock selection in Financials.
                                <div style={{ marginTop: 8, padding: "6px 10px", background: "rgba(0,0,0,0.2)", borderRadius: 4, fontFamily: "var(--font-mono)", fontSize: 11, color: "#00B8FF" }}>Source: Q3_Attribution_Internal.pdf</div>
                            </div>
                        </div>
                        <div style={{ padding: 12, borderTop: "1px solid #1E2532" }}>
                            <div style={{ width: "100%", padding: "8px 12px", borderRadius: 6, background: "#1E2532", fontFamily: "var(--font-sans)", fontSize: 13, color: "#6A778D" }}>
                                Ask a question about the portfolio...
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
);

export const Capabilities = () => (
    <Section background="var(--bg-stats)" padding="100px 120px">
        <div style={{ maxWidth: 1200, width: "100%", display: "flex", flexDirection: "column", gap: 64 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--text-primary)", letterSpacing: -1, maxWidth: 600 }}>
                    Sovereign Products<br />Built on the Foundation.
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", maxWidth: 400, textAlign: "right" }}>
                    Once the Three Pillars are established, we deploy scalable applications tailored for regulated capital markets.
                </p>
            </div>

            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <DashboardVisualization />
            </div>

            <div style={{ display: "flex", gap: 16, width: "100%" }}>
                {[
                    {
                        title: "SaaS IR Dashboard",
                        desc: "A highly attractive Investor Relations interface combining real-time data visualization with AI chat. Low-cost scaling designed to outperform established peers."
                    },
                    {
                        title: "Customizable Dispute Resolution",
                        desc: "A specialized tool featuring extensive adjustment options. Embeds architectural Human-in-the-Loop (HITL) checkpoints to structurally require professional judgment."
                    },
                    {
                        title: "Model-Agnostic Infrastructure",
                        desc: "Evaluate and deploy any LLM per use case. Zero lock-in means your institutional operations continue uninterrupted when the technology landscape shifts."
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

export const SovereignArchitecture = () => (
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

export const ReferenceCaseFragment = () => (
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

export const AcademicFoundations = () => (
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

export const FinalCTA = () => (
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

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Problem />
            <BudgetInversion />
            <CapacityFlip />
            <Capabilities />
            <SovereignArchitecture />
            <ReferenceCaseFragment />
            <AcademicFoundations />
            <FinalCTA />
        </>
    );
}
