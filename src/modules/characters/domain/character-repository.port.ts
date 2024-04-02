import { SearchParams } from "./character-search-params";
import { Character } from "./character.entity";

export interface CharacterRepository {
  searchMany(searchParams?: SearchParams): Promise<Character[]>;
}
