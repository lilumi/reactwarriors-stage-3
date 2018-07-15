import React, { Component } from "react";
import Genres from "./Genres";

class Filters extends Component {
  render() {
    const {
      filters: { sort_by, primary_release_year, with_genres },
      onChangeFilter
    } = this.props;
    return (
      <form className="mb-3">
        <div className="form-group">
          <label htmlFor="sort_by">Год:</label>
          <select
            className="form-control"
            id="primary_release_year"
            value={primary_release_year}
            onChange={onChangeFilter}
            name="primary_release_year"
          >
            {["2018", "2017", "2016", "2015", "2014"].map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sort_by">Сортировать по:</label>
          <select
            className="form-control"
            id="sort_by"
            value={sort_by}
            onChange={onChangeFilter}
            name="sort_by"
          >
            <option value="popularity.desc">Популярные по убыванию</option>
            <option value="popularity.asc">Популярные по возростанию</option>
            <option value="vote_average.desc">Рейтинг по убыванию</option>
            <option value="vote_average.asc">Рейтинг по возростанию</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label>Жанры:</label>
          <Genres with_genres={with_genres} onChangeFilter={onChangeFilter} />
        </div>
      </form>
    );
  }
}

export default Filters;
