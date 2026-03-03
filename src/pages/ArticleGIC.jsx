import React from 'react';
import { Section } from '../components/Section';

export default function ArticleGIC() {
    return (
        <article style={{ display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh" }}>

            {/* Header Section */}
            <Section bgCenter="--bg-prob" bgOuter="--bg-primary" type="radial" padding="160px 120px 80px">
                <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 32 }}>
                    <div style={{ display: "inline-block", alignSelf: "flex-start", border: "1px solid var(--border-light)", background: "rgba(213,17,79,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-accent)" }}>
                        // MACRO · SYSTEMIC_RISK
                    </div>
                    <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 56, color: "var(--text-primary)", letterSpacing: -1, margin: 0, lineHeight: 1.1 }}>
                        The 2028 Global Intelligence Crisis: When Friction Goes to Zero
                    </h1>
                    <div className="flex-wrap-mobile gap-mobile-md" style={{ display: "flex", gap: 24, alignItems: "center", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", padding: "16px 0" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>PUBLISHED</div>
                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>February 22, 2026</div>
                        </div>
                        <div style={{ width: 1, height: 32, background: "var(--border-subtle)" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>READ TIME</div>
                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>6 MIN</div>
                        </div>
                        <div style={{ width: 1, height: 32, background: "var(--border-subtle)" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>SOURCE INSPIRATION</div>
                            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>Citrini Research</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Content Section */}
            <Section background="var(--bg-primary)" padding="40px 120px 120px">
                <div style={{ maxWidth: 760, width: "100%", display: "flex", flexDirection: "column", gap: 40 }}>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                        For the entirety of modern economic history, human intelligence has been the scarce input. Capital is abundant. Natural resources are substitutable. Intelligence—the ability to analyze, decide, and coordinate—was the commodity that could not be replicated at scale.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        Every institution in the financial ecosystem, from the labor market to corporate valuation models to the $13 trillion residential mortgage market, was designed around the assumption that the premium on human intelligence would hold.
                        We are currently witnessing the rapid, disorderly unwind of that premium. A recent thought exercise by Citrini Research mapped the trajectory of the <em>2028 Global Intelligence Crisis</em>. The scenario is not science fiction; it is the mathematical consequence of a feedback loop with no natural brake.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        The Intelligence Displacement Spiral
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        The intuitive expectation for AI disruption was that falling aggregate demand would slow the AI buildout. Instead, it accelerated it. As AI agents rapidly approach the cognitive capability of mid-level white-collar professionals (at a fraction of the cost), corporations are engaging in aggressive OpEx substitution.
                    </p>

                    <div style={{ padding: 32, background: "rgba(213,17,79,0.03)", borderLeft: "4px solid rgb(213,17,79)", borderRadius: "0 12px 12px 0", margin: "16px 0" }}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>
                            "A company treating its workforce as an expense rather than a differentiating capability lays off workers, redeploys the savings into AI capability, which then allows them to lay off more workers. The macro result is the systemic impairment of the consumer economy."
                        </p>
                    </div>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        This is the <strong>Intelligence Displacement Spiral</strong>. Disruption is no longer sector-specific (e.g., software or consulting); it is a systemic unspooling of the white-collar engine that drives the global consumption economy. Entire business models built on "monetizing friction for humans"—habitual subscriptions, rote intermediation, and complex administrative navigation—simply disintegrate when facing machine intelligence optimized purely for price and efficiency.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        The Private Credit & Structural Debt Trap
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        The financial industry is uniquely exposed. Trillions in private credit sit on balance sheets supporting leveraged buyouts of SaaS and information service companies. These loans were underwritten on the assumption that "Annual Recurring Revenue" would remain recurring.
                    </p>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        As agentic AI collapses the barrier to entry for software—turning mid-market enterprise tools into week-long internal dev projects—that ARR evaporates. The largest private credit facilities are suddenly backed by revenues structurally eroded by an intelligence competitor that doesn't sleep. The traditional mechanism of private credit—holding illiquid assets to maturity against long-duration liabilities—bends and eventually breaks when the underlying asset itself is rendered obsolete by technological zero-friction.
                    </p>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--text-primary)", margin: "24px 0 0 0", letterSpacing: -0.5 }}>
                        Sovereignty: The Only Defensible Moat
                    </h2>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        If human intelligence (the rote processing of information) is no longer a moat, and software (the tools) can be replicated overnight by agents, what remains?
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 32, borderRadius: 12, border: "1px solid var(--border-light)", background: "var(--card-bg)", margin: "16px 0" }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgb(213,17,79)", marginTop: 8 }} />
                            <div>
                                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", margin: "0 0 8px 0" }}>Proprietary Knowledge</h4>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>The unique, unstructured, deep institutional context that your firm has gathered over decades. This is the new scarce asset.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgb(213,17,79)", marginTop: 8 }} />
                            <div>
                                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", margin: "0 0 8px 0" }}>Sovereign Infrastructure</h4>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>Vast proprietary knowledge is useless if fed into third-party vendor models where it becomes generalized. True sovereignty means owning the pipeline, the retrieval, and the logic.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgb(213,17,79)", marginTop: 8 }} />
                            <div>
                                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", margin: "0 0 8px 0" }}>The Capacity Flip</h4>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>The antidote to displacement. Elevating the human analyst from "Creator" (competing with machines on production) to "Curator" (wielding judgment, strategy, and advisory execution).</p>
                            </div>
                        </div>
                    </div>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                        The 2028 Intelligence Crisis is a trajectory, not a certainty. The financial institutions that survive the unwinding of the intelligence premium will be those that realize the paradigm has shifted. You cannot out-compute or out-produce the machines.
                    </p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--text-primary)", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                        You survive by sovereignly owning your proprietary data and deploying your human capital upward—into high-judgment, relationship-driven strategy—completing the Capacity Flip before the friction drops to zero.
                    </p>

                </div>
            </Section>
        </article>
    );
}
