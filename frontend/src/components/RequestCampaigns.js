// import axios from "axios";
// import { useEffect, useState } from "react";

// const RequestCampaign = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/requests"
//         ); // Replace "https://api.example.com/data" with your actual API endpoint
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex items-center  ml-18 justify-between mb-4">
//         <h1 className="text-2xl font-bold">Campaign Requests</h1>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border border-gray-300 rounded-full py-2 px-4 mr-4 focus:outline-none focus:border-blue-500"
//           // className="border p-2 px-20 mr-60"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
//       <table className="table-auto w-full">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Name</th>
//             <th className="px-4 py-2">Location</th>
//             <th className="px-4 py-2">Description</th>
//             <th className="px-4 py-2">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(data) &&
//             data
//               .filter((item) =>
//                 item.name.toLowerCase().includes(search.toLowerCase())
//               )
//               .map((item, index) => (
//                 <tr key={index}>
//                   <td className="border px-4 py-2">{item.name}</td>
//                   <td className="border px-4 py-2">{item.location}</td>
//                   <td className="border px-4 py-2">{item.description}</td>
//                   <td className="border px-4 py-2">{item.date}</td>
//                 </tr>
//               ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RequestCampaign;
import axios from "axios";
import { useEffect, useState } from "react";

const RequestCampaign = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/requests"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 overflow-auto" style={{ maxHeight: "250px" }}>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Campaign Requests</h1>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-full py-2 px-4 mr-4 focus:outline-none focus:border-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-ngreen">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2 ">Location</th>
            <th className="px-4 py-2 ">Description</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index) => (
                 <tr key={index} className={index % 2 === 0 ? "bg-gg" : ""}>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.location}</td>
                  <td className="border px-4 py-2">{item.description}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestCampaign
