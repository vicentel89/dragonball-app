"use client";
import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import SearchIcon from "@/app/_components/icons/search";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [searchedName, setSearchedName] = useState(search ?? "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    // Control the input value
    const newSearchValue = event.target.value;
    setSearchedName(newSearchValue);

    // Update the URL with the new search value
    const url = newSearchValue
      ? `${pathname}?name=${newSearchValue}`
      : pathname;

    router.replace(url);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto gap-8">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow shrink"
          placeholder="Search by name"
          value={searchedName}
          onChange={handleChange}
        />
        <SearchIcon />
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
