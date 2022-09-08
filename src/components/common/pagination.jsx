import React from "react";
import _ from "lodash"; // _ is convention for lodash

// input: number of movies and size of each page
// output: event when new page is clicked

const Pagination = (props) => {
  // need an array of page numbers, and map each page number to a list item.
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1); // +1 part of how to use lodash to include last page

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
