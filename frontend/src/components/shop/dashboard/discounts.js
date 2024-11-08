// src/pages/Discounts.js
import React from 'react';

const Discounts = () => {
  const discounts = [
    { code: "SPRING20", discount: "20%", expires: "2024-12-01", status: "Active" },
    { code: "SUMMER15", discount: "15%", expires: "2024-08-30", status: "Expired" },
    { code: "NEWYEAR10", discount: "10%", expires: "2025-01-15", status: "Upcoming" },
    // ...more discounts
  ];

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Discounts</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="text-left text-gray-700 uppercase border-b">
            <th className="px-4 py-2">Code</th>
            <th className="px-4 py-2">Discount</th>
            <th className="px-4 py-2">Expires</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {discounts.map((discount) => (
            <tr key={discount.code} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{discount.code}</td>
              <td className="px-4 py-2 border-b">{discount.discount}</td>
              <td className="px-4 py-2 border-b">{discount.expires}</td>
              <td className="px-4 py-2 border-b">
                <span className={`px-2 py-1 text-sm rounded-full ${discount.status === "Active" ? "bg-green-200 text-green-800" : discount.status === "Upcoming" ? "bg-blue-200 text-blue-800" : "bg-red-200 text-red-800"}`}>
                  {discount.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Discounts;
