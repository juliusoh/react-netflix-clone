import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const request = await axios.get(fetchUrl);
    console.log('row request', request);
    setMovies(request.data.results);
    return request;
  };
  const image_base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${image_base_url}/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
