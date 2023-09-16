import React from "react";

const Card = ({ character }) => {
  return (
    <>
      <div className="cardCharacter">
        <div className="characterImg">
          <img src={character.image} alt={character.name} />
        </div>
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <p>Status: {character.status}</p>
      </div>
    </>
  );
};

export default Card;
