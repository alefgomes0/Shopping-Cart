import { useParams } from "react-router-dom";
import { ShopData } from "../../../ShopData";

export const BookDetails = () => {
  const { bookId } = useParams();
  const currentBook = ShopData.filter((book) => book.id === Number(bookId))[0];

  return (
    <div className="book-detail-container">
      <div className="book-detail">
        <img 
          src={process.env.PUBLIC_URL + currentBook.url} 
          alt={currentBook.alt}
        />
        <h3>{currentBook.title}</h3>
      </div>
    </div>
  )
};
