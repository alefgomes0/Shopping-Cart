import { ShopNav } from "./ShopNav/ShopNav";
import { SearchBar } from "../SearchBar/SearchBar";
import { ShopBooks } from "./ShopBooks/ShopBooks";
import { ShopData } from "../../ShopData";
import { BookDataType } from "../../ShopDataType";
import { useState } from "react";

export const ShopContent = () => {
  const [query, setQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const filterBooks = (books: BookDataType[], query: string) => {
    query = query.toLowerCase().trim();
    return books.filter((book) => book.title.toLowerCase().includes(query));
  };

  let searchResult = filterBooks(ShopData, query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const genre = e.currentTarget.value;

    if (e.currentTarget.checked) {
      setSelectedGenres((prevGenres) => [...prevGenres, genre]);
    } else {
      setSelectedGenres((prevGenres) => prevGenres.filter((g) => g !== genre));
    }
  };

  const filterByGenre = (books: BookDataType[], genres: string[]) => {
    if (genres.length === 0) return books;
    let checkedGenres = "";
    for (let i = 0; i < genres.length; i++) {
      if (i === 0) {
        checkedGenres += genres[0];
      } else {
        checkedGenres += ` && ${genres[i]}`;
      }
    }

    return books.filter((book) => book.genre.includes(checkedGenres));
  };

  searchResult = filterByGenre(searchResult, selectedGenres);

  return (
    <div className="shop-content">
      <ShopNav genreList={ShopData} onClick={handleClick} />
      <SearchBar query={query} onChange={handleChange} />
      <ShopBooks bookList={searchResult} />
    </div>
  );
};
