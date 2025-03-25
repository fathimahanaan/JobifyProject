import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <div>
      <button type="button" onClick={() => setShowLogout(!showLogout)}>
        <FaUserCircle />
        {user?.name} <FaCaretDown />
      </button>
      {showLogout && (
        <div>
          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
};
export default LogoutContainer;
