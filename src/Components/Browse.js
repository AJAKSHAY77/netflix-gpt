import React from 'react'
import Header from './Header'
import useNowplayingMovies from '../Hooks/Usenowplayingmovieshook'
import Maincontainer from './Maincontainer'
import Secondarycoainer from './Secondarycoainer'

import usePopularMovies from '../Hooks/usepopularmovirs'
import useTopratedMovies from '../Hooks/UseTopratedMovies'
import GptSearch from './ChatGpt'
import { useSelector } from 'react-redux'


const Browse = () => {
  const showGptsearch = useSelector((store) => store.GptSearch.showGptsearch);
  useNowplayingMovies()
  usePopularMovies()
  useTopratedMovies()
  

  return (
    <div>
      <Header />
      {showGptsearch ? (
        <GptSearch/>
      ) : (
        <>
          <Maincontainer />
          <Secondarycoainer />
        </>
      )}
    </div>
  );
}

export default Browse