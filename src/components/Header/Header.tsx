import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useShoppingCart } from "../context/CartContext";




type HeaderProps = {
  isDesktop: boolean;
};

export const Header = (props: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  let dropdown = useRef<HTMLDivElement>(null);

  const { openCart, closeCart, cartQuantity } = useShoppingCart();


  useEffect(() => {
    const closeDropdown = (e:MouseEvent) => {
      if (isVisible && dropdown.current !== e.target) {
        setIsVisible(false)
      }
    }

    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    }
  }, [isVisible])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <>
      {props.isDesktop ? (
        <div className="header">
          <NavLink to="/">
            <h1>BookStore</h1>
          </NavLink>
          <div className="header-links">
            <NavLink to="/" onClick={scrollToTop}>Home</NavLink>
            <NavLink to="/shop" onClick={scrollToTop}>Shop</NavLink>
            <NavLink to="/about" onClick={scrollToTop}>About</NavLink>
            <NavLink to="/contact" onClick={scrollToTop}>Contact</NavLink>
          </div>
          <div className="cart-container" onClick={() => console.log(cartQuantity)}>
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
          </div>
        </div>
      ) : (
        <div className="m-header">
          <div className="dropdown-container">
            <div
              className="menu-title"
              onClick={() => setIsVisible(!isVisible)}
              ref={dropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#fff"
                  d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"
                />
                <path
                  fill="#fff"
                  d="M32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"
                />
                <path fill="#fff" d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z" />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
              <div
                className={`dropdown-menu ${isVisible ? "visible" : "hide"}`}
              >
                <div className="menu-options">
                  <NavLink to="/" onClick={scrollToTop}><button type="button">Home</button></NavLink>
                  <NavLink to="/shop" onClick={scrollToTop}><button type="button">Shop</button></NavLink>
                  <NavLink to="/about" onClick={scrollToTop}><button type="button">About</button></NavLink>
                  <NavLink to="/contact" onClick={scrollToTop}><button type="button">Contact</button></NavLink>
                </div>
              </div>
            </div>
          </div>
          <Link to="/" onClick={scrollToTop}><h1>BookStore</h1></Link>
          <div className="cart-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <g fill="none">
                <path d="M39 32H13L8 12h36l-5 20Z" />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M3 6h3.5L8 12m0 0l5 20h26l5-20H8Z"
                />
                <circle
                  cx="13"
                  cy="39"
                  r="3"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
                <circle
                  cx="39"
                  cy="39"
                  r="3"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
              </g>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};
