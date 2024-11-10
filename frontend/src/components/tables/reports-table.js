import React, { useState } from "react";
import formatDate from "../../functions/format-date";
import CampaignReportModal from "../modals/camaign-report-modal";
import useDelete from "../../hooks/useDelete";

export default function ReportsTable({ reports, setReports }) {
    const [selectedReport, setSelectedReport] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Initialize useDelete with the base URL
    const { deleteItem, isDeleting } = useDelete("http://localhost:5000/api/campaign-report");

    // Open modal and set selected report
    const handleOpenModal = (report) => {
        setSelectedReport(report);
        setIsModalOpen(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedReport(null);
    };

    // Delete report
    const handleDelete = async (id) => {
        deleteItem(id, () => {
            // Remove the deleted report from the list
            setReports((prevReports) => prevReports.filter((report) => report._id !== id));
        });
    };

    return (
        <div className="rounded-pl bg-navygreen-100 overflow-x-auto shadow-md">
            <table className="w-full text-gray-100 dark:text-gray-400 text-sm bg-navygreen-100 dark:bg-forest-100 p-4 text-left rounded-pl">
                <thead className="bg-navygreen-200 dark:bg-forest-200">
                    <tr>
                        <th className="p-4 rounded-tl-pl">Campaign Image</th>
                        <th>Campaign Name</th>
                        <th>Social Group Name</th>
                        <th>Reason to Report</th>
                        <th>Date</th>
                        <th className="rounded-tr-pl">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr 
                            key={report._id} 
                            className="border-b-[0.5px] dark:border-gray-400 border-gray-100 hover:bg-navygreen-100 hover:bg-opacity-50 hover:text-gray-100"
                        >
                            <td className="px-4 py-2"> 
                                {report.campaign ? ( 
                                    <img src={`assets/${report.campaign.image}`} alt="campaign image" className="w-14 h-14 object-cover rounded-full" /> 
                                ) : ( 
                                    <span>No image available</span> 
                                )} 
                            </td> 
                            <td className="cursor-pointer" onClick={() => handleOpenModal(report)}>{report.campaign ? report.campaign.name : "Unknown Campaign"}</td>
                            <td>{report.socialGroupName}</td>
                            <td>{report.reason}</td>
                            <td>{formatDate(report.createdAt)}</td>
                            <td>
                                <button 
                                    onClick={() => handleDelete(report._id)} 
                                    disabled={isDeleting}
                                    className="text-gray-100 dark:text-navygreen-100 hover:text-red-500"
                                >
                                    <svg   
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="size-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && selectedReport && (
                <CampaignReportModal
                    onClose={handleCloseModal}
                    report={selectedReport} 
                />
            )}
        </div>
    );
}
