import React from "react";

const Button = ({text, color}) => {
    const btnTypeClass = color === "fill" ? "text-white bg-gray-100" : "text-gray-100 bg-transparent";
    return(
        <button type="button" className={`font-josefin-sans text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100 ${btnTypeClass}`}>{text}</button>
    );
}

export default Button;