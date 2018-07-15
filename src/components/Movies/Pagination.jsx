import React, { Component } from "react";
import classNames from "classnames";

class Pagination extends Component {
  nextPage = () => {
    this.props.onChangePagination({
      page: this.props.pagination.page + 1
    });
  };

  prevPage = () => {
    this.props.onChangePagination({
      page: this.props.pagination.page - 1
    });
  };

  render() {
    const { pagination } = this.props;
    return (
      <nav className="d-flex align-items-center">
        <ul className="pagination mb-0 mr-3">
          <li
            className={classNames("page-item", {
              disabled: pagination.page === 1
            })}
          >
            <span className="page-link" onClick={this.prevPage}>
               Назад
            </span>
          </li>
          <li className="page-item">
            <span className="page-link" onClick={this.nextPage}>
              Вперед
            </span>
          </li>
        </ul>
        <span>
          {pagination.page} of {pagination.total_pages}
        </span>
      </nav>
    );
  }
}

export default Pagination;
