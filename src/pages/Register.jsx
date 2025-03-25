import React from "react";
import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";
const Register = () => {
  return (
    <div className="flex align-center justify-center py-40">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#2cb1bc]  ">
        <form className=" flex flex-col">
          <Logo />
          <h1 className="pt-10 text-center text-black-500 text-2xl font-semibold">
            Register
          </h1>

          <FormRow type="text" name="name" defaultValue="hanaan"></FormRow>
          <FormRow
            type="text"
            name="lastName"
            labelText="Last Name"
            defaultValue="fathima"
          ></FormRow>
          <FormRow
            type="text"
            name="email"
            defaultValue="hanaan@icloud.com"
          ></FormRow>
          <FormRow
            type="text"
            name="password"
            defaultValue="secret123"
          ></FormRow>

          <button
            type="submit"
            className="border border-grey-300 p-2 mt-4 rounded-md bg-[#2cb1bc] text-white hover:bg-[#2497a3] transition-all"
          >
            submit
          </button>

          <p className="mt-4 text-center">
            Already a member?
            <Link to="/login" className="text-[#2cb1bc]">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
