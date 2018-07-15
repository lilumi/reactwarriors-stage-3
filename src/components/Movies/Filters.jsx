import React, { Component } from "react";

class Filters extends Component {
  render() {
    const {
      filters: { sort_by },
      onChangeFilter
    } = this.props;
    console.log("sort_by", sort_by);
    return (
      <form>
        <div className="form-group">
          <label htmlFor="sort_by">Сортировка:</label>
          <select
            className="form-control"
            id="sort_by"
            value={sort_by}
            onChange={onChangeFilter}
            name="sort_by"
          >
            <option value="popularity.desc">Популярность по убыванию</option>
            <option value="popularity.asc">Популярность по возростанию</option>
            <option value="vote_average.desc">Рейтинг по убыванию</option>
            <option value="vote_average.asc">Рейтинг по возростанию</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Filters;
