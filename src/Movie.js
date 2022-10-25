import { motion } from 'framer-motion'
import './styles/movie.styles.css'

const Movie = ({ image, title, description }) => {
  return (
    <motion.div layout className='movie-container'>
      <div className='img-container'>
        <img width={500} src={image} alt='' />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </motion.div>
  )
}

export default Movie
