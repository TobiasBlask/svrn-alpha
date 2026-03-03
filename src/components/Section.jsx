import React from 'react';

export const Section = ({ children, bgCenter, bgOuter, background, padding = "100px 120px", type = "radial", ...props }) => {
    let bgStyle = background;
    if (!bgStyle) {
        if (type === "radial") {
            bgStyle = `radial-gradient(circle at center, var(${bgCenter}) 0%, var(${bgOuter}) 80%)`;
        } else if (type === "linear") {
            bgStyle = `linear-gradient(180deg, var(${bgCenter}) 0%, var(${bgOuter}) 100%)`;
        } else {
            bgStyle = `var(${bgCenter})`;
        }
    }

    return (
        <section style={{
            background: bgStyle,
            padding: padding,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            ...props
        }}>
            {children}
        </section>
    );
};
