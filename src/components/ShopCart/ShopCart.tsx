import { useEffect, useRef, useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import { ShopData } from "../../data/ShopData";
import { Link } from "react-router-dom";

export const ShopCart = () => {
  const {
    cartItems,
    showCart,
    displayCart,
    hideCart,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  const [isHovered, setIsHovered] = useState(false);
  const cartContainer = useRef<HTMLDivElement>(null);
  let total: number = 0;

  useEffect(() => {
    const handleClickOutsideCart = (e: MouseEvent) => {
      if (showCart && !cartContainer.current?.contains(e.target as Node))
        displayCart();
    };

    window.addEventListener("click", handleClickOutsideCart);

    return () => {
      window.removeEventListener("click", handleClickOutsideCart);
    };
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="cart-container"
      onClick={(e) => {
        if (e.target === cartContainer.current) displayCart();
      }}
      ref={cartContainer}
    >
      <div className="cart-quantity">{cartQuantity}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 512 512"
        role="img"
      >
        <circle
          cx="176"
          cy="416"
          r="16"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="400"
          cy="416"
          r="16"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M48 80h64l48 272h256"
        />
        <path
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
        />
      </svg>
      <div className={`cart-items ${showCart ? "show" : "not-show"}`}>
        <div className="fb-sb">
          <h3>{cartQuantity ? "My items" : "The cart is empty"}</h3>
          <div className="close-container" onClick={() => hideCart()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#434343"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        {cartItems.map((item) => {
          const currentBook = ShopData.find((book) => book.id === item.id);
          if (currentBook === undefined) return -1;
          return (
            <div className="item-on-cart" key={item.id}>
              <img
                src={process.env.PUBLIC_URL + currentBook.url}
                alt={currentBook.alt}
              />
              <div className="title-price">
                <h4>{currentBook.title}</h4>
                <h6>$ {(item.quantity * currentBook.price * 100) / 100}</h6>
                {
                  <p style={{ display: "none" }}>
                    {(total += (item.quantity * currentBook.price * 100) / 100)}
                  </p>
                }
              </div>
              <div className="cart-stepper">
                <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                <div>{item.quantity}</div>
                <button onClick={() => increaseCartQuantity(item.id)}>+</button>
              </div>
            </div>
          );
        })}
        <hr />
        {cartQuantity ? (
          <>
            <h4 className="total">{`Total: $${(total * 100) / 100}`}</h4>
            <Link to="order-finish">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="finish-order"
                onClick={() => displayCart()}
              >
                Finish Order
                <span className={isHovered ? "hovered" : "not-hovered"}>
                  &#x27A4;
                </span>
              </button>
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
