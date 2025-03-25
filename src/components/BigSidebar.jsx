import React, { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import { NavLink } from "react-router-dom";
import { links } from "../utlis/links";

const BigSidebar = () => {
  const { toggleSideBar } = useDashboardContext(); // Ensure this function exists
  const [activeLink, setActiveLink] = useState(""); // Track active link

  const handleClick = (text) => {
    setActiveLink(text); // Set clicked link as active
    toggleSideBar(); // Close sidebar (if needed)
  };

  return (
    <div className="w-[250px] h-screen hidden lg:flex flex-col fixed bg-gray-100 p-4">
      <div className="flex flex-col space-y-2 flex-grow">
        {links.map((link) => {
          const { text, path, icon } = link;
          return (
            <NavLink
              to={path}
              key={text}
              onClick={() => handleClick(text)}
              className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
                activeLink === text
                  ? "bg-[#2cb1bc] text-white"
                  : "text-gray-700 hover:bg-[#2cb1bc]"
              }`}
            >
              {icon}
              <span>{text}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BigSidebar;
