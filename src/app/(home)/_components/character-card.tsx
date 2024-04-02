import Image from "next/image";

const CharacterCard = () => {
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
        <h2 className="card-title">Name</h2>
        <p className="mb-4">
          Description Esse ullamco fugiat esse tempor commodo et deserunt
          pariatur commodo aliquip eu Lorem amet.
        </p>
        <div>
          Ki: <span className="badge badge-primary">100</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
