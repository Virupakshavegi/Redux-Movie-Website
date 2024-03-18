import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
// import MovieAPI from "../../common/api/MovieAPI";
// import { APIKEY } from "../../common/api/MovieAPikey";
import { useDispatch } from "react-redux";
import {
  addMovies,
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Star Wars";
  const showText = "Friends";
  // const movieText = "Star Wars";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
    // const Moviesfetch = async () => {
    // const response = await MovieAPI.get(
    //   `?apiKey=${APIKEY}&s=${movieText}&type=movie`
    // ).catch((error) => {
    //   console.log("Error", error);
    // });
    // console.log("response", response);
    // dispatch(addMovies(response.data));

    // Moviesfetch();
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
