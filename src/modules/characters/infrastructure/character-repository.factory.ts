import { Character, SearchParams } from "../domain";

export function createCharacterRepository() {
  return {
    searchMany,
  };
}

const baseUrl = "https://dragonball-api.com/api/characters";

async function searchMany(searchParams: SearchParams) {
  const searchedName = searchParams.name ?? "";

  const res = await fetch(`${baseUrl}?name=${searchedName}`);

  if (!res.ok) {
    throw new Error("Failed fetching characters");
  }

  const data = await res.json();

  // The API returns the character list in the items property when there are no search params
  const characters = searchedName ? data : data.items;

  return (characters ?? []) as Character[];
}
