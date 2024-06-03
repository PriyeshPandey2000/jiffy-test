import * as React from "react";
import { useState } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-center items-center px-8 py-3 bg-white max-md:px-5">
      <div className="flex gap-5 items-start w-60vw max-md:flex-wrap max-md:max-w-full mx-7">
        <div className="flex flex-auto gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee64d4544426ece2f17063c5f7acffa3bde7bb66030d08a49a7250f6f9b5ceac?"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[6] w-[180px]"
          />
          <div className="flex gap-5 justify-between self-stretch my-auto text-custom-sm leading-8 text-zinc-600 max-md:flex-wrap">
            <div>Home</div>
            <div className="flex gap-1 whitespace-nowrap">
              <div>Blockchain</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/462b6d0571bab6740820bcb0d4b948fd5d8474469e2075f09103636ea3124dc8?"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex gap-1 whitespace-nowrap">
              <div>Developers</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/462b6d0571bab6740820bcb0d4b948fd5d8474469e2075f09103636ea3124dc8?"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex gap-1 whitespace-nowrap">
              <div>More</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/462b6d0571bab6740820bcb0d4b948fd5d8474469e2075f09103636ea3124dc8?"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </div>
            <div>About 4337</div>
          </div>
          <div className="flex flex-col justify-center self-stretch px-6 py-0 bg-white border-2 border-gray-300 border-solid rounded-[40px] max-md:px-5 relative">
            <div className="flex gap-4 justify-between">
              <div className="flex gap-1.5 my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6c7f42213defedb0dc3e65cb54814ecdbf84e4ba19140eaa8151f8df94ae4ac?"
                  className="shrink-0 aspect-square w-[25px] cursor-pointer"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5446605619c93002f2f9c881a0b75b4e0291b0d8c5824e153941c482c2f4d059?"
                  className="shrink-0 self-start w-6 aspect-square cursor-pointer"
                />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search an userOp"
                className="pl-8 pr-4 py-1 text-sm leading-8 text-neutral-400 bg-transparent outline-none w-full cursor-text"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-1">
          <div className="flex gap-3 relative">
          <div className="flex flex-col   w-10 h-10 text-base font-medium  text-center    rounded-[200px] cursor-pointer" onClick={toggleDropdown}>
      <img 
        src="/Avatar.png" 
        alt="Icon" 
        className="h-full w-full object-cover " 
      />
    </div>
            <div className="flex flex-col flex-1 text-sm leading-5">
              <div className="font-semibold text-stone-900">Olivia Rhye</div>
              <div className="text-zinc-600">olivia@jiffyscan.xyz</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/05244be3f4df58a0edaa6094f4f70a50a50e705b04967dc10dfa5d337bdc737e?"
              className="shrink-0 self-start mt-1 w-6 aspect-square cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute text-sm font-semibold right-0 mt-12 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                <a href="#" className="flex items-center  px-4 py-2 text-[#5A5A62] hover:bg-gray-200"><img src="/user.png" alt="Profile Icon" className="w-4 h-4 mr-2" />View profile</a>
                <a href="#" className="flex items-center px-4 py-2 text-[#5A5A62] hover:bg-gray-200"><img src="/Dashboard.png" alt="Dashboard Icon" className="w-4 h-4 mr-2" />Dashboard</a>
                <a href="#" className="flex items-center px-4 py-2 text-[#5A5A62] hover:bg-gray-200"><img src="/Code.png" alt="API Icon" className="w-4 h-4 mr-2" />API</a>
                <a href="#" className="flex items-center px-4 py-2 text-[#5A5A62] hover:bg-gray-200"><img src="/log-out.png" alt="Log out Icon" className="w-4 h-4 mr-2" />Log out</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
