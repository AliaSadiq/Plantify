// import React from "react";

// const Button = ({ text, className, type, onClick, bgColor }) => {
//     return (
//         <button
//             onClick={onClick}
//             type={type}
//             className={`text-sm font-semibold px-4 rounded hover:rounded-full border-2 border-gray-100 ${className}`}
//             style={{ backgroundColor: bgColor }} // Set the background color dynamically
//         >
//             {text}
//         </button>
//     );
// };

// export default Button;
import React from "react";

const Button = ({text, className, type, onClick}) => {
    return(
        <button 
            onClick={onClick} 
            type={type} 
            className={`text-sm font-semibold px-4 rounded hover:rounded-full border-2 border-gray-100 ${className}`}

        >
            {text}
        </button>
    );
}

export default Button;