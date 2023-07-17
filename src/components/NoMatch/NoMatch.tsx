import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <div className="no-match">
      <div className="pg-not-found">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 4v15c0 1.1.9 2 2 2v1h2v-1h3.5V2H6c-1.1 0-2 .9-2 2m4 6h2v3H8v-3m10-8h-5.5v19H16v1h2v-1c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 11h-2v-3h2v3Z"
          />
        </svg>
        <h3>Oh no... It seems like you're lost in Narnia</h3>
        <h3>Click the button below to go back home</h3>
        <Link to="/"><button>Home</button></Link>
      </div>
    </div>
  );
};
