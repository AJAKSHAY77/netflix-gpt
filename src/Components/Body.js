import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useDispatch } from "react-redux";
import { addUser, removeuser } from "../utils/UserSlice";

const Body = () => {
  const Dispatch = useDispatch()
 
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse/>,
    },
  ]);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {

       // in case of signin/signup
      if (user) {
        const { uid,email, displayName,photoURL } = user;
        Dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL }))
       
        
      } else {
        //in case of sign out 
    
        Dispatch(removeuser())
      
      }
    });
  },[])
  return (
    <>
      <RouterProvider router={approuter}/>
    </>
  );
};

export default Body;
