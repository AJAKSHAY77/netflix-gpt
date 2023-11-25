import React, { useEffect } from "react";
import image from "..//assets/netflix icon.png";
import { signOut } from "firebase/auth";
import { auth } from "..//utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeuser } from "../utils/UserSlice";
import { LOGO, Supported_langauge } from "../utils/constant";
import { ToggleGptSearchView } from "../utils/GptSearchSlice";
import { changeLanguage } from "../utils/ConFigSlice";

const Header = () => {
  const Dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptsearch = useSelector((store) => store.GptSearch.showGptsearch);

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

  const HandlGptSearchClick = () => {
    Dispatch(ToggleGptSearchView());
  };

  const handlelanguagechange = (e) => {
    Dispatch(changeLanguage(e.target.value))
  };

  //user authentication  changes
  useEffect(() => {
    const Unsuscribe = onAuthStateChanged(auth, (user) => {
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
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex gap-3">
          {showGptsearch && (
            <select
              onChange={handlelanguagechange}
              className="p-2 m-2 bg-gray-900 text-white"
            >
              {Supported_langauge.map((el) => (
                <option key={el.identifier} value={el.identifier}>
                  {el.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 py-3 text-white px-3 rounded-lg font-bold hover:bg-opacity-50"
            onClick={HandlGptSearchClick}
          >
            {showGptsearch ? "Home" : "GptSearch"}
          </button>
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
