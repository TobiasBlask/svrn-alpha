import React from 'react';
import { Section } from '../components/Section';

export default function ReferenceCasePage() {
    return (
        <>
            <Section bgCenter="--bg-social-top" bgOuter="--bg-social-bottom" type="linear" padding="120px 120px 80px">
                <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ display: "inline-block", alignSelf: "flex-start", border: "1px solid var(--border-light)", background: "rgba(0,200,255,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)" }}>
                        REFERENCE CASE
                    </div>
                    <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 56, color: "var(--text-primary)", letterSpacing: -1, margin: 0 }}>
                        MP Capital Markets:<br />AI-Native Service Validated
                    </h1>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                        How an AI-native financial service approach structurally shifted a European investment bank (backed by Münchmeier Petersen) from creating reports to curating alpha.
                    </p>
                </div>
            </Section>

            <Section background="var(--bg-primary)" padding="60px 120px 120px">
                <div style={{ maxWidth: 1000, width: "100%", display: "flex", flexDirection: "column", gap: 64 }}>

                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 32, color: "var(--text-primary)", margin: 0 }}>Context</h3>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                            MP Capital Markets (MPCM), a Hamburg-based investment bank backed by Münchmeier Petersen, is SVRN ALPHA's founding investor and backer. The SVRN ALPHA framework was developed and validated in close collaboration with MPCM — making them both the first reference and the institutional proof that the three-pillar approach works in practice.
                        </p>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                            MPCM operates a research team of experienced analysts whose deep sector expertise is their primary differentiator. Like most investment banks, their analysts were spending the majority of their working hours on routine tasks: data extraction from financial terminals, report formatting to house style, model updates with new quarterly figures, cross-referencing regulatory filings. Only a fraction of their capacity went toward the strategic analysis, client advisory, and insight generation that actually drives revenue.
                        </p>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                            Previous attempts to address this had followed the standard playbook: license an AI platform, hire a data scientist, build some automations. The tools worked. Adoption didn't. They were buying tools when they actually needed the outcome. By partnering with SVRN ALPHA, MPCM structurally outsourced the "intelligence" layer—the heavy extraction and formatting—so their analysts could focus entirely on "judgment."
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                        <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 32, color: "var(--text-primary)", margin: 0 }}>The Approach: Three Pillars, Deployed Sequentially</h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                            {[
                                { phase: "PHASE 1 : EDUCATION", desc: "Structured AI fluency workshops for all levels — from junior analysts to the board. Creator-to-Curator mindset sessions: redefining the analyst role around judgment and curation rather than manual construction. Change champion identification: internal advocates across departments became the catalyst for adoption. Leadership alignment: the Managing Director personally sponsored and attended every session." },
                                { phase: "PHASE 2 : PROCESS", desc: "Granular workflow mapping: every analyst task catalogued with time allocation data. Identification of the routine tasks consuming the majority of analyst capacity. Capacity reallocation blueprint: redesigned workflows that route routine tasks to AI pipelines while directing analyst time to strategic work. Human-in-the-Loop checkpoint design: defining exactly where human judgment is required in every workflow." },
                                { phase: "PHASE 3 : TECHNOLOGY", desc: "Sovereign infrastructure deployment: model-agnostic, EU-hosted, zero external data transfer. AI pipeline activation for data extraction, report formatting, and model population. Full compliance verification: EU AI Act, MiFID II, MAR, GDPR — compliant by architecture, not by retrofit. Audit trail implementation: every AI-assisted output fully traceable and explainable." }
                            ].map((p, i) => (
                                <div key={i} style={{ padding: 32, borderRadius: 12, background: "var(--card-bg)", border: "1px solid var(--border-light)", display: "flex", flexDirection: "column", gap: 16 }}>
                                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-accent)", fontWeight: 600 }}>{p.phase}</div>
                                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                        <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 32, color: "var(--text-primary)", margin: 0 }}>Validated Results</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 40, borderRadius: 12, background: "rgba(0,184,255,0.02)", border: "1px solid var(--border-subtle)" }}>
                            {[
                                "Capacity Flip achieved: The analyst capacity ratio inverted from majority-routine to majority-strategic — freeing experienced professionals to focus on the work that generates alpha",
                                "Measurable alpha generation: The reallocation of analyst time to strategic work has produced demonstrable outperformance",
                                "Zero data leakage: Sovereign infrastructure ensures complete data control",
                                "Zero vendor lock-in: Model-agnostic architecture allows switching between AI providers per use case",
                                "Full EU compliance: AI Act, MiFID II, MAR, GDPR — compliant by design",
                                "Human-in-the-Loop enforced: Every critical decision point includes a human checkpoint",
                                "Operational and compounding: The system is live, running, and the returns compound as institutional knowledge feeds back into the sovereign AI infrastructure"
                            ].map((res, i) => (
                                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                                    <div style={{ color: "var(--text-accent)", fontSize: 18, marginTop: 2 }}>✓</div>
                                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-primary)", lineHeight: 1.5 }}>
                                        <strong>{res.split(":")[0]}:</strong>{res.split(":")[1] || ""}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ padding: 48, borderRadius: 12, border: "1px solid var(--border-light)", background: "var(--card-bg)", display: "flex", flexDirection: "column", gap: 24 }}>
                        <p style={{ fontFamily: "var(--font-serif)", fontSize: 24, color: "var(--text-primary)", fontStyle: "italic", lineHeight: 1.4, margin: 0 }}>
                            "SVRN ALPHA didn't just give us tools. They provided an autonomous engine for our routine intelligence work. Our analysts think differently, our workflows are fundamentally restructured, and our proprietary judgment compounds in infrastructure we own. That's not a vendor relationship — it's an institutional advantage."
                        </p>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", letterSpacing: 1 }}>
                            — Ebrahim Attarzadeh, CEO Münchmeyer Petersen Capital Markets
                        </div>
                    </div>

                </div>
            </Section>
        </>
    );
}
