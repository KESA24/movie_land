import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=87921f5a'

const App = () => {
  const [movies, setMovies] = useState([])

  const [searchTerm, setSearchTerm] = useState()
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies('The Accountant');
  }, []);
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies([searchTerm])}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App



































































// import { useState, useEffect } from 'react';
// import './App.css';
// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.last}</h2>
//       <h2>Age: {props.age}</h2>
//     </>

//   )
// }

// const App = ()=> {
//   // const name = 'Jihn'
//   // const isNameShowing = false;
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     alert('Youve changed the counter to' + counter);
//   }, [counter])
//   return (
//     <div className="App">
//       {/* <h1>Hello, {isNameShowing ? name: 'someone'}</h1>
//       {name ? (
//         <>
//           <h1>{name}</h1>
//         </>
//       ): (
//         <>
//           <h1>test</h1>
//           <h2>There is no name</h2>
//         </>
//       )} */}
//       <Person name='John' last='Doe' age='24'/>
//       <Person />
//       <h1>Counter</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
//     </div>
//   );
// }

// export default App;
