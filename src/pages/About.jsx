import React from 'react';
import { Section } from '../components/Section';

export default function About() {
    return (
        <>
            <Section background="var(--bg-prob)" padding="120px 120px 80px">
                <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
                    <div style={{ display: "inline-block", border: "1px solid var(--border-light)", background: "rgba(0,184,255,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)" }}>
                        ABOUT
                    </div>
                    <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 56, color: "var(--text-primary)", letterSpacing: -1, margin: 0, textAlign: "center" }}>
                        Founded on Academic Rigor.<br />Engineered for Reality.
                    </h1>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, textAlign: "center" }}>
                        SVRN ALPHA exists because the gap between what research says about AI transformation and what the industry does about it is too wide to accept.
                    </p>
                </div>
            </Section>

            <Section background="var(--bg-primary)" padding="60px 120px 120px">
                <div className="flex-col-mobile gap-mobile-lg" style={{ maxWidth: 1000, width: "100%", display: "flex", gap: 64 }}>

                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 48 }}>

                        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 32, color: "var(--text-primary)", margin: 0 }}>The Origin</h3>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                For over a decade, Prof. Dr. Tobias Blask researched digital transformation in financial institutions. The patterns were consistent and frustrating: banks invested billions in AI technology, hired data scientists, licensed platforms — and achieved almost nothing. The failure rate hovered around 70%, year after year.
                            </p>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                The academic literature was unambiguous: the primary determinant of transformation success wasn't technological capability. It was organizational readiness — how people thought about AI, how workflows adapted, how leadership committed to the change. Yet the industry continued to allocate 90% of its AI budget to technology and 10% to the organizational factors that actually determined success.
                            </p>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                In 2025, Prof. Dr. Blask stopped writing papers about the problem and founded SVRN ALPHA to fix it. We don't just sell software to banks; we function as an AI-native financial advisory service. We autonomously run the heavy-lifting quantitative and extraction workflows (the intelligence), enabling your team to focus exclusively on generating and acting on pure alpha (the judgment).
                            </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 32, color: "var(--text-primary)", margin: 0 }}>Leadership & Team</h3>

                            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                                {/* Founder */}
                                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQGKORxWDPLBvQ/profile-displayphoto-crop_800_800/B4DZwGC3Y7G4AI-/0/1769627941019?e=1773878400&v=beta&t=woTl7s448ZeU4Wu6-EJBd2dc3bgl5_Ina3qoCQ_v8BE" alt="Prof. Dr. Tobias Blask" style={{ width: 64, height: 64, borderRadius: "50%", border: "2px solid var(--border-subtle)", objectFit: "cover" }} />
                                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-primary)", fontWeight: 600 }}>Prof. Dr. Tobias Blask</div>
                                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", letterSpacing: 1 }}>Professor, Founder & Chairman</div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                            Academic researcher turned practitioner. Over a decade of published research on digital transformation in financial institutions, combined with hands-on implementation experience inside European investment banks.
                                        </p>
                                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                            The SVRN ALPHA framework was built from real transformation work — not from slide decks.
                                        </p>
                                    </div>
                                </div>

                                {/* Etienne David */}
                                <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 32, borderTop: "1px solid var(--border-subtle)" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                                        <div style={{ width: 64, height: 64, borderRadius: "50%", border: "2px solid var(--border-subtle)", background: "rgba(0,184,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontSize: 24, color: "var(--text-accent)" }}>ED</div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-primary)", fontWeight: 600 }}>Etienne David (PhD)</div>
                                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", letterSpacing: 1 }}>Senior Agentic AI Engineer</div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                            PhD in Agricultural Sciences (Deep Learning focus) with over 2,700 citations. Architect of agentic AI platforms, MCP servers, and LLM evaluation frameworks.
                                        </p>
                                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                            Brings deep expertise in Computer Vision and generative AI, focusing on deploying robust, production-ready AI systems in messy, real-world industrial environments.
                                        </p>
                                    </div>
                                </div>

                                {/* Sebastian Schmidt */}
                                <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 32, borderTop: "1px solid var(--border-subtle)" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                                        <div style={{ width: 64, height: 64, borderRadius: "50%", border: "2px solid var(--border-subtle)", background: "rgba(213,17,79,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontSize: 24, color: "var(--text-accent)" }}>SS</div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-primary)", fontWeight: 600 }}>Sebastian Schmidt</div>
                                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", letterSpacing: 1 }}>Senior AI Engineer & Lead Data Scientist</div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                            M.Sc. Business Analytics from Universität Hamburg. Over 4 years of experience delivering end-to-end Data Science projects, from Data Engineering pipelines to MLOps deployments.
                                        </p>
                                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                                            Former Lead Data Scientist at Otto Group. Deep expertise in Machine Learning, Deep Learning, and NLP, bridging the gap between advanced technical execution and business-driven value creation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 32, color: "var(--text-primary)", margin: 0 }}>Backed By</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 32, borderRadius: 12, background: "var(--card-bg)", border: "1px solid var(--border-light)" }}>
                                <div style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-primary)", fontWeight: 600 }}>MP Capital Markets</div>
                                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", letterSpacing: 1 }}>Münchmeier Petersen Capital Markets · Hamburg, Germany</div>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, marginTop: 8 }}>
                                    MPCM is SVRN ALPHA's founding investor and backer — and the first institution where the three-pillar framework was validated in practice. The approach works extremely well there, serving as both proof of concept and ongoing reference.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32 }}>
                        <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 32, color: "var(--text-primary)", margin: 0 }}>Principles</h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                            {[
                                { num: "01", title: "Education Before Technology", desc: "We never deploy technology until the organizational readiness is in place. The order is the methodology." },
                                { num: "02", title: "Encode Proprietary Judgment", desc: "We don't provide cookie-cutter templates. We encode your unique financial judgment and subjective expertise directly into the AI layer, compounding your institutional DNA." },
                                { num: "03", title: "Human-in-the-Loop Always", desc: "AI assists. Humans decide. Every critical juncture has a human checkpoint. This is architecture, not a feature toggle." },
                                { num: "04", title: "Evidence Over Claims", desc: "We show results, not adjectives. Capacity flip. Measurable alpha. Validated framework. If we can't measure it, we don't claim it." },
                                { num: "05", title: "Compliance by Design", desc: "EU AI Act, MiFID II, MAR, GDPR — built into the architecture from day one. Not retrofitted after deployment." }
                            ].map((p, i) => (
                                <div key={i} className="flex-col-mobile gap-mobile-md" style={{ display: "flex", gap: 16 }}>
                                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 20, color: "var(--text-accent)", fontWeight: 300, paddingTop: 2 }}>{p.num}</div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                        <div style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", fontWeight: 600 }}>{p.title}</div>
                                        <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5 }}>{p.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </Section>
        </>
    );
}
