import React from "react";

export default function DonationBoard ({ donations }) {
    return (
        <div className="bg-navygreen-100 w-full p-2 rounded-[20px] mt-4">
            <h2 className="font-semibold text-md text-center py-2">Donors</h2>
            <ul className="flex flex-col gap-y-2 max-h-48 overflow-y-auto ">
                {/* Display the donations */}
                {donations.length > 0 ? (
                    donations.map((donation, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center border-2 p-2 border-neutral rounded-pl bg-opacity-40"
                    >
                        <div className="flex items-center justify-start rounded-pl">
                        {/* Donor's avatar and name */}
                        <img
                            src={`/assets/avatars/${donation.avatar}`} // Use a default image if donor doesn't have an avatar
                            className="w-8 rounded-full"
                            alt="user avatar"
                        />
                        <p className="mx-2">{donation.username} donated</p>
                        </div>
                        <img className="w-6 h-6" src="/assets/leaves.png" alt="leaves" />
                    </div>
                    ))
                ) : (
                    <p className="text-center">No donations yet.</p>
                )}
            </ul>                        
        </div>
    );
}