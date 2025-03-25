import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from "./Logo";
import LogoutContainer from "./LogoutContainer";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <div className="flex items-center justify-between h-20 px-4 md:px-6 shadow-md bg-white">
      {/* Left Section - Sidebar Toggle Button */}
      <button
        type="button"
        onClick={toggleSidebar}
        className="text-2xl p-2 md:p-3 hover:bg-gray-100 rounded-lg transition"
      >
        <FaAlignLeft />
      </button>

      {/* Center Section - Logo (Mobile) & Dashboard Text (Desktop) */}
      <div className="flex items-center gap-2">
        <div className="block sm:hidden">
          <Logo className="w-10 h-10" /> {/* ✅ Shows ONLY on Mobile */}
        </div>
        <h4 className="hidden sm:block text-lg font-semibold">Dashboard</h4>{" "}
        {/* ✅ Shows ONLY on Desktop */}
      </div>

      {/* Right Section */}
      <div className="text-sm md:text-base font-medium">
        {" "}
        <LogoutContainer />
      </div>
    </div>
  );
};

export default Navbar;
