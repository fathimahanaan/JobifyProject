import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <div className="flex flex-col items-center pt-32">
      {/* Navigation Bar */}
      <nav className="w-full max-w-[1120px] h-24 flex justify-center items-center">
        <Logo />
      </nav>

      {/* Main Content */}
      <div className="page-height grid place-items-center -mt-12 text-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold mb-6 text-5xl">
            Job <span className="text-[#2cb1bc]">Tracking </span> App
          </h1>
          <p className="leading-loose mb-6 max-w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link
              to="/register"
              className="bg-[#2cb1bc] text-white px-4 py-2 rounded"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-[#2cb1bc] text-white px-4 py-2 rounded"
            >
              Login/Demo User
            </Link>
          </div>
        </div>

        {/* Job Tracking Image - Replace with actual image */}
        <img src="" alt="Job tracking" className="mt-6 w-40 h-40" />
      </div>
    </div>
  );
};

export default Landing;
