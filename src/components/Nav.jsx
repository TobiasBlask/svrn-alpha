import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = ({ theme, toggleTheme }) => (
    <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 60px",
        height: 72,
        background: "var(--bg-nav)",
        borderBottom: "1px solid var(--border-subtle)",
        position: "sticky",
        top: 0,
        zIndex: 100
    }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: "linear-gradient(180deg, var(--btn-primary-start) 0%, var(--btn-primary-end) 100%)"
            }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 600, letterSpacing: 4, color: "var(--text-primary)" }}>
                svrn_alpha
            </span>
        </Link>

        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
            <Link to="/whitepaper" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Whitepaper</Link>
            <Link to="/reference-case" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Reference Case</Link>
            <Link to="/research" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Research</Link>
            <Link to="/press" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>Press</Link>
            <Link to="/about" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>About</Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
                onClick={toggleTheme}
                style={{ background: "transparent", color: "var(--text-primary)", fontSize: 20, cursor: "pointer", border: "1px solid var(--border-subtle)", padding: "4px 8px", borderRadius: 4 }}
                title="Toggle Theme"
            >
                {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <a href="#login" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)" }}>Login</a>
            <div style={{
                padding: "10px 24px", borderRadius: 6, cursor: "pointer",
                background: "linear-gradient(90deg, var(--btn-primary-start) 0%, var(--btn-primary-end) 100%)",
                color: "#FFF", fontFamily: "var(--font-sans)", fontSize: 14
            }}>
                Get Started
            </div>
        </div>
    </nav>
);
