import { ShopNav } from "./ShopNav/ShopNav";
import { SearchBar } from "../SearchBar/SearchBar";
import { ShopBooks } from "./ShopBooks/ShopBooks";
import { ShopData, filterBooks } from "../../ShopData";
import { useState } from "react";

export const ShopContent = () => {
  const [query, setQuery] = useState("");

  const result = filterBooks(ShopData, query);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="shop-content">
      <ShopNav genreList={ShopData} />
      <SearchBar query={query} onChange={handleChange} />
      <ShopBooks bookList={result}/>
    </div>
  );
};
