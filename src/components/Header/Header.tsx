import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShopCart } from "../ShopCart/ShopCart";

type HeaderProps = {
  isDesktop: boolean;
};

export const Header = (props: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (isVisible && dropdown.current !== e.target) {
        setIsVisible(false);
      }
    };

    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {props.isDesktop ? (
        <div className="header">
          <NavLink to="/">
            <h1>BOOKSTORE</h1>
          </NavLink>
          <div className="header-links">
            <NavLink to="/" onClick={scrollToTop}>
              Home
            </NavLink>
            <NavLink to="/shop" onClick={scrollToTop}>
              Shop
            </NavLink>
            <NavLink to="/about" onClick={scrollToTop}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={scrollToTop}>
              Contact
            </NavLink>
          </div>
          <ShopCart />
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
                  <NavLink to="/" onClick={scrollToTop}>
                    <button type="button">Home</button>
                  </NavLink>
                  <NavLink to="/shop" onClick={scrollToTop}>
                    <button type="button">Shop</button>
                  </NavLink>
                  <NavLink to="/about" onClick={scrollToTop}>
                    <button type="button">About</button>
                  </NavLink>
                  <NavLink to="/contact" onClick={scrollToTop}>
                    <button type="button">Contact</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <Link to="/" onClick={scrollToTop}>
            <h1>BOOKSTORE</h1>
          </Link>
          <ShopCart />
        </div>
      )}
    </>
  );
};
