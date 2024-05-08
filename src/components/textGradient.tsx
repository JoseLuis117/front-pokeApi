import React from "react";

interface TextGradientProps {
    text: string;
    htmlFor?: string;
    typeText: "label" | "p" | "h1" | "h2" | "span" | "h3" | "h4";
    position: string;
    fontSize: string; // Cambiar a string
}

const TextGradient: React.FC<TextGradientProps> = (Props) => {
    const classname = `text-${Props.fontSize} text-${Props.position} font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent`;

    switch (Props.typeText) {
        case "label":
            return <label htmlFor={Props.htmlFor} className={classname}>{Props.text}</label>;
        case "p":
            return <p className={classname}>{Props.text}</p>;
        case "h1":
            return <h1 className={classname}>{Props.text}</h1>;
        case "h2":
            return <h2 className={classname}>{Props.text}</h2>;
        case "h3":
            return <h3 className={classname}>{Props.text}</h3>;
        case "h4":
            return <h4 className={classname}>{Props.text}</h4>;
        case "span":
        default:
            return <span className={classname}>{Props.text}</span>;
    }
}

export default TextGradient;
