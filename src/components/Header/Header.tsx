import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShopCart } from "../ShopCart/ShopCart";


export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 820);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 820);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {isDesktop ? (
        <header>
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
        </header>
      ) : (
        <header>
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
                  <path
                    fill="#fff"
                    d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                <div
                  className={`dropdown-menu ${isVisible ? "visible" : "hide"}`}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#fff"
                        d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
                      />
                    </svg>
                  </div>
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
        </header>
      )}
    </>
  );
};
