import { ShopData } from "../../../ShopData"



export const ShopBooks = () => {
  const allBooks = ShopData.slice();

  return (
    <div className="shop-books">
      <div className="search-container">
        <input type="search" placeholder="Search"/>
      </div>
      <div className="books-display">
        {allBooks.map(book => {
          return (
            <div className="book">
              <img
                src={process.env.PUBLIC_URL + book.url}
                alt={book.alt}
                key={book.id}
                className="book-cover"
              />
              <h5>{book.title}</h5>
              <h4>${book.price}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}