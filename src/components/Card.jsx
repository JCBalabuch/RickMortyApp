// import React from "react";
import { PropTypes } from "prop-types";

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

Card.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string
  }).isRequired
};

export default Card;
