import { Link } from "react-router-dom";

export const HomeContent = () => {
  return (
    <div className="home-content">
      <div className="image-container" role="img">
        <div className="cta">
          <h2>You want, we have it</h2>
          <Link to="/shop"><button>Start shopping</button></Link>
        </div>
      </div>
    </div>
  );
};
