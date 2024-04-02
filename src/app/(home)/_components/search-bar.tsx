import Search from "@/app/_components/icons/search";

const SearchBar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto gap-4">
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow shrink" placeholder="Search" />
        <Search />
      </label>
      <label className="flex gap-2 flex-col">
        <span className="label-text">Ki units</span>
        <input
          type="range"
          min={0}
          max="100"
          className="range range-xs range-primary"
        />
      </label>
    </div>
  );
};

export default SearchBar;
