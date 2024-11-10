import React from "react";
import Button from "../button";

export default function CampaignReportModal({ report, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-josefin-sans">
            <div className="relative rounded-pl bg-neutral p-8 shadow-lg w-full max-w-[600px] max-h-[700px] overflow-y-auto md:p-4">
                <button 
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 rounded-md hover:bg-navygreen-100"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="w-full">
                    {report.campaign ? ( 
                        <img src={`assets/${report.campaign.image}`} alt="campaign image" className="w-full h-40 object-cover rounded-pl" /> 
                    ) : ( <span>No image available</span> 
                    )} 
                </div>
                <p className="mt-6 text-mini font-semibold">Campaign Name:</p>
                <p>{report.campaign ? report.campaign.name : "Unknown Campaign"}</p>
                <h3 className="mt-2 text-mini font-semibold">Reason to Report: </h3>
                <p>{report.reason}</p>
                <div className="flex gap-2 justify-end mt-4 w-full">
                    <Button 
                        type="submit"
                        text="Suspend Campaign"
                        className="py-2 bg-gray-100 text-white"
                    />
                    <Button 
                        type="button"
                        text="Cancel"
                        onClick={onClose}
                        className="py-2"
                    />
                </div>
            </div>
        </div>
    );
}
