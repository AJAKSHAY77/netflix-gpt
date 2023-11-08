import React, { useRef, useState } from "react";

import Header from "./Header";
import { Checkvalidata } from "../utils/FormValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [IsSignInform, setIsSignInForm] = useState(true);
  const [ErrorMessage, setErrorMesssage] = useState(null);
  const Navigate = useNavigate();

  // const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null); 

  const handleClickbutton = () => {
    // console.log(name.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);

    // validate form

    const emailvalue = email.current ? email.current.value : "";
    const passwordvalue = password.current ? password.current.value : "";
    // const namevalue = name.current ? name.current.value : "";
    const message = Checkvalidata(emailvalue, passwordvalue);
    setErrorMesssage(message);

    if (message) return;

    if (!IsSignInform) {
      //sign up logic
      createUserWithEmailAndPassword(auth, emailvalue, passwordvalue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          Navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMesssage(`${errorCode} ${errorMessage}`);
          // ..
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(auth, emailvalue, passwordvalue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          Navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = "user not found";
          setErrorMesssage(`${errorCode} ${errorMessage}`);
        });
    }
  };

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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute p-12 w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-90 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {IsSignInform ? "Sign In" : "Sign up"}
        </h1>

        {!IsSignInform && (
          <input
            // ref={name}
            type="text"
            placeholder="Full Name"
            className=" my-4 p-4 w-full rounded-md bg-gray-900"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email or phone number"
          className=" my-4 p-4 w-full rounded-md bg-gray-900"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className=" my-4 p-4 w-full rounded-md  bg-gray-900"
        />

        <p className="text-red-500  font-bold text-lg py-2">{ErrorMessage}</p>
        <button
          className=" my-6 p-4 w-full bg-red-800 rounded-md font-bold"
          onClick={handleClickbutton}
        >
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
