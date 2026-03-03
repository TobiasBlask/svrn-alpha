import React from 'react';

export const Button = ({ children, variant = "primary", onClick, ...props }) => {
    const baseStyle = {
        padding: "16px 36px",
        borderRadius: 8,
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 500,
        textDecoration: "none",
        transition: "all 0.2s ease",
    };

    const styles = {
        primary: {
            ...baseStyle,
            background: "linear-gradient(90deg, var(--btn-primary-start) 0%, var(--btn-primary-end) 100%)",
            color: "#FFF",
        },
        secondary: {
            ...baseStyle,
            background: "var(--btn-secondary-bg)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-light)",
        }
    };

    return (
        <button style={{ ...styles[variant] }} onClick={onClick} {...props}>
            {children}
        </button>
    );
};
