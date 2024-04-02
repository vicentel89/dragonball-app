import { SearchParams, CharacterRepository } from "../domain";

export async function searchCharacters(
  characterRepository: CharacterRepository,
  searchParams: SearchParams
) {
  const characters = await characterRepository.searchMany(searchParams);

  return characters;
}
