import { useEffect, useRef, useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import { ShopData } from "../../data/ShopData";

export const ShopCart = () => {
  const { cartItems, showCart, displayCart, cartQuantity } = useShoppingCart();
  const [isHovered, setIsHovered] = useState(false);
  const cartContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeCart = (e: MouseEvent) => {
      if (showCart && cartContainer.current !== e.target) {
        displayCart();
      }
    };

    window.addEventListener("click", closeCart);

    return () => {
      window.removeEventListener("click", closeCart);
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
      onClick={() => displayCart()}
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
        <div className="idk">
          <h3>{cartQuantity ? "Your items" : "Your cart is empty"}</h3>
          {cartQuantity ? (
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Finish Order<span className={isHovered ? "hovered" : "not-hovered"}>&#x27A4;</span>
            </button>
          ) : (
            <></>
          )}
        </div>
        {cartItems.map((item) => {
          const currentBook = ShopData.find((book) => book.id === item.id);
          if (currentBook === undefined) return -1;
          return (
            <div className="item-on-cart">
              <img
                src={process.env.PUBLIC_URL + currentBook.url}
                alt={currentBook.alt}
              />
              <div className="title-price">
                <h4>{currentBook.title}</h4>
                <h6>$ {item.quantity * currentBook.price}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
