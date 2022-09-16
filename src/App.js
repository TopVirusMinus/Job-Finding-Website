import "./App.css";
import Map from "./components/Map/Map";
import Finder from "./components/Finder/Finder";
import JobSearching from "./components/JobSearching/JobSearching";
import PositionCards from "./components/PositionCards";

function App() {
  return (
    <div className="App">
      <Map />
      <div className="container">
        <Finder />
        <JobSearching />
        <PositionCards />
      </div>
    </div>
  );
}

export default App;
