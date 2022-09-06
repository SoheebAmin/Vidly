import React, { Component } from "react";
import Like from "./common/like";
import { getMovies, movies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  // arrow function to bind this to the object
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id); // filtering movies to return all movies without the id of parameter movie.
    this.setState({ movies: movies }); // re-recreating the above state object by setting "movies" to the just-created const.
    // Note: In JS, if key and value are the same like here, we can just say "movies" once:
    // this.setsState {{ movies }}
  };

  // note all of these changes only persistent in UI. We will also need to make an HTTP request to save changes in DB on server
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies; // a bit of an odd way to just say" count = this.state.movies.length
    if (count === 0) {
      return <p>No Movies Here!</p>;
    } else
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {/** On line 29, key is added to generate unique id for each element */}
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)} // arrow function to pass argument
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
  }
}

export default Movies;
