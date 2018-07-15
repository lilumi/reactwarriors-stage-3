import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../../utils/utils";
import _ from "lodash";

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isFetched: false
    };
  }

  getMovies = filters => {
    const { sort_by } = filters;
    const link = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_3}&language=ru-RU&page=1&sort_by=${sort_by}`;

    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results,
          isFetched: true
        });
      });
  };

  componentDidMount() {
    this.getMovies(this.props.filters);
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.filters, this.props.filters)) {
      this.setState({
        isFetched: false
      });
      this.getMovies(nextProps.filters);
    }
  }

  render() {
    const { movies, isFetched } = this.state;
    return (
      <div className="row">
        {isFetched ? (
          movies.map(movie => {
            return (
              <div key={movie.id} className="col-6 mb-4">
                <MovieItem item={movie} />
              </div>
            );
          })
        ) : (
          <p>...Loading</p>
        )}
      </div>
    );
  }
}

export default MovieList;
