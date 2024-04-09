// src/components/Pagination.jsx

import "./css/pagination.css"

const Pagination = ({ prevPage, nextPage }) => {
  return (
    <div>
      {prevPage && <button onClick={prevPage}>Previous Page</button>}
      {nextPage && <button onClick={nextPage}>Next Page</button>}
    </div>
  );
}

export default Pagination;