import React, { Component } from "react";
import Filters from "./Filters/Filters";
import MovieList from "./MovieList/MovieList";
import Pagination from "./Pagination";

class Movies extends Component {
  constructor() {
    super();

    this.state = {
      filters: {
        sort_by: "popularity.desc",
        primary_release_year: "2018",
        with_genres: []
      },
      pagination: {
        page: 1,
        total_pages: 1
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

  onChangePagination = ({ page, total_pages }) => {
    const newPagination = {
      page,
      total_pages: total_pages || this.state.pagination.total_pages
    };

    this.setState(prevState => ({
      ...prevState,
      pagination: newPagination
    }));
  };

  render() {
    const { filters, pagination } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h2>Фильтры:</h2>
                <Filters
                  filters={filters}
                  onChangeFilter={this.onChangeFilter}
                />
                <Pagination
                  pagination={pagination}
                  onChangePagination={this.onChangePagination}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MovieList
              filters={filters}
              page={pagination.page}
              onChangePagination={this.onChangePagination}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
