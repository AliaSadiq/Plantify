import React from "react";
import useFetchUserLocalStorage from "../hooks/useFetchUserLocalStorage";


export default function UserProfile () {
  const user = useFetchUserLocalStorage();
  return (
    <div className="rounded-pl p-4 h-full">
      <div className="flex gap-4">
        <img src="/assets/avatars/avatar-1.png" alt="profile picture" className="border-2 border-gray-100 w-40 h-40 rounded-full"/>
        <div className="text-start">
          {user? (
            <h3 className="text-md font-semibold">{user.username}</h3>
          ):(
            <p>Loading..</p>
          )}
          <div className="mt-4 text-sm flex gap-8">
            <p>80 followers</p>
            <p>30 following</p>
            <div className="flex gap-2 items-center justify-center">
              <img src="assets/plants.png" alt="plant"  className="w-6 h-6"/>
              <p>19 plants</p>
            </div>
          </div>
          <p className="mt-4 text-sm mr-16">about me blah blah balh ablha lakhkjh kahkdhkhkhfk hksdh jkf hk s dhfk hsd
            ad kf h ks h f kh skdfhk sdhfkh sdkhfk sdhjk fh sk dh fh</p>
        </div>
      </div>
    </div>
    // <div>
    //   {user ? (
    //     <div className="relative flex flex-col items-center justify-center rounded-pl p-4 w-full h-full">
          
    //       <img src={`/assets/avatars/${user.avatar}`} alt="profile picture" className="w-24 h-24 rounded-full border-2"/>
    //       <p className="mt-2 text-md font-bold">{user.username}</p>
    //       <div className="mt-4 text-sm font-semibold flex gap-8">
    //         <p>80 followers</p>
    //         <p>30 following</p>
    //         <div className="flex gap-2 items-center justify-center">
    //           <img src="assets/plants.png" alt="plant"  className="w-6 h-6"/>
    //           <p>19 plants</p>
    //         </div>
    //       </div>
    //       <p className="text-sm mt-4 mx-20">About me bleh bleh bleh blhe lhsdl lehl belh lbelhe leb lelbeleb le leleds uzdakhkasd aksd kajd hkadhkaj dkh ksjdh jkahjkd hajk</p>
    //     </div>
    //   ) : (
    //     <p> Loading... </p>
    //   )}
    // </div>
  );
}