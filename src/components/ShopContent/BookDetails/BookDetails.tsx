import { useState } from "react";
import { useParams } from "react-router-dom";
import { ShopData } from "../../../data/ShopData";
import { useShoppingCart } from "../../context/CartContext";

type BookDetailsProps = {
  isDesktop: boolean;
};

export const BookDetails = (props: BookDetailsProps) => {
  const { bookId } = useParams();
  let currentBook = ShopData.filter((book) => book.id === Number(bookId))[0];
  const {
    getBookQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity: number = getBookQuantity(currentBook.id);

  return (
    <div>
      {props.isDesktop ? (
        <div className="book-detail-container">
          <div className="book-detail">
            <img
              src={process.env.PUBLIC_URL + currentBook.url}
              alt={currentBook.alt}
            />
            <div className="synopsis">
              <div className="title-author">
                <h3>{currentBook.title}</h3>
                <h5>{`By ${currentBook.author} (Author)`}</h5>
              </div>
              <h6>{currentBook.synopsis}</h6>
              <div className="other-info">
                <div className="number-of-pages">
                  <p>Pages</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M1 2.828c.885-.37 2.154-.769 3.388-.893c1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493c-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752c1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81c-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02c1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877c1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                    />
                  </svg>
                  <p>{currentBook.pages}</p>
                </div>
                <div className="idiom">
                  <p>Idiom</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                    />
                  </svg>
                  <p>English</p>
                </div>
                <div className="publisher">
                  <p>Publisher</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M5.398.02h9.831c.628.022 1.113.204 1.407.61c.234.322.355.728.38 1.241l-.001 2.093h1.199c.627.022 1.112.203 1.406.609c.234.322.355.729.38 1.242v8.097c-.002.626-.046 1.094-.219 1.418c-.268.5-.764.723-1.59.789l-1.175-.001v1.949c0 .457-.082.859-.257 1.2c-.246.478-.715.719-1.317.733H4.725c-.594 0-1.082-.217-1.386-.662c-.243-.357-.37-.779-.385-1.271v-1.949h-1.02c-.737 0-1.3-.22-1.599-.732c-.223-.382-.327-.871-.333-1.476V6.025C-.02 5.389.11 4.868.427 4.482c.383-.468 1.047-.594 1.956-.518l.633-.001l.001-1.882c-.022-.636.108-1.156.425-1.543C3.825.071 4.49-.055 5.398.02Zm10.279 12.131H4.293v5.895c.007.227.06.4.152.536c.033.048.1.078.28.078h10.701a2.03 2.03 0 0 0 .13-.006h.012c.07-.135.11-.33.11-.587l-.001-5.916Zm-1.378 4.534a.67.67 0 0 1 0 1.34h-8.58a.67.67 0 0 1 0-1.34h8.58Zm0-1.897a.67.67 0 0 1 0 1.34h-8.58a.67.67 0 0 1 0-1.34h8.58ZM2.329 5.302c-.569.002-.7.002-.82.14c-.12.14-.18.198-.168.56v7.902c.004.384.016.568.103.708s.18.167.49.167l1.02-.001v-2.627H2.82a.67.67 0 0 1 0-1.34h14.404a.67.67 0 0 1 0 1.34h-.208v2.627l1.12.003c.208-.017.327.005.435-.108c.108-.114.089-.39.09-.763V5.848c-.011-.238-.033-.318-.107-.405c-.074-.088-.13-.13-.363-.139L2.329 5.302Zm11.97 7.59a.67.67 0 0 1 0 1.34h-8.58a.67.67 0 0 1 0-1.34h8.58Zm1.785-6.978a2.01 2.01 0 1 1-.002 4.02a2.01 2.01 0 0 1 .002-4.02Zm0 1.34a.67.67 0 1 0 0 1.34a.67.67 0 0 0 0-1.34ZM4.478 1.388c-.082.1-.134.309-.122.67l-.001 1.905l11.321.001l.001-2.06c-.012-.237-.059-.397-.125-.487c-.005-.008-.112-.048-.346-.056l-9.862-.003c-.557-.045-.851.011-.866.03Z"
                    />
                  </svg>
                  <p>{currentBook.publisher}</p>
                </div>
              </div>
            </div>
            <div className="buy-book">
              <div className="price-button">
                <h3>
                  Price:<span> ${currentBook.price}</span>
                </h3>
                {quantity === 0 ? (
                  <button
                    className="add-to-cart"
                    onClick={() => increaseCartQuantity(currentBook.id)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="cart-manage">
                    <div className="stepper">
                      <button
                        onClick={() => decreaseCartQuantity(currentBook.id)}
                      >
                        -
                      </button>
                      <div>{quantity}</div>
                      <button
                        onClick={() => increaseCartQuantity(currentBook.id)}
                      >
                        +
                      </button>
                    </div>
                    <button className="remove" onClick={() => removeFromCart(currentBook.id)}>Remove</button>
                  </div>
                )}
              </div>
              <h5>Estimated delivery time between XXXX-XX-XX and YYYY-YY-YY</h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="m-book-detail-container">
          <div className="m-book-detail">
            <div className="m-title-author">
              <h3>{currentBook.author}</h3>
              <h4>{currentBook.title}</h4>
            </div>
            <img
              src={process.env.PUBLIC_URL + currentBook.url}
              alt={currentBook.alt}
              className="m-book-cover"
            />
            <h3 className="m-price">$ {currentBook.price}</h3>

            <h5>Estimated delivery time: </h5>
            <h5>Between XXXX-XX-XX and YYYY-YY-YY</h5>
            {quantity === 0 ? (
              <button
                className="add-to-cart"
                onClick={() => increaseCartQuantity(currentBook.id)}
              >
                Add to Cart
              </button>
            ) : (
              <div className="cart-manage m-cart-manage">
                <div className="stepper">
                  <button onClick={() => decreaseCartQuantity(currentBook.id)}>
                    -
                  </button>
                  <div>{quantity}</div>
                  <button onClick={() => increaseCartQuantity(currentBook.id)}>
                    +
                  </button>
                </div>
                <button className="remove" onClick={() => removeFromCart(currentBook.id)}>Remove</button>
              </div>
            )}
            <div className="m-book-synopsis">
              <h3>Book details</h3>
              <h4>{currentBook.synopsis}</h4>
              <h4>Number of Pages: {currentBook.pages}</h4>
              <h4>Genres: {currentBook.genre}</h4>
              <h4>Published by: {currentBook.publisher}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
