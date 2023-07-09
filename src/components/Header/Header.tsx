import { useState } from "react";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  isDesktop: boolean;
};

export const Header = (props: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {props.isDesktop ? (
        <div className="header">
          <NavLink to="/">
            <h1>BookStore</h1>
          </NavLink>
          <div className="header-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="cart-container">
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
            <div className="menu-title" onClick={toggleVisibility}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 15 15"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M15 2H0V1h15v1Zm0 4H0V5h15v1Zm0 4H0V9h15v1Zm0 4H0v-1h15v1Z"
                  clip-rule="evenodd"
                />
              </svg>
              {isVisible && (
                <div className={`dropdown-menu ${isVisible ? "visible" : ""}`}>
                  <div className="menu-options">
                    <h4>Shop</h4>
                    <h4>About</h4>
                    <h4>Contact</h4>
                  </div>
                </div>
              )}
            </div>
          </div>
          <h1>BookStore</h1>
          <div className="cart-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
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
      )}
    </>
  );
};
