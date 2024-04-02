import { Character } from "@/modules/characters/domain";
import Image from "next/image";

const CharacterCard = ({ characterData }: { characterData: Character }) => {
  const { name, description, ki } = characterData;

  return (
    <div className="card bg-base-200 shadow-xl">
      <figure className="relative w-full aspect-square">
        <Image
          src="/goku.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 25vw, 15vw"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="mb-4 line-clamp-3">{description}</p>
        <div>
          Ki: <span className="badge badge-primary">{ki}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
