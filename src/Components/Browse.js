import React from 'react'
import Header from './Header'
import useNowplayingMovies from '../Hooks/Usenowplayingmovieshook'
import Maincontainer from './Maincontainer'
import Secondarycoainer from './Secondarycoainer'

import usePopularMovies from '../Hooks/usepopularmovirs'


const Browse = () => {
  useNowplayingMovies()
  usePopularMovies()
  

  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycoainer/>

    </div>
  )
}

export default Browse