import React from "react";

export default function Tabs ({ tabs, activeTab, setActiveTab }) {
    return(
        <div className="flex justify-center">
            <div className="text-sm flex items-center p-4 gap-2 justify-center mt-4 bg-neutral max-w-fit rounded-pl">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        className={`max-w-fit p-4 rounded-pl hover:bg-navygreen-200 ${activeTab === tab.value ? 'bg-navygreen-200' : 'bg-neutral'} flex-1`}
                        onClick={() => setActiveTab(tab.value)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>       
    );
}