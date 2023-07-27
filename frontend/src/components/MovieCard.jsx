import React from 'react'

export default function MovieCard({poster_path, name}) {
  return (
    <div className='card'>
        <img className='card-image' src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={name} />
    </div>
  )
}
