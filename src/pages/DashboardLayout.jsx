import React, { useState, createContext, useContext } from "react";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { Outlet } from "react-router-dom";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "john" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };

  const toggleSidebar = () => {
    console.log("Toggling Sidebar"); // Debugging log
    setShowSidebar((prev) => !prev);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <div className="flex gap-2 relative">
        {showSidebar && <SmallSidebar />}

        {/* Sidebar */}
        {showSidebar && (
          <aside className="relative">
            <BigSidebar />
          </aside>
        )}

        {/* Main Content */}
        <div className="grow">
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
