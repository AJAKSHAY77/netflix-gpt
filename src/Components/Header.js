import React, { useEffect } from "react";
import image from "..//assets/netflix icon.png";
import { signOut } from "firebase/auth";
import { auth } from "..//utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeuser } from "../utils/UserSlice";
import { LOGO } from "../utils/constant";


const Header = () => {
  const Dispatch = useDispatch()
 
  const user = useSelector((store) => store.user);
  const Navigate = useNavigate();
  const handleSignout = () => {
    //sign out logic

    signOut(auth)
      .then(() => {
        // Sign-out successful.
       
      })
      .catch((error) => {
        // An error happened.
        Navigate("/error");
      });
  };

  //user authentication  changes
   useEffect(() => {
     const Unsuscribe =  onAuthStateChanged(auth, (user) => {
       // in case of signin/signup
       if (user) {
         const { uid, email, displayName, photoURL } = user;
         Dispatch(
           addUser({
             uid: uid,
             email: email,
             displayName: displayName,
             photoURL: photoURL,
           })
         );
         Navigate("/browse");
       } else {
         //in case of sign out

         Dispatch(removeuser());
         Navigate("/");
       }
     });
     // unsuscribe  when component  is unsuscribe
     return () => Unsuscribe();
   }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between  items-center">
      <img
        className="w-44"
       src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex gap-2">
          <img src={user?.photoURL} className="w-12 h-12" alt="usericon" />
          <button onClick={handleSignout} className="font-bold text-white">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
