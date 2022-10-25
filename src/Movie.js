import './styles/movie.styles.css'

const Movie = ({ image, title, description }) => {
  return (
    <div className='movie-container'>
      <div className='img-container'>
        <img width={500} src={image} alt='' />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Movie
