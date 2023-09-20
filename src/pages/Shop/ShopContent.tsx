import { ShopNav } from "../../components/ShopContent/ShopNav/ShopNav";
import { SearchBar } from "../../components/ShopContent/SearchBar/SearchBar";
import { ShopBooks } from "../../components/ShopContent/ShopBooks/ShopBooks";
import { ShopData } from "../../data/ShopData";
import { BookDataType } from "../../data/ShopDataType";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const ShopContent = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const query = searchParams.get("q");

  const filterBooks = (books: BookDataType[], query: string) => {
    query = query.toLowerCase().trim();
    return books.filter((book) => book.title.toLowerCase().includes(query));
  };

  let searchResult = filterBooks(ShopData, query as string);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => {
      prev.set("q", e.target.value);
      return prev;
    }, { replace: true });
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
    <main>
      <div className="shop-content">
        <ShopNav genreList={ShopData} onClick={handleClick} />
        <div className="main-content">
          <SearchBar query={query} onChange={handleChange} />
          <ShopBooks bookList={searchResult} />
        </div>
      </div>
    </main>
  );
};
