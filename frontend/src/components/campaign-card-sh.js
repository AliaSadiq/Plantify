import React from "react";
//import campaign from "../assets/campaign.jpg";
import { UserGroupIcon } from "@heroicons/react/24/solid";

const CamapignCardSh = ({campaign}) => {
    return (
      <div className="w-[380px] rounded-xl bg-palegoldenrod-100 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-7 px-[15px] pb-[15px] gap-[25px] max-w-full text-left text-5xl text-black font-josefin-sans border-[1px] border-solid border-yellowgreen-200">
        <div className="flex flex-row items-start justify-start py-0 px-[5px]">
          <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lgi">
            {campaign.name}
          </h2>
        </div>
        <div className="w-[336px] flex flex-row items-end justify-start gap-[13px] max-w-full text-mini text-gray-100 mq450:flex-wrap">
          <div className="h-[146px] flex flex-row items-start justify-start relative min-w-[147px] mq450:flex-1">
            <div className="h-[8.9px] w-[147.8px] absolute !m-[0] right-[-100.8px] bottom-[28.1px] rounded-[12.78px] bg-palegoldenrod-300 box-border border-[1px] border-solid border-lightgray" />
            <div className="h-full w-[350px] absolute !m-[0] top-[0px] right-[-203px] bottom-[0px] rounded-xl bg-white z-[1]" />
            <img
              className="h-[146px] w-[147px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover z-[2] mq450:flex-1"
              loading="lazy"
              alt=""
              src={`../assets/,${campaign.image}`}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3.5 box-border min-w-[114px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
              <div className="relative z-[2]">
                <p className="m-0">
                  <span className="font-semibold font-josefin-sans">
                    Location
                  </span>
                  <span className="font-light">: {campaign.location}</span>
                </p>
                <p className="m-0">
                  <span className="font-semibold font-josefin-sans">Date</span>
                  <span className="font-light">: {campaign.start_date}</span>
                </p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-[21px] text-sm">
                <div className="flex-1 flex flex-col items-start justify-start gap-[13px]">
                  <div className="h-5 flex flex-row items-start justify-start py-0 pr-[22px] pl-3 box-border">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                      <UserGroupIcon
                        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[2]"
                        loading="lazy"
                      />
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <div className="relative font-light inline-block min-w-[75px] z-[2]">
                          17 volunteers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4.8px] text-center">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
                      <div className="h-[12.2px] flex-1 relative z-[2]">
                        <div className="absolute top-[0px] left-[0px] rounded-[17.64px] bg-ivory box-border w-full h-full border-[0.5px] border-solid border-yellowgreen-200" />
                        <div className="absolute top-[0px] left-[0px] rounded-tl-[17.64px] rounded-tr-none rounded-br-none rounded-bl-[17.64px] bg-palegoldenrod-200 w-[63.3px] h-[12.2px] z-[1]" />
                      </div>
                    </div>
                    <div className="self-stretch relative font-light z-[2]">
                      {campaign.collected_donation}$ raised of {campaign.target_donation}$
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CamapignCardSh;