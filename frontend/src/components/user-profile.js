import React from "react";
import useProfile from "../hooks/useSocialmediaProfile";

export default function UserProfile ({ user }) {
    const { profile, loading, error } = useProfile(user?._id);
    return(
        <div className="p-8 border-2 border-gray-500 rounded-pl">
            <div className="w-full flex flex-col gap-y-2 items-center justify-center">
                <img src={`/assets/avatars/${user.avatar}`} className="rounded-full w-24 border-2 border-gray-300"/>
                <h1 className="font-bold text-pl">{user.username}</h1>
                <div className="w-full flex gap-4 justify-center">
                    <p>Followers {profile?.socialMedia.followersCount}</p>
                    <div>|</div>
                    <p>Following {profile?.socialMedia.followingCount}</p>
                </div>
                <div className="mt-4 w-full flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-pl">About me</h2>
                    <p className="text-center text-sm ">{user.bio}</p>
                </div>
            </div>
        </div>
    );
}