import { useFetchData } from "./useFetchData";

const EpisodesList = () => {
  const episodesList = useFetchData("https://rickandmortyapi.com/api/episode");

  return (
    <>
      <h2>Episodes</h2>
      <div className="containerData">
        {episodesList.map((episode) => (
          <>
            <div className="cardEpisode" key={episode.id}>
              <h3>{episode.name}</h3>
              <p>{episode.air_date}</p>
              <p>Epidode code: {episode.episode}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default EpisodesList;
