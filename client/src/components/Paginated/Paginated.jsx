import React from "react";
import "./Paginated.css";

export default function Paginated({
  breeds,
  breedsPerPage,
  paginated,
  currentPage,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(breeds / breedsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul className="container-page">
        {pageNumber &&
          pageNumber
            .slice(
              currentPage > 3 ? currentPage - 3 : currentPage - 1,
              currentPage > 3 ? currentPage + 3 : currentPage + 5
            )
            .map((n) => (
              <li key={n}>
                <button
                  className={currentPage === n && "activePage"}
                  onClick={() => paginated(n)}
                >
                  {n}
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
}
