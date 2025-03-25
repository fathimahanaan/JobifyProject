import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/images/errorImg.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className="items-center flex flex-col justify-center pt-32">
        <img src={errorImg} alt="not found" className="w-40 h-40" />
        <h3>page not found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="dashboard" className=" text-lime-300 hover:text-lime-800">
          back home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h3>Something went wrong</h3>
    </div>
  );
};

export default Error;
