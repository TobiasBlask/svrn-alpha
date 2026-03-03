import React from 'react';
import { Section } from '../components/Section';

export default function Press() {
    return (
        <>
            <Section background="var(--bg-prob)" padding="120px 120px 80px">
                <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ display: "inline-block", alignSelf: "flex-start", border: "1px solid var(--border-light)", background: "rgba(0,184,255,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)" }}>
                        PRESS RELEASE
                    </div>
                    <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 56, color: "var(--text-primary)", letterSpacing: -1, margin: 0 }}>
                        SVRN ALPHA Launches Sovereign AI Enablement Platform for European Investment Banking
                    </h1>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                        Hamburg-based firm introduces three-pillar framework backed by academic research and validated deployment
                    </p>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", letterSpacing: 1, marginTop: 16 }}>
                        HAMBURG, GERMANY — January 15, 2026
                    </div>
                </div>
            </Section>

            <Section background="var(--bg-primary)" padding="60px 120px 120px">
                <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 32 }}>

                    <div style={{ display: "flex", flexDirection: "column", gap: 24, fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        <p>
                            <strong style={{ color: "var(--text-primary)" }}>SVRN ALPHA</strong>, a sovereign AI enablement company for investment banking, today announced its launch with a mission to transform how European financial institutions adopt and deploy artificial intelligence. Backed by MP Capital Markets (Münchmeier Petersen Capital Markets) and led by Prof. Dr. Tobias Blask — Professor, Founder & Chairman — the company offers a research-grounded framework that addresses the organizational, procedural, and technical dimensions of AI transformation.
                        </p>
                        <p>
                            The company's approach is built on the Three-Pillar Model, a sequential framework developed through academic research and validated through deployment at a European investment bank. The model addresses what SVRN ALPHA identifies as the primary cause of AI initiative failure: the industry's tendency to invest heavily in technology while underinvesting in the organizational change required for adoption.
                        </p>
                        <blockquote style={{ borderLeft: "3px solid var(--text-accent)", paddingLeft: 24, margin: "16px 0", fontStyle: "italic", fontSize: 20, color: "var(--text-primary)" }}>
                            "Approximately 70% of AI transformation success depends on organizational factors — how people think about AI, how workflows restructure, how leadership commits to the change," said Prof. Dr. Tobias Blask, Professor, Founder & Chairman of SVRN ALPHA. "Yet most banks allocate 90% of their AI budget to technology. We built SVRN ALPHA to correct that inversion."
                        </blockquote>
                        <p>
                            SVRN ALPHA's framework has been validated in practice at MP Capital Markets, producing measurable results: a capacity reallocation from majority-routine work to majority-strategic analysis among research analysts, demonstrable alpha generation above benchmark, and full compliance with EU AI Act, MiFID II, MAR, and GDPR requirements.
                        </p>
                        <p>
                            Central to the company's offering is its model-agnostic, sovereign architecture. Rather than locking institutions into a single AI provider, SVRN ALPHA builds infrastructure that evaluates per use case — whether that's a US closed-source model, a Chinese open-source model on the bank's own hardware, or a European model for regulatory-sensitive workflows. The architecture supports zero vendor lock-in, full audit trails, and Human-in-the-Loop checkpoints at every critical decision point.
                        </p>
                        <blockquote style={{ borderLeft: "3px solid var(--text-accent)", paddingLeft: 24, margin: "16px 0", fontStyle: "italic", fontSize: 20, color: "var(--text-primary)" }}>
                            "The technology landscape changes every six months — new models, new regulations, new geopolitical realities," Prof. Dr. Blask continued. "Banks need an architecture that adapts, not one that locks them in. Sovereignty means the institution decides: which model, which infrastructure, which architecture. Always flexible. Always independent. That's the only future-proof strategy."
                        </blockquote>
                        <p>
                            The company is headquartered in Hamburg, Germany, and serves investment banks across the DACH region, Nordics, and United Kingdom.
                        </p>
                    </div>

                    <div style={{ height: 1, width: "100%", background: "var(--border-subtle)", margin: "32px 0" }} />

                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", margin: 0 }}>About SVRN ALPHA</h3>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                            SVRN ALPHA is a sovereign AI enablement company for investment banking, headquartered in Hamburg, Germany. Founded by Prof. Dr. Tobias Blask (Professor, Founder & Chairman) and backed by MP Capital Markets, SVRN ALPHA transforms how financial institutions adopt AI through the Three-Pillar Model — a research-grounded framework addressing Education, Process, and Technology in that sequence. The company deploys model-agnostic, sovereign infrastructure that gives institutions full independence over their AI stack — evaluating US, Chinese, and European models per use case with zero vendor lock-in and Human-in-the-Loop architecture. Learn more at svrn-alpha.ai.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
                        <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-primary)", margin: 0 }}>Media Contact</h3>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                            <strong>SVRN ALPHA Communications</strong><br />
                            press@svrn-alpha.ai<br />
                            Hamburg, Germany<br />
                            svrn-alpha.ai
                        </div>
                    </div>

                </div>
            </Section>
        </>
    );
}
