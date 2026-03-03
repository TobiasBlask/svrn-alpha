import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export default function WhitepaperPage() {
    return (
        <>
            <Section background="var(--bg-prob)" padding="120px 120px 80px">
                <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
                    <div style={{ display: "inline-block", border: "1px solid var(--border-light)", background: "rgba(0,184,255,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)" }}>
                        FOUNDING PAPER
                    </div>
                    <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 56, color: "var(--text-primary)", letterSpacing: -1, margin: 0, textAlign: "center" }}>
                        The Three-Pillar Model:<br />A Framework for Sovereign AI
                    </h1>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", letterSpacing: 1, margin: 0 }}>
                        Prof. Dr. Tobias Blask · SVRN ALPHA Research · January 2026
                    </p>
                </div>
            </Section>

            <Section background="var(--bg-primary)" padding="0px 120px 120px">
                <div className="flex-col-mobile gap-mobile-lg" style={{ maxWidth: 900, width: "100%", display: "flex", gap: 64 }}>

                    <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: 32 }}>
                        <h2 style={{ fontFamily: "var(--font-sans)", fontSize: 32, color: "var(--text-primary)", margin: 0 }}>Abstract</h2>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                            Artificial intelligence adoption in European investment banking has followed a technology-first pattern that produces consistently poor outcomes. Analysis of over fifty transformation initiatives across DACH, Nordic, and UK institutions reveals a critical insight: organizational factors account for approximately 70% of implementation success, while technology accounts for 30%. Yet budget allocation typically inverts this ratio.
                        </p>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                            This paper introduces the Three-Pillar Model — a sequential framework that addresses Education, Process, and Technology in that order. The model is grounded in the Creator-to-Curator hypothesis: that the primary value shift in AI-enabled banking is not automation of tasks but the cognitive reorientation of professionals from content creation to insight curation.
                        </p>

                        <div style={{ height: 1, width: "100%", background: "var(--border-subtle)", margin: "16px 0" }} />

                        <h2 style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", margin: 0 }}>Table of Contents</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text-muted)" }}>
                            <div>1. Introduction: The AI Transformation Paradox — p. 3</div>
                            <div>2. Literature Review: Why Transformation Fails — p. 6</div>
                            <div>3. The Three-Pillar Model — p. 12</div>
                            <div style={{ paddingLeft: 16 }}>3.1 Pillar 1: Education and the Creator-to-Curator Shift — p. 14</div>
                            <div style={{ paddingLeft: 16 }}>3.2 Pillar 2: Process Redesign and the Capacity Flip — p. 19</div>
                            <div style={{ paddingLeft: 16 }}>3.3 Pillar 3: Sovereign Technology Architecture — p. 24</div>
                            <div>4. Data Sovereignty as Competitive Moat — p. 29</div>
                            <div>5. Human-in-the-Loop: Architecture, Not Feature — p. 33</div>
                            <div>6. Case Application: European Investment Bank — p. 36</div>
                            <div>7. Implications and Future Research — p. 41</div>
                        </div>

                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 24, padding: 32, borderRadius: 12, background: "var(--card-bg)", border: "1px solid var(--border-light)" }}>
                            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-primary)", margin: 0 }}>Download</h3>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                                44 pages of research, methodology, and evidence. The intellectual foundation behind the SVRN ALPHA framework.
                            </p>
                            <Button variant="primary">Download PDF</Button>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", marginTop: 8 }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Format</span><span>PDF</span></div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Length</span><span>44 pages</span></div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Access</span><span>No Reg. Required</span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </>
    );
}
