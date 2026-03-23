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
                        badge="// M_01 · THE_OS_LAYER"
                        title="Stop Prompting. Start Shipping the OS."
                        date="February 7, 2026 · 8 min read"
                        desc="70% of AI initiatives in investment banking fail because banks buy discrete tools. They need to ship a unified AI Operating System across their value chain."
                        internalRoute="/research/os"
                    />

                    <ArticleCard
                        badge="// M_02 · SOVEREIGN_ENABLEMENT"
                        title="Sovereign Enablement: Owning the Engine for Alpha"
                        date="February 5, 2026 · 7 min read"
                        desc="In the Age of AI, renting your intelligence layer from a single vendor is a strategic vulnerability. Sovereign Enablement means owning your AI Operating System."
                        internalRoute="/research/sovereign"
                    />

                    <ArticleCard
                        badge="// M_03 · CAPACITY_FLIP"
                        title="The Capacity Flip: Running on the AI OS"
                        date="February 3, 2026 · 7 min read"
                        desc="How shipping an AI OS inverts analyst workflow, driving the capacity flip from 70% routine to 70% strategic work."
                        internalRoute="/research/capacity"
                    />

                </div>
            </Section>
        </>
    );
}
