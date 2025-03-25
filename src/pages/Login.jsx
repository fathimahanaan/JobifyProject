import React from "react";
import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";

const Login = () => {
  return (
    <div className="flex align-center justify-center py-40">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#2cb1bc]  ">
        <form className="flex flex-col items-center">
          <Logo />
          <h4 className="pt-10 text-center text-black-500 text-2xl font-semibold">
            Login
          </h4>
          <FormRow type="email" name="Email" defaultValue="hanaan@icloud.com" />
          <FormRow type="password" name="password" defaultValue="secret123" />
          <button
            type="button"
            className="border border-grey-300 p-2 mt-4 rounded-md bg-[#2cb1bc] text-white hover:bg-[#2497a3] transition-all w-80"
          >
            submit
          </button>
          <button
            type="button"
            className="border border-grey-300 p-2 mt-4 rounded-md bg-[#2cb1bc] text-white hover:bg-[#2497a3] transition-all w-80"
          >
            explore the app
          </button>
          <p className="mt-4">Not a member yet?</p>
          <Link to="/register" className="text-[#2cb1bc]">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
