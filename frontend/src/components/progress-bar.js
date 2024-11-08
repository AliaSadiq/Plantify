import React from 'react';

export default function ProgressBar ({ collected, target, className }) {
    const percentage = (collected / target) * 100;
    return(
        <div className={`bg-palegreen-200 h-4 rounded-full ${className}`}>
            <div
                className="bg-navygreen-300 h-full rounded-full "
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
}