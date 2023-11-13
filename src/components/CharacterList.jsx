import Card from "../components/Card";
import { useState } from "react";
import { useFetchData2 } from "./useFetchData";


const CharacterList = () => {
const [page, setPage] = useState(1);
const [statusFilter, setStatusFilter] = useState("");
const [speciesFilter, setSpeciesFilter] = useState("");

const characterList = useFetchData2(
  "https://rickandmortyapi.com/api/character",
  page,
  statusFilter,
  speciesFilter,
  console.log(statusFilter)
);

const loadMoreCharacters = () => {
  setPage(page + 1);
}

const handleStatusFilterChange = (e) => {
  setStatusFilter(e.target.value);
}

const handleSpeciesFilterChange = (e) => {
  console.log(e.target.value)
  setSpeciesFilter(e.target.value);
}

return (
  <>
    <h2>Characters</h2>
    <div className="filters">
      <select value={statusFilter} onChange={handleStatusFilterChange}>
        <option value="">All Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select value={speciesFilter} onChange={handleSpeciesFilterChange}>
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Robot">Robot</option>
        <option value="Humanoid">Humanoid</option>
      </select>
    </div>
    <div className="containerData">
      {characterList.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
    <button className="loadBtn" onClick={loadMoreCharacters}>Load More</button>
  </>
);
};

export default CharacterList;