import { useEffect } from 'react'

const Filter = ({ setActiveGenre, activeGenre, popular, setFiltered }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return
    }
    const filtered = popular.filter((movie) => {
      return movie.genre_ids.includes(activeGenre)
    })

    setFiltered(filtered)
  }, [activeGenre])

  return (
    <div className='filter-container'>
      <button
        className={activeGenre === 0 ? 'active' : ''}
        onClick={() => setActiveGenre(0)}
        value='all'
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? 'active' : ''}
        onClick={() => setActiveGenre(35)}
        value='comedy'
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? 'active' : ''}
        onClick={() => setActiveGenre(28)}
        value='action'
      >
        Action
      </button>
    </div>
  )
}

export default Filter
