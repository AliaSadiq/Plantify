 import React from "react";
 import { AiOutlineAppstoreAdd } from "react-icons/ai";
 import { AiOutlinePlusCircle } from "react-icons/ai";
 import { FiSettings } from "react-icons/fi";
 import { BsPeople } from "react-icons/bs";
 import { FaEnvelope } from "react-icons/fa";
 import { IoMdPerson } from "react-icons/io";
 import { Link } from "react-router-dom";
 const Sidebar = () => {
 
   return (
     <div className="fixed bg-greent w-10 h-80 flex flex-col rounded-r-full justify-between items-center top-40 bottom-30 overflow-auto">
       <ul className="mt-8">
         <li className="mb-4">
           <Link className="nav-link" to="/onboard"  >
           <AiOutlineAppstoreAdd className="h-8 w-8 text-gray-400 hover:text-ngreen" />
           </Link>
         </li>
         <li className="mb-4 ml-1">
           <Link className="nav-link" to="/inbox">
             <FaEnvelope className="h-7 w-6 text-gray-400 hover:text-ngreen" />
           </Link>
         </li>
         <li className="mb-4 mr-1">
           <Link className="nav-link" to="/create" >
             <AiOutlinePlusCircle className="h-8 w-8 text-gray-400 hover:text-ngreen" />
           </Link>
         </li>
         <li className="mb-4 ml-0.5">
           <Link className="nav-link" to="/team" >
             <BsPeople className="h-7 w-7 text-gray-400 hover:text-ngreen" />
           </Link>
         </li>
         <li className="mb-4">
           <Link className="nav-link" to="/setting" >
             <FiSettings className="h-7 w-8 text-gray-400 hover:text-ngreen" />
           </Link>
         </li>
         <li className="mb-4">
           <Link className="nav-link" to="/profile" >
             <IoMdPerson className="h-8 w-8 text-gray-400 hover:text-ngreen" />
           </Link>
         </li>
       </ul>
     </div>
   );
 };

 export default Sidebar;
