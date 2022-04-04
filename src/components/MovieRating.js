import React, { useState } from 'react'
import {Rating} from 'react-simple-star-rating'

function MovieRating() {
  const [rating, setRating] = useState(0) 
  
  const handleRating = (rate) => {
    setRating(rate/20)
  }

  return (
    <div>
      <Rating onClick={handleRating} ratingValue={rating} size={30} label transition fillColor='green' emptyColor='gray' />
      {rating}
    </div>
  )
}

export default MovieRating