import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieAPI from "../../common/api/MovieAPI";
import { APIKEY } from "../../common/api/MovieAPikey";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    // const movieText = "Star Wars";
    const response = await MovieAPI.get(
      `?apiKey=${APIKEY}&s=${term}&type=movie`
    );
    // .catch((error) => {
    //   console.log("Error", error);
    // }
    // );
    // console.log("response", response);
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    // const seriesText = "Friends";
    const response = await MovieAPI.get(
      `?apiKey=${APIKEY}&s=${term}&type=series`
    );
    // .catch((error) => {
    //   console.log("Error", error);
    // }
    // );
    // console.log("response", response);
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await MovieAPI.get(`?apiKey=${APIKEY}&i=${id}&Plot=full`);

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fetch Successfully!");
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state, { payload }) => {
        console.log("Rejected!");
        state.movies = payload;
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Fetch Successfully!");
        state.shows = payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        console.log("Fetch Successfully!");
        state.selectMovieOrShow = payload;
      });
  },
});
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectorMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
