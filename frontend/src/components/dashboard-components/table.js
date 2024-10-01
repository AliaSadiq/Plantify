import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Table = ({ columns, data, fieldMappings, setData }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = (campaignId) => {
    navigate(`/social-dashboard/${id}/editCampaign/${campaignId}`);
  };

  const handleRowClick = (campaignId) => {
    navigate(`/social-dashboard/${id}/Insights/${campaignId}`);
  };

  const mapStatus = (status) => {
    return status === true ? "Inactive" : "Active"; // Adjust as needed
  };

  const handleDelete = async (campaignId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this campaign?"
    );
    if (confirmDelete) {
      try {
        const apiUrl = process.env.REACT_APP_API_BASE_URL;
        await axios.delete(`${apiUrl}/api/campaigns/${campaignId}`);
        setData((prevData) =>
          prevData.filter((campaign) => campaign._id !== campaignId)
        );
      } catch (error) {
        console.error("Error deleting campaign:", error);
      }
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-navygreen-300 dark:bg-gray-700 dark:text-black">
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
              onClick={() => handleRowClick(row._id)}  // Navigate on row click
              className={`cursor-pointer border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${
                rowIndex % 2 === 0 ? "bg-transparent" : "bg-navygreen-100"
              }`}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  {col === "Status"
                    ? mapStatus(row[fieldMappings[col]])
                    : row[fieldMappings[col]]}
                </td>
              ))}
              <td className="px-6 py-4 text-right">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click when clicking edit
                    handleEdit(row._id);
                  }}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click when clicking delete
                    handleDelete(row._id);
                  }}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
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
