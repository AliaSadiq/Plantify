import React from 'react';

export default function ProgressBar ({width, className}) {
    return(
        <div className={`bg-palegreen-200 h-4 rounded-full ${className}`}>
            <div
                className="bg-navygreen-300 h-full rounded-full "
                style={{ width: `${width}%` }}
            ></div>
        </div>
    );
}