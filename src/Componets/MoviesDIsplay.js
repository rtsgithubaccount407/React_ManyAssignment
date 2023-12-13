import React from 'react'

const MoviesDIsplay = ({ SelectedMovie }) => {
    return (
      <div>
        {SelectedMovie != null && (
          <div>
            <h1>{SelectedMovie.title}</h1>
            <p>{SelectedMovie.actor}</p>
            <p>{SelectedMovie.genre}</p>
            <p>{SelectedMovie.director}</p>
          </div>
        )}
      </div>
    );
}

export default MoviesDIsplay
