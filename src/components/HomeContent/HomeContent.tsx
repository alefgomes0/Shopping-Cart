import { Link } from "react-router-dom";

export const HomeContent = () => {
  return (
    <div className="home-content">
      <div className="image-container" role="img">
        <div className="cta">
          <h2>You want, we have it</h2>
          <Link to="/shop">
            <button>Start shopping</button>
          </Link>
        </div>
        <h6 className="img-attr">
          Photo by{" "}
          <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Anna Hunko
          </a>{" "}
          at{" "}
          <a href="https://unsplash.com/pt-br/fotografias/ajE5goOGzZc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </h6>
      </div>
    </div>
  );
};
