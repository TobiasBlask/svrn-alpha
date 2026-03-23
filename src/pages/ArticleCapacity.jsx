import React from 'react';
import { Section } from '../components/Section';

export default function ArticleCapacity() {
    return (
        <article style={{ display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh" }}>

            {/* Header Section */}
            <Section bgCenter="--bg-prob" bgOuter="--bg-primary" type="radial" padding="160px 120px 80px">
                <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 32 }}>
                    <div style={{ display: "inline-block", alignSelf: "flex-start", border: "1px solid var(--border-light)", background: "rgba(0,184,255,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-accent)" }}>
                        // M_03 · CAPACITY_FLIP
                    </div>
                    <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 56, color: "var(--text-primary)", letterSpacing: -1, margin: 0, lineHeight: 1.1 }}>
                        The Capacity Flip: Running on the AI OS
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
                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>February 3, 2026</div>
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
                        Watch a highly paid M&A analyst for a week. They are effectively acting as human compilers. They take unstructured data from a terminal, parse it, run it through an Excel model, and format it into a PowerPoint deck.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        Your Analysts Are Not Compilers
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        70% of their time is spent processing routine data. 30% is spent on the strategic insight that the client actually pays for. This is a profound misallocation of human capital.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        When SVRN ALPHA ships the AI Operating System into an institution, the goal is immediate resource reallocation. We call this the Capacity Flip.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        Running on the OS
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        When the AI OS is deployed across the value chain, the "human compiler" tasks are pushed down to the system layer.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 32, borderRadius: 12, border: "1px solid var(--border-light)", background: "var(--card-bg)", margin: "16px 0" }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--text-accent)", marginTop: 8 }} />
                            <div>
                                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", margin: "0 0 8px 0" }}>Data Ingestion</h4>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>The OS autonomously monitors the data terminals, scrapes the SEC filings, and structures the incoming data.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--text-accent)", marginTop: 8 }} />
                            <div>
                                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", margin: "0 0 8px 0" }}>Model Processing</h4>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>The OS feeds structured data into the bank's proprietary DCF modules.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--text-accent)", marginTop: 8 }} />
                            <div>
                                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", margin: "0 0 8px 0" }}>Formatting</h4>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>The OS generates the first draft of the pitch book, perfectly aligned to the strict house style.</p>
                            </div>
                        </div>
                    </div>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        The New Role of the Human
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        What happens to the analyst? They are finally permitted to do their actual job.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        The capacity ratio flips: 70% strategic, 30% routine (mostly review). The analyst reviews the OS output at designated Human-in-the-Loop architectural checkpoints. They apply the ultimate layer of nuance—the whispered rumors, the specific preferences of the CEO, the unwritten market dynamics.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        You don't achieve this by buying a licensed chat tool. You achieve this by embedding an AI Operating System so deeply into your value chain that it becomes the invisible engine powering the firm.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                        We don't just ship the software. We ship the capability to focus 100% of your human intellect on generating alpha.
                    </p>

                </div>
            </Section>
        </article>
    );
}
