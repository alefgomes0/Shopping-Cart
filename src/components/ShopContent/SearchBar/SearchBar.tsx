type SearchBarProps = {
  query: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ( props:SearchBarProps ) => {
  return (
    <input
      type="search"
      placeholder="Search"
      className="search"
      onChange={props.onChange}
      value={props.query}
      aria-label="Search"
      name="search_query"
    />
  );
};
