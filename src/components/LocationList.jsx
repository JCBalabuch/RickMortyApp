import useFetchData from "./useFetchData";

const LocationList = () => {
  const locationList = useFetchData("https://rickandmortyapi.com/api/location");

  return (
    <>
      <h2>Locations</h2>
      <div className="containerData">
        {locationList.map((location) => (
          <>
            <div className="cardLocation" key={location.id}>
              <h3>{location.name}</h3>
              <p>{location.type}</p>
              <p>{location.dimension}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default LocationList;
