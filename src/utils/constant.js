
export const LOGO =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
  
export const IMG_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUa4G8R-wX-1USaYMb-lzyTg00_lLuBt5_w&usqp=CAU";
 
export const options_api = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const MovieList_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const Img_cdn_url = "https://image.tmdb.org/t/p/w500";

export const Bg_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg";


export const Supported_langauge = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = "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";

