import { useState } from 'react'

const Filter = () => {
  const [activeGenre, setActiveGenre] = useState('All')
  

  return (
    <div className='filter-container'>
      <button onClick={setActiveGenre} value='all'>All</button>
      <button onClick={setActiveGenre} value='comedy'>Comedy</button>
      <button onClick={setActiveGenre} value='action'>Action</button>
    </div>
  )
}

export default Filter
