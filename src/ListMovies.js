import { useState, useEffect } from 'react'
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'
import { API } from './api'
import Movie from './Movie'
import Filter from './Filter'
import './styles/listMovies.styles.css'

const api_key = API

const ListMovies = () => {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  const fetchPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    )
    const movies = await data.json() //json() is a method of the Response interface to parse the body of the response as JSON
    setPopular(movies.results)
    setFiltered(movies.results)
    console.log(movies.results[0])
  }

  const animate = {
    y: 200,
    // x: 100,
  }

  useEffect(() => {
    fetchPopularMovies()
  }, [])

  return (
    <div className='movie-list-container'>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        setActiveGenre={setActiveGenre}
        activeGenre={activeGenre}
      />
      <AnimatePresence>
        {/* <LayoutGroup> */}
        <motion.div layout className='popular-movies'>
          {filtered.map((movie) => (
            <Movie
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
              description={movie.overview}
            />
          ))}
        </motion.div>
        {/* </LayoutGroup> */}
      </AnimatePresence>
    </div>
  )
}

export default ListMovies
