import Card from "../components/Card";
import useFetchData from "./useFetchData";

const CharacterList = () => {
  const characterList = useFetchData(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <>
      <h2>Characters</h2>
      <div className="containerData">
        {characterList.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </>
  );
};

export default CharacterList;

// const CharacterList = () => {
//   const [characterList, setCharacterList] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const data = await fetch(
//         "https://rickandmortyapi.com/api/character"
//       ).then((response) => response.json());
//       setCharacterList(data.results);
//     })();
//   }, []);

//   return (
//     <>
//       {characterList.map((character) => (
//         <Card key={character.id} character={character} />
//       ))}
//     </>
//   );
// };

// export default CharacterList;

// AÑADIR ROUTER
