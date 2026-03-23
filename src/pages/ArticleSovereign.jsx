import React from 'react';
import { Section } from '../components/Section';

export default function ArticleSovereign() {
    return (
        <article style={{ display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh" }}>

            {/* Header Section */}
            <Section bgCenter="--bg-prob" bgOuter="--bg-primary" type="radial" padding="160px 120px 80px">
                <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 32 }}>
                    <div style={{ display: "inline-block", alignSelf: "flex-start", border: "1px solid var(--border-light)", background: "rgba(0,184,255,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-accent)" }}>
                        // M_02 · SOVEREIGN_ENABLEMENT
                    </div>
                    <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 56, color: "var(--text-primary)", letterSpacing: -1, margin: 0, lineHeight: 1.1 }}>
                        Sovereign Enablement: Owning the Engine for Alpha
                    </h1>
                    <div className="flex-wrap-mobile gap-mobile-md" style={{ display: "flex", gap: 24, alignItems: "center", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", padding: "16px 0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <img src="https://media.licdn.com/dms/image/v2/D4D03AQGKORxWDPLBvQ/profile-displayphoto-crop_800_800/B4DZwGC3Y7G4AI-/0/1769627941019?e=1773878400&v=beta&t=woTl7s448ZeU4Wu6-EJBd2dc3bgl5_Ina3qoCQ_v8BE" alt="Prof. Dr. Tobias Blask" style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid var(--border-subtle)", objectFit: "cover" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>AUTHOR</div>
                                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>Prof. Dr. T. Blask</div>
                            </div>
                        </div>
                        <div style={{ width: 1, height: 32, background: "var(--border-subtle)" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>PUBLISHED</div>
                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>February 5, 2026</div>
                        </div>
                        <div style={{ width: 1, height: 32, background: "var(--border-subtle)" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>READ TIME</div>
                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>7 MIN</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Content Section */}
            <Section background="var(--bg-primary)" padding="40px 120px 120px">
                <div style={{ maxWidth: 760, width: "100%", display: "flex", flexDirection: "column", gap: 40 }}>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                        GPT-4, Claude, DeepSeek, Mistral. The frontier models shift every few months. Right now, most banks are locking themselves into a single cloud provider, renting their artificial intelligence through an API.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        The End of Rented Alpha
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        If your competitive advantage—your alpha—relies on an API key that belongs to a vendor who can change their pricing, update their model, or deprecate a feature at will, you do not have a competitive advantage. You have a dependency.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                        In the Age of AI, the winners will be the institutions that <strong>own their intelligence layer</strong>.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        Sovereign Enablement
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        This is the core of what we ship at SVRN ALPHA. We call it Sovereign Enablement. We ship an AI Operating System that sits <em>between</em> your proprietary data and the commoditized LLMs. It is a sovereign foundation that lives on your hardware, within your firewalls, and strictly under your control.
                    </p>

                    <div style={{ padding: 32, background: "rgba(0,184,255,0.03)", borderLeft: "4px solid var(--text-accent)", borderRadius: "0 12px 12px 0", margin: "16px 0" }}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>
                            "What Sovereign Enablement gives you: Model-Agnostic Routing, Value Chain Integration, and a proprietary Data Fortress."
                        </p>
                    </div>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        <strong>Model-Agnostic Routing:</strong> The OS automatically routes tasks. Heavy analytics go to an elite reasoning model. High-volume document processing goes to a fast, locally hosted open-weight model. When the market releases a better model tomorrow, the OS swaps it in. Zero downtime. Zero lock-in.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        <strong>Value Chain Integration:</strong> Because you own the OS, it integrates directly into your proprietary databases, your bespoke compliance systems, and your unique operational quirks. It isn't a generic tool; it is compiled specifically for your bank.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        <strong>Data Fortress:</strong> Your proprietary models, 20 years of research, and client histories never leave the building. The OS trains and retrieves against your data, making your institution smarter with every query, compounding your advantage over time.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        The Operating System for Alpha
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        When we say we enable companies to handle technology sovereignly, we mean we give them the keys to the engine.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        If you use AI as a generic tool, you will get generic returns. If you deploy it as a Sovereign Operating System customized to your unique value chain, you create an insurmountable capability gap between you and your competitors. You generate outsized alpha because your organization moves faster, executes cleaner, and thinks deeper than the market.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                        We build it. We ship it. You own the alpha.
                    </p>

                </div>
            </Section>
        </article>
    );
}
