import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Nav = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Handle scroll for glass backdrop
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: "Whitepaper", path: "/whitepaper" },
        { name: "Reference Case", path: "/reference-case" },
        { name: "Research", path: "/research" },
        { name: "Press", path: "/press" },
        { name: "About", path: "/about" },
    ];

    return (
        <nav className={`nav-container ${scrolled ? 'nav-scrolled' : ''}`} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 60px",
            height: 72,
            position: "sticky",
            top: 0,
            zIndex: 100,
            transition: "all 0.3s ease",
            background: scrolled ? "rgba(10, 13, 20, 0.85)" : "var(--bg-nav)",
            borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        }}>
            {/* Logo */}
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", zIndex: 101 }} onClick={() => setMobileMenuOpen(false)}>
                <div style={{
                    width: 28, height: 28, borderRadius: 6,
                    background: "linear-gradient(180deg, var(--btn-primary-start) 0%, var(--btn-primary-end) 100%)",
                    boxShadow: "0 2px 8px rgba(213, 17, 79, 0.3)"
                }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 600, letterSpacing: 4, color: scrolled && theme === 'light' ? "#FFF" : "var(--text-primary)" }}>
                    svrn_alpha
                </span>
            </Link>

            {/* Desktop Links */}
            <div className="nav-links" style={{ display: "flex", gap: 40, alignItems: "center" }}>
                {navLinks.map((link, idx) => (
                    <Link key={idx} to={link.path} className="nav-link-item" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none", fontWeight: 500 }}>
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Desktop Actions */}
            <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
                    <label className="theme-switch" title="Toggle Theme">
                        <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
                        <span className="theme-slider"></span>
                    </label>
                </div>
                <a href="#login" className="nav-login" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none", fontWeight: 500 }}>Login</a>
                <div className="nav-btn-primary" style={{
                    padding: "10px 24px", borderRadius: 100, cursor: "pointer",
                    background: "linear-gradient(90deg, var(--btn-primary-start) 0%, var(--btn-primary-end) 100%)",
                    color: "#FFF", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
                    boxShadow: "0 4px 12px rgba(213, 17, 79, 0.25)",
                    transition: "all 0.3s ease"
                }}>
                    Get Started
                </div>
            </div>

            {/* Mobile Hamburger Icon */}
            <button
                className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    {navLinks.map((link, idx) => (
                        <Link key={idx} to={link.path} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}

                    <div style={{ height: 1, width: "100%", background: "var(--border-subtle)", margin: "16px 0" }} />

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-secondary)" }}>Theme</span>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <span style={{ fontSize: 14, color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
                            <label className="theme-switch" title="Toggle Theme">
                                <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
                                <span className="theme-slider"></span>
                            </label>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
                        <div style={{
                            padding: "16px 24px", borderRadius: 8, cursor: "pointer", textAlign: "center",
                            background: "linear-gradient(90deg, var(--btn-primary-start) 0%, var(--btn-primary-end) 100%)",
                            color: "#FFF", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500,
                        }} onClick={() => setMobileMenuOpen(false)}>
                            Get Started
                        </div>
                        <a href="#login" style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-primary)", textDecoration: "none", textAlign: "center", padding: "12px", border: "1px solid var(--border-subtle)", borderRadius: 8 }} onClick={() => setMobileMenuOpen(false)}>
                            Log In
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
