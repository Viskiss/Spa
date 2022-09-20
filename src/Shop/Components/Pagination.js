import { Link } from "react-router-dom";

const Pagination = ({ quantityProducts, totalProducts, paginate }) => {
  const pageNambers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / quantityProducts); i++) {
    pageNambers.push(i);
  }

  return (
    <div>
      {pageNambers.map((number) => (
        <Link
          key={number}
          to={`shop/${number}`}
          onClick={() => paginate(number)}>
          {number}
        </Link>
      ))}
    </div>
  );
};
export default Pagination;
