import React, { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from "./Logo";
import { GrClose } from "react-icons/gr";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { links } from "../utlis/links";
const SmallSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleSidebar } = useDashboardContext();

  return (
    <div className="w-full absolute lg:hidden bg-black inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 min-h-screen">
      <div className="flex flex-col gap-5 lg:w-1/2 w-5/6 bg-white p-5 rounded-lg">
        {/* Centered Logo */}

        {/* Close Button - Positioned at the Top Right */}
        <div className="flex justify-end">
          <button onClick={() => toggleSidebar()}>
            <GrClose size={30} />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          {links.map((link) => {
            const { text, path, icon } = link;
            return (
              <NavLink
                to={path}
                key={text}
                onClick={() => toggleSidebar()}
                className="text-grey-200 hover:text-[#2cb1bc] flex gap-2 items-center"
              >
                {icon}
                <span>{text}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Menu Icon - Positioned at the Top Left */}
    </div>
  );
};

export default SmallSidebar;
