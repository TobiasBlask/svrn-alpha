import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
    <footer className="footer-container" style={{ background: "var(--bg-footer)", padding: "60px 120px 40px", display: "flex", flexDirection: "column", gap: 48 }}>
        <div className="footer-top" style={{ display: "flex", justifyContent: "space-between", gap: 80 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 280 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 600, letterSpacing: 2, color: "var(--text-primary)" }}>svrn_alpha</div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>
                    Sovereign AI enablement and organizational transformation for investment banking.
                </p>
            </div>
            <div className="footer-links" style={{ display: "flex", gap: 60 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)", fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>PLATFORM</div>
                    <Link to="/whitepaper" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>Architecture</Link>
                    <Link to="/whitepaper" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>Compliance</Link>
                    <Link to="/reference-case" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>Reference Case</Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)", fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>COMPANY</div>
                    <Link to="/about" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>About</Link>
                    <Link to="/research" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>Research</Link>
                    <Link to="/press" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>Press</Link>
                </div>
            </div>
        </div>

        <div style={{ width: "100%", height: 1, background: "var(--border-subtle)" }} />

        <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)" }}>
                © 2026 svrn_alpha Ltd. All rights reserved. Regulated where applicable.
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: 1 }}>
                London · Frankfurt · Amsterdam · Paris
            </div>
        </div>
    </footer>
);
