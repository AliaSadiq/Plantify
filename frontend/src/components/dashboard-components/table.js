// ReusableTable.js
import React from "react";

const Table = ({ columns, data, fieldMappings }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-navygreen-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((col, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {col}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">accept</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">reject</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  {row[fieldMappings[col]]}
                </td>
              ))}
              <td className="px-6 py-4 text-right">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </button>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
