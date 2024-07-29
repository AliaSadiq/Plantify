import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Calendar from "../../components/dashboard-components/Calendar.js";
import PieChartGraph from "../../components/dashboard-components/Piechart.js";
import RequestCampaign from "../../components/dashboard-components/RequestCampaigns.js";
import Team from "../../components/dashboard-components/team.js";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Label } from 'recharts';
import CampaignChart from "../../components/dashboard-components/CampaignGraph.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const Onboard = () => {
  const { id } = useParams();
  const [socialGroup, setSocialGroup] = useState(null);
  console.log("socialGroup id: " + id);

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/socialgroup/${id}`);
        setSocialGroup(response.data);
        console.log("socialGroup: " + socialGroup)
      } catch (error) {
        console.error("Error fetching social group data:", error);
      }
    };

    fetchGroupData();
  }, [id]);

  const data = {
    labels: ["May 12", "", "May 13", "", "May 14", "", "May 15", "", "May 16", ""],
    datasets: [{
        data: [8, 9, 7.8, 7.9, 6, 7, 8, 6, 5, 7.8, 5, 8, 6]
    }],
    backgroundColor: 'transparent',
    borderColor: '#f26c6d',
    pointBorderColor: 'transparent',
    pointBorderWidth: 4,
    tension: 0.4
};

const options = {
    plugins: {
        legend: false
    },
    scales: {
        x:{
            grid:{
                display: false
            }
        },
        y:{
            min: 2,
            max: 10,
            ticks: {
                stepSize: 2,
                callback: (value) => value + 'K'
            },
            grid: {
                borderDash: [10]
            }
        }
    }
  }

  if (!socialGroup) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ml-64 py-4">
      <div className='flex justify-center w-auto bg-navygreen-100 rounded rounded-pl p-4 mr-4'>
        <h1 className="text-xl text-center font-bold">{socialGroup.name}'s Dashboard</h1>
      </div>
      {/* upper row with calendar and team */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row h-full p-4 bg-neutral rounded rounded-pl my-4 mr-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="p-4 col-span-2 w-full border border-2 border-gray-300 rounded rounded-pl ">
            <h3 className="text-md font-semibold mb-2">Campaign Chart</h3>
            <Line data={data} options={options}/>
            {/* <CampaignChart/> */}
          </div>
          <div className="p-4 w-full border border-2 border-gray-300 rounded-pl ">
            <h3 className="text-md font-semibold mb-2">Locations</h3>
            <PieChartGraph/>
          </div>
          <div className="p-4 w-full border border-2 border-gray-300 rounded-pl ">
            <h3 className="text-md font-semibold mb-2">Campaign Count</h3>
            {/* <CampaignChart/> */}
          </div>
          <div className="p-4 col-span-2 w-full border border-2 border-gray-300 rounded-pl ">
            <h3 className="text-md font-semibold mb-2">Campaign Requests</h3>
            <RequestCampaign/>
          </div>
        </div>
        <div className="flex flex-col h-fit gap-y-4 p-4 rounded-pl border border-2 border-gray-300">
          <div className="bg-navygreen-100 p-4 rounded-pl border border-2 border-gray-300">
            <p className="text-md font-semibold mb-2">Event Calendar</p>
            <Calendar/>
          </div>
          <div className="bg-navygreen-100 p-4 rounded-pl border border-2 border-gray-300">
            <p className="text-md font-semibold mb-2">Group's Team</p>
            <Team/>
          </div>
          <div className="bg-navygreen-100 p-4 rounded-pl border border-2 border-gray-300">
            <p className="text-md font-semibold mb-2">Task List</p>
          </div>
        </div>
      </div>
    </div>
    // <div className="w-full py-4">
    //   <div className='flex justify-center w-auto bg-navygreen-100 rounded rounded-pl p-4 mr-4'>
    //     <h1 className="text-xl text-center font-bold">{socialGroup.name}'s Dashboard</h1>
    //   </div>
    //   <div className="grid grid-cols-1 bg-pinky lg:grid-cols-4 gap-4 p-4">
    //     <div className="lg:col-span-3 bg-white rounded-lg p-4">
    //       <h3 className="text-md font-semibold mb-2">Campaign Chart</h3>
    //       <CampaignChart />
    //     </div>
    //     <div className="lg:col-span-1 bg-yolk rounded-lg p-4 flex flex-col gap-4">
    //       <div className="bg-ivory p-4 rounded-lg">
    //         <p className="text-md font-semibold mb-2">Event Calendar</p>
    //         <Calendar />
    //       </div>
    //       <div className="bg-ivory p-4 rounded-lg">
    //         <p className="text-md font-semibold mb-2">Group's Team</p>
    //         <Team />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-1 bg-yolk lg:grid-cols-4 gap-4 p-4">
    //     <div className="lg:col-span-2 bg-white rounded-lg p-4">
    //       <h3 className="text-md font-semibold mb-2">Locations</h3>
    //       <PieChartGraph />
    //     </div>
    //     <div className="lg:col-span-2 bg-white rounded-lg p-4">
    //       <h3 className="text-md font-semibold mb-2">Campaign Count</h3>
    //       13
    //     </div>
    //   </div>
    //   <div className="bg-white rounded-lg p-4 mt-4">
    //     <h3 className="text-md font-semibold mb-2">Campaign Requests</h3>
    //     <RequestCampaign />
    //   </div>
    // </div>
  );
};

export default Onboard;
