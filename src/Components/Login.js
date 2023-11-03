import React, { useState } from "react";

import Header from "./Header";

const Login = () => {
  const [IsSignInform, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!IsSignInform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgimg"
        />
      </div>

      <form className="bg-black absolute p-12 w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-90 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {IsSignInform ? "Sign In" : "Sign up"}
        </h1>

        {!IsSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            className=" my-4 p-4 w-full rounded-md bg-gray-900"
          />
        )}
        <input
          type="text"
          placeholder="email or phone number"
          className=" my-4 p-4 w-full rounded-md bg-gray-900"
        />
        <input
          type="password"
          placeholder="password"
          className=" my-4 p-4 w-full rounded-md  bg-gray-900"
        />
        <button className=" my-6 p-4 w-full bg-red-800 rounded-md font-bold">
          {IsSignInform ? "Sign In" : "Sign up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>
          {IsSignInform
            ? "New to Netflix? Sign Up Now"
            : "Already Resgistered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
