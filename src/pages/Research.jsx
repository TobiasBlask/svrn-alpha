import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../components/Section';

const ArticleCard = ({ badge, title, date, desc, link, internalRoute }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => {
                if (internalRoute) {
                    navigate(internalRoute);
                } else if (link) {
                    window.open(link, '_blank');
                }
            }}
            style={{
                padding: 32, borderRadius: 12, border: "1px solid var(--border-subtle)",
                background: "var(--card-bg)", display: "flex", flexDirection: "column", gap: 16,
                cursor: (link || internalRoute) ? "pointer" : "default", transition: "all 0.2s ease"
            }}
        >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-accent)", fontWeight: 600 }}>{badge}</div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 24, color: "var(--text-primary)", margin: 0 }}>{title}</h3>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>{date}</div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
        </div>
    );
};

export default function Research() {
    return (
        <>
            <Section background="var(--bg-prob)" padding="120px 120px 80px">
                <div style={{ maxWidth: 800, width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ display: "inline-block", alignSelf: "flex-start", border: "1px solid var(--border-light)", background: "rgba(0,184,255,0.05)", padding: "6px 14px", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)" }}>
                        RESEARCH & INSIGHTS
                    </div>
                    <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 56, color: "var(--text-primary)", letterSpacing: -1, margin: 0 }}>
                        Intelligence for the Sovereign Era
                    </h1>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 20, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                        Frameworks, methodology, and evidence from the intersection of AI and investment banking.
                    </p>
                </div>
            </Section>

            <Section background="var(--bg-primary)" padding="60px 120px 120px">
                <div style={{ maxWidth: 1000, width: "100%", display: "flex", flexDirection: "column", gap: 32 }}>

                    <ArticleCard
                        badge="// MACRO · SYSTEMIC_RISK"
                        title="The 2028 Global Intelligence Crisis: When Friction Goes to Zero"
                        date="February 22, 2026 · 14 min read"
                        desc="A thought exercise from the future detailing the macroeconomic consequences of abundant machine intelligence: structured labor displacement, collapsing intermediate friction, and the unspooling of the intelligence premium."
                        internalRoute="/research/gic-2028"
                    />

                    <ArticleCard
                        badge="// M_01 · HUMAN_LAYER"
                        title="Why 70% of AI Initiatives in Banking Fail — and It's Not the Technology"
                        date="February 7, 2026 · 8 min read"
                        desc="The industry-wide failure rate for AI transformation in financial services sits around 70%. Here's what a decade of academic research teaches us: the cause is almost never the technology."
                    />

                    <ArticleCard
                        badge="// M_01 · CAPACITY_FLIP"
                        title="From Creator to Curator: The Capacity Flip That Changes Everything"
                        date="February 5, 2026 · 7 min read"
                        desc="The traditional analyst is a Creator. The AI-enabled analyst is a Curator. How redefining workflows inverts the analyst capacity ratio from 70% routine to 70% strategic."
                    />

                    <ArticleCard
                        badge="// M_03 · INFRA_LAYER"
                        title="Your Data Moat Is the Only Alpha Left — and Sovereignty Is How You Protect It"
                        date="February 3, 2026 · 7 min read"
                        desc="Models are interchangeable commodities. Your proprietary knowledge—protected by a model-agnostic architecture—is your only defensible moat."
                    />

                </div>
            </Section>
        </>
    );
}
