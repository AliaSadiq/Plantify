
import React from "react";
import Calendar from "../../components/dashboard-components/Calendar.js";
import PieChartGraph from "../../components/dashboard-components/Piechart.js";
import CampaignGraph from "../../components/dashboard-components/CampaignGraph.js";
import RequestCampaign from "../../components/dashboard-components/RequestCampaigns.js";
import Team from "../../components/dashboard-components/team.js";
//import Sidebar from "../components/sidebar.js";
// import Layout from "../components/Layout.js";
const Onboard = () => {

  return (

    <div className="flex h-full">
      <div className="font-josefin-sans text-gary-100 ">
        <h1 className="text-2xl font-bold p-full pt-5 pl-2">Dashboard</h1>
        <div className="flex">
        <div className="perspective flex-1">
  <div className="box-border  h-56 top-5 bg-white rounded-md shadow  ml-2 relative">
    <div className="absolute top-0 left-10 text-lg font-bold">Campaign Graph</div>
    
    <CampaignGraph />
  </div>
  
</div>

<div className="perspective flex-1">
  <div className="box-border  h-56 top-5 bg-white rounded-md shadow ml-2 relative">
    <div className="absolute top-0 left-10 text-lg font-bold">Locations</div>
    <div className="h-80 w-80 mr-15 pt-10">
    <PieChartGraph />
    </div>
  </div>
</div>
</div>
<div className="box-border h-64 top-10 bg-white rounded-md shadow-lg ml-2 relative" >
<RequestCampaign/>
</div>
      <div className="absolute  text-black top-0 right-0 px-20 py-80">
       <div className="fixed right-0.5 top-2 shadow-md rounded-l-full h-16 w-48 bg-gg"> 
          <div className="absolute top-2 right-2 flex items-center">
             <div className=" flex flex-col right-2">
              <span className="text-sm font-medium">The Alia Sadiq</span>
              <span className="text-xs text-gray-500 text-center">
                Rawalpindi
              </span>
            </div>
            <img
              className="w-12 h-10 rounded-full object-cover ml-2 mr-5 "
              src="https://picsum.photos/id/237/100"
              alt="Profile Picture"
            />
           </div> 
        </div> 
        {/* <div> */}
        <div className="absolute right-3 h-48 top-20 flex items-center  ">
          <Calendar />
        </div>
        {/* <div> */}
        <div className="absolute right-1 top-1 flex items-center ">
        <Team/>
        </div>
      
{/* </div>  */}

 </div>  
 </div>



          </div> 
      

  );
};
export default Onboard;
