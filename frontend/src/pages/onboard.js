
import React from "react";
//import Reforestaion from "../assest/Reforestation-bro.png"
import Calendar from "../components/Calendar";
// import Climatechange from "../assest/Climate change-bro.png";
// import KPI from "../components/metrics";
// import TriangleBarChart from "../components/graphs";
import Graph from "../components/ImpactGraph";
//import FilterableCampaigns from '../components/Campaignfilters';
const Onboard = () => {

  return (
    <div className="flex h-full">
      <div className="font-josefin-sans text-gary-100 ">
        <h1 className="text-2xl font-bold py-10 pl-14 ">Dashboard</h1>
        <div> <Graph/></div>
        
      <div className="absolute bg-white text-black top-0 right-0 px-40 py-80">
       <div className="fixed right-0.5 top-5 shadow-md rounded-l-full h-16 w-48 bg-gg"> 
          <div className="absolute top-2 right-2 flex items-center">
             <div className=" flex flex-col right-2">
              <span className="text-sm font-medium">The Alia Sadiq</span>
              <span className="text-xs text-gray-500 text-center">
                Rawalpindi
              </span>
            </div>
            <img
              className="w-12 h-12 rounded-full object-cover ml-2 mr-5 "
              src="https://picsum.photos/id/237/100"
              alt="Profile Picture"
            />
           </div> 
        </div> 
      
        <div className="absolute right-3 top-24 flex items-center">
          <Calendar />
        </div>
        <div className="absolute right-3 top-80 p-4 bg-white rounded-md h-auto w-72 shadow-md ">
        <h2 className="text-xs font-bold text-black mb-4">Team</h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-2">
        
    <div className="flex flex-col items-center">
        <img className="w-12 h-12 rounded-full object-cover" src="https://picsum.photos/id/237/100" alt="Profile Picture" />
        <span className="text-sm font-medium mt-2">Alia Sadiq</span>
    </div>
    <div className="flex flex-col items-center">
        <img className="w-12 h-12 rounded-full object-cover" src="https://picsum.photos/id/237/100" alt="Profile Picture" />
        <span className="text-sm font-medium mt-2">Alia Sadiq</span>
    </div>
    <div className="flex flex-col items-center">
        <img className="w-12 h-12 rounded-full object-cover" src="https://picsum.photos/id/237/100" alt="Profile Picture" />
        <span className="text-sm font-medium mt-2">Alia Sadiq</span>
    </div>
    <div className="flex flex-col items-center">
        <img className="w-12 h-12 rounded-full object-cover" src="https://picsum.photos/id/237/100" alt="Profile Picture" />
        <span className="text-sm font-medium mt-2">Alia Sadiq</span>
    </div>
    <div className="flex flex-col items-center">
        <img className="w-12 h-12 rounded-full object-cover" src="https://picsum.photos/id/237/100" alt="Profile Picture" />
        <span className="text-sm font-medium mt-2">Alia Sadiq</span>
    </div>
    <div className="flex flex-col items-center">
        <img className="w-12 h-12 rounded-full object-cover" src="https://picsum.photos/id/237/100" alt="Profile Picture" />
        <span className="text-sm font-medium mt-2">Alia Sadiq</span>
    </div>
    <div className="flex flex-col items-center">
        <img className="w-12 h-12 rounded-full object-cover" src="https://picsum.photos/id/237/100" alt="Profile Picture" />
        <span className="text-sm font-medium mt-2">Alia Sadiq</span>
    </div>
    <div className="flex flex-col items-center">
        <img className="w-12 h-12 rounded-full object-cover" src="https://picsum.photos/id/237/100" alt="Profile Picture" />
        <span className="text-sm font-medium mt-2">Alia Sadiq</span>
    </div>
    <div className="flex flex-col items-center">
        <img className="w-12 h-12 rounded-full object-cover" src="https://picsum.photos/id/237/100" alt="Profile Picture" />
        <span className="text-sm font-medium mt-2">Alia Sadiq</span>
    </div>
    {/* <!-- Add two more similar div elements for the additional rows and columns --> */}
</div> 

 </div>  
 </div>



            </div> 
      </div>
   
  );
};
export default Onboard;
