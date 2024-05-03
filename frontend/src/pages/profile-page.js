import React from "react";
import MainProfile from "../components/profileComp/profile-full";
import TeamComponent from "../components/profileComp/my-team";

const ProfilePage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[51px] px-0 pb-[1204px] box-border gap-[834px] leading-[normal] tracking-[normal] mq450:gap-[208px] mq750:gap-[417px]">
      <div className="w-[937px] h-[847px] relative bg-white hidden max-w-full" />
      <MainProfile />
      <TeamComponent  />
    </div>
  );
};

export default ProfilePage;


