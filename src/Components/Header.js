import React from "react";
import image from "..//assets/netflix icon.png";
import { signOut } from "firebase/auth";
import { auth } from "..//utils/Firebase"
import {useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const user = useSelector(store => store.user)
  const Navigate = useNavigate()
  const handleSignout = () => {

    //sign out logic

    
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Navigate("/");
      })
      .catch((error) => {
        // An error happened.
        Navigate("/error")
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between  items-center">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {
        user && <div className="flex gap-2">
        <img src={user?.photoURL} className="w-12 h-12" alt="usericon" />
        <button onClick={handleSignout} className="font-bold text-white">
          (Sign out)
        </button>
      </div>
      }
    </div>
  );
};

export default Header;
