import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import CharacterList from './components/CharacterList';
import EpisodesList from './components/EpisodesList';
import LocationList from './components/LocationList';
import Footer from './components/Footer/Footer';

function App() {

  const [page, setPage] = useState("characters");

  return (
      <div className="App">
        <Header />
        <div className="container">
          <nav className="navButtons">
            <ul>
              <li onClick={() => setPage("characters")}>Go to Characters</li>
              <li onClick={() => setPage("locations")}>Go to Locations</li>
              <li onClick={() => setPage("episodes")}>Go to Episodes</li>
            </ul>
          </nav>
          { page === "characters" && <CharacterList /> }
          { page === "locations" && <LocationList /> }
          { page === "episodes" && <EpisodesList /> }
        </div>
        <Footer />
      </div>
  )
}

export default App
