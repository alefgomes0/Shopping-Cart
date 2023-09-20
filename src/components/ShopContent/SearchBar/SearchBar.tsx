type SearchBarProps = {
  query: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar = (props: SearchBarProps) => {
  return (
    <input
      type="search"
      placeholder="Search a book title"
      className="search"
      onChange={props.onChange}
      value={props.query as string | number | readonly string[] | undefined}
      aria-label="Search"
      name="search_query"
    />
  );
};
