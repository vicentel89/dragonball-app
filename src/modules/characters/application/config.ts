import { CharacterRepository } from "../domain/character-repository.port";
import { createCharacterRepository } from "../infrastructure/character-repository.factory";

interface Config {
  characterRepository: CharacterRepository;
}

export const config: Config = {
  characterRepository: createCharacterRepository(),
};
