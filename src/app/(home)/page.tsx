import CharacterCard from "./_components/character-card";
import SearchBar from "./_components/search-bar";
import { SearchParams } from "@/modules/characters/domain";
import { config, searchCharacters } from "@/modules/characters/application";

export default async function Home({
  searchParams = {},
}: {
  searchParams: SearchParams;
}) {
  const characters = await searchCharacters(
    config.characterRepository,
    searchParams
  );

  return (
    <main className="md:container md:mx-auto px-4 py-6">
      <h1 className="prose prose-2xl text-neutral mb-3">Search characters</h1>
      <SearchBar />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto gap-8 py-16">
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterCard characterData={character} />
          </li>
        ))}
      </ul>
    </main>
  );
}
