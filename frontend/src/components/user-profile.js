import React from "react";
import useFetchUserLocalStorage from "../hooks/useFetchUserLocalStorage";

export default function UserProfile() {
  const user = useFetchUserLocalStorage();
  return (
    <div className="rounded-pl p-4 h-full">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Profile Picture */}
        <img
          src="/assets/avatars/avatar-1.png"
          alt="profile picture"
          className="border-2 border-gray-100 w-28 h-28 rounded-full mx-auto md:mx-0"
        />
        <div className="text-start mt-4 md:mt-0">
          {user ? (
            <h3 className="text-md font-semibold">{user.username}</h3>
          ) : (
            <p>Loading..</p>
          )}
          <div className="mt-4 text-sm flex gap-8 justify-center md:justify-start">
            <p>80 followers</p>
            <p>30 following</p>
            <div className="flex gap-2 items-center justify-center">
              <img src="assets/plants.png" alt="plant" className="w-6 h-6" />
              <p>19 plants</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-justify md:text-left">
            about me blah blah balh ablha lakhkjh kahkdhkhkhfk hksdh jkf hk s
            dhfk hsd ad kf h ks h f kh skdfhk sdhfkh sdkhfk sdhjk fh sk dh fh
          </p>
        </div>
      </div>
    </div>
  );
}
