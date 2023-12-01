import React from 'react'

import GptSearchSuggestion from './GptSearchSuggestion';
import { Bg_IMG } from '../utils/constant';
import GptSearchBar from './GptSearchBar';

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={Bg_IMG} alt="bgimg" />
      </div>
      <GptSearchBar/>
      <GptSearchSuggestion/>
    </div>
  );
}

export default GptSearch;