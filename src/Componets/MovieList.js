import React from 'react'
import moviesData from '../Data/MoviesData.js'

const MovieList = ({updateSelected}) => {
  return (
    <div>
          {
              moviesData.map((movie,index) => {
                  return (
                      
                  )
              })
      }
    </div>
  )
}

export default MovieList
