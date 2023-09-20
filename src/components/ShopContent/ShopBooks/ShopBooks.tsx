import { BookDataType } from "../../../data/ShopDataType";
import { Link } from "react-router-dom";

export const ShopBooks = (props: { bookList: BookDataType[] }) => {
  return (
    <div className="books-display">
      {props.bookList.map((book) => {
        return (
          <Link to={`/shop/${book.id}`} key={book.id} >
            <div className="book">
              <img
                src={process.env.PUBLIC_URL + book.url}
                alt={book.alt}
                key={book.id}
                className="book-cover"
              />
              <h5>{book.title}</h5>
              <h4>$ {book.price}</h4>
            </div>
          </Link>

        );
      })}
    </div>
  );
};
