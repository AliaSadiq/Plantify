import React from "react";

const Inbox = () => {
  return (
    <div className="h-screen flex h-full">
      <div className="font-josefin-sans text-gray-100 ">
        <h1 className="text-2xl font-bold py-10 px-40 ">Inbox</h1>
        <div className="relative bg-gray-900 rounded-lg top-30 left-20 px-96 py-20">
          <h1 className="absolute text-lg left-10 top-10 font-bold text-black">
            Welcome, Alia!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
