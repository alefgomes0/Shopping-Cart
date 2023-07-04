import { ShopData } from "../../../ShopData";

type genresProperties = {
  [index: string]: number;
};

export const ShopNav = () => {
  const genres: genresProperties = {};

  const registryGenres = () => {
    ShopData.forEach((book) => {
      for (const genre of book.genre) {
        genre in genres ? (genres[genre] += 1) : (genres[genre] = 1);
      }
    });
  };
  registryGenres();

  return (
    <div className="shop-nav">
      <div className="books-category">
        <h3>Genres</h3>
        {Object.keys(genres).map((genre: string) => {
          return (
            <div className="category" key={genre}>
              <input type="checkbox" />
              <h5>{genre}</h5>
              <h6 className="genre-quantity">({genres[genre]})</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};
