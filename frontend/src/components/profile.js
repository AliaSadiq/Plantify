import React from 'react';

export default function Profile () {
  return(
      <div class="relative flex flex-col items-center rounded-md w-[350px] mx-auto p-4 bg-neutral bg-clip-border shadow-3xl shadow-shadow-500 text-gray-100">
        <div class="relative flex h-32 w-full justify-center rounded-md bg-cover" >
            <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' class="absolute flex h-32 w-full justify-center rounded-md bg-cover"/> 
            <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <img class="h-full w-full rounded-full" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="" />
            </div>
        </div> 
        <div class="mt-16 flex flex-col items-center">
            <h4 class="text-lg font-bold font-josefin-sans text-gray-100">
            Adela Parkson
            </h4>
            <p class="text-base font-josefin-sans text-gray-100">Product Manager</p>
        </div> 
        <div class="mt-6 mb-3 font-josefin-sans flex gap-10">
            <div class="flex flex-col items-center justify-center">
              <p class="text-md font-bold text-gray-100">17</p>
              <p class="text-sm font-normal text-gray-100">Posts</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-md font-bold text-gray-100">
                  9.7K
              </p>
              <p class="text-sm font-normal text-gray-100">Followers</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-md font-bold text-gray-100">
                  434
              </p>
              <p class="text-sm font-normal text-gray-100">Following</p>
            </div>
        </div>
      </div>
  );
}