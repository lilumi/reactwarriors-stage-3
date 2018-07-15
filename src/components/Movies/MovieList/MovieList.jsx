import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../../../utils/utils";
import { API_URL } from "../../../utils/api";
import _ from "lodash";

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isFetched: false
    };
  }

  getMovies = ({ filters, page }) => {
    const { sort_by, primary_release_year, with_genres } = filters;

    const getParamsWithGenres = genres => {
      return genres.reduce((acc, item) => {
        return acc + `&with_genres=${item}`;
      }, "");
    };
    const paramsWithGenres = getParamsWithGenres(with_genres);

    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&page=${page}&sort_by=${sort_by}&primary_release_year=${primary_release_year}${paramsWithGenres}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.props.onChangePagination({
          page: data.page,
          total_pages: data.total_pages
        });
        this.setState({
          movies: data.results,
          isFetched: true
        });
      });
  };

  componentDidMount() {
    this.getMovies({
      filters: this.props.filters,
      page: this.props.page
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.filters, this.props.filters)) {
      this.setState({
        isFetched: false
      });
      this.getMovies({
        filters: nextProps.filters,
        page: 1
      });
    }

    if (nextProps.page !== this.props.page) {
      this.setState({
        isFetched: false
      });
      this.getMovies({
        filters: nextProps.filters,
        page: nextProps.page
      });
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
