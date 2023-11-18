import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddToPlaylist from "../components/cardIcons/addToPlaylist";


const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);

  const addToPlaylist = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    
const UpcomingMoviesPage = (props) => {

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      selectFavorite={addToFavorites}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
  );

};
};
export default UpcomingMoviesPage;
