import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";
import user from "../../images/user img.png";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submithandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter Search term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
    // console.log(term);
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      {/* <Link to="/">
        <div className="logo">Movie App</div>
      </Link> */}
      <div className="search-bar">
        <form onSubmit={submithandler}>
          <input
            type="text"
            value={term}
            placeholder="Search For Movies Or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
