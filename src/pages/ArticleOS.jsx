import React from 'react';
import { Section } from '../components/Section';

export default function ArticleOS() {
    return (
        <article style={{ display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh" }}>

            {/* Header Section */}
            <Section bgCenter="--bg-prob" bgOuter="--bg-primary" type="radial" padding="160px 120px 80px">
                <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 32 }}>
                    <div style={{ display: "inline-block", alignSelf: "flex-start", border: "1px solid var(--border-light)", background: "rgba(0,184,255,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-accent)" }}>
                        // M_01 · THE_OS_LAYER
                    </div>
                    <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 56, color: "var(--text-primary)", letterSpacing: -1, margin: 0, lineHeight: 1.1 }}>
                        Stop Prompting. Start Shipping the OS.
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
                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>February 7, 2026</div>
                        </div>
                        <div style={{ width: 1, height: 32, background: "var(--border-subtle)" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>READ TIME</div>
                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>8 MIN</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Content Section */}
            <Section background="var(--bg-primary)" padding="40px 120px 120px">
                <div style={{ maxWidth: 760, width: "100%", display: "flex", flexDirection: "column", gap: 40 }}>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                        Every major investment bank has an AI initiative. They license a chatbot wrapper from a US tech giant, hand it to their analysts, and call it an AI strategy. And then, quietly, the initiatives fail. The industry-wide failure rate for AI transformation in financial services sits around 70%.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        The Problem With "Tools"
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        The problem is fundamental: an investment bank is a highly complex, interconnected organism. Extracting data, modelling DCFs, structuring deals, doing compliance checks, clearing risk—this is a continuous value chain. Dropping a generic AI chat tool onto an analyst's desk is like installing a jet engine on a bicycle. 
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                        You don't need a new tool. You need a new Operating System.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        We Ship the AI OS
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        At SVRN ALPHA, our ethos is built around two words that the financial sector desperately needs: <strong>We Ship.</strong>
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        We don't sell slide decks about the future of AI. We don't consult on theoretical frameworks and walk away. We develop, deploy, and <em>ship</em> the full underlying Operating System for the AI Age, right into the heart of your institution.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        This Operating System is designed for the entire value chain. It connects the data ingestion to the modelling engine, to the layout formatter, to the compliance gatekeeper. It enables your institution to handle technology sovereignly—not as a rented SaaS product, but as the foundational layer of your bank.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        The Three-Pillar Enablement
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        Shipping the OS is only the final step. To truly enable an organization to outperform and generate alpha, we deploy our Three-Pillar Model:
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 32, borderRadius: 12, border: "1px solid var(--border-light)", background: "var(--card-bg)", margin: "16px 0" }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--text-accent)", marginTop: 8 }} />
                            <div>
                                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", margin: "0 0 8px 0" }}>Pillar 1 — Education</h4>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>We rewrite how your people think. They stop thinking like manual content creators and learn to operate the system. They become the users of the new OS.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--text-accent)", marginTop: 8 }} />
                            <div>
                                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", margin: "0 0 8px 0" }}>Pillar 2 — Processes</h4>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>We map your entire value chain. We identify where the OS can natively handle the compute, and where the human applies institutional judgment. We rewrite the operational code of your firm.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--text-accent)", marginTop: 8 }} />
                            <div>
                                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", margin: "0 0 8px 0" }}>Pillar 3 — Technology (The OS)</h4>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>We ship the Sovereign AI Operating System. It lives on your infrastructure. It is model-agnostic. It is yours.</p>
                            </div>
                        </div>
                    </div>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                        When you stop treating AI as a discrete tool and start treating it as the foundational OS of your institution, the failure rate drops to zero. That is how alpha is generated in the new era.
                    </p>

                </div>
            </Section>
        </article>
    );
}
