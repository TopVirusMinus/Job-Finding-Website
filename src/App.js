import "./App.css";
import Map from "./components/Map/Map";
import Finder from "./components/Finder/Finder";
import JobSearching from "./components/JobSearching/JobSearching";

function App() {
  return (
    <div className="App">
      <Map />
      <div className="container">
        <Finder />
        <JobSearching />
      </div>
    </div>
  );
}

export default App;
