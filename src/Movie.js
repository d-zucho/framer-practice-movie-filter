const Movie = ({ image, title, description }) => {
  return (
    <div>
      <div className='img-container'>{image}</div>
      <div className='movie-details'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Movie
