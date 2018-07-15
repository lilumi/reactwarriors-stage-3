import React, { Component } from "react";
import Filters from "./Filters";
import MovieList from "./MovieList";

class Movies extends Component {
  constructor() {
    super();

    this.state = {
      filters: {
        sort_by: "popularity.desc"
      }
    };
  }

  onChangeFilter = event => {
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };
    this.setState(prevState => ({
      ...prevState,
      filters: newFilters
    }));
  };
  render() {
    const { filters } = this.state;
    return (
      <div className="row mt-4">
        <div className="col-3">
          <Filters filters={filters} onChangeFilter={this.onChangeFilter} />
        </div>
        <div className="col-9">
          <MovieList filters={filters} />
        </div>
      </div>
    );
  }
}

export default Movies;
