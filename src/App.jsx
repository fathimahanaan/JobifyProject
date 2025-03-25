import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AllJobs,
} from "./pages/Index";

import Stats from "./pages/Stats";
import Admin from "./pages/Admin";
import Profile from "./pages/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, // this is the main layout that will display the content of the children, whatever we write in the home layout will display in the children
    errorElement: <Error />, // this is the error page that will display when the user visit the wrong page
    children: [
      {
        index: true, //should set index to true if we want to display the default page
        element: <Landing />, // this is the default page that will display when the user visit the website
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <AddJob /> },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },

          { path: "profile", element: <Profile /> },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  }, // we have to remove the forward slash  for example: (/register) should write like this (register), if we are putting this inside children
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
