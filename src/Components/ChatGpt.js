import React from 'react'

import GptSearchSuggestion from './GptSearchSuggestion';
import { Bg_IMG } from '../utils/constant';
import GptSearchBar from './GptSearchBar';

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className='h-screen object-cover w-screen' src={Bg_IMG} alt="bgimg" />
      </div>
      <div  className=''>
      <GptSearchBar/>
        <GptSearchSuggestion />
      </div>
    </>
  );
}

export default GptSearch;