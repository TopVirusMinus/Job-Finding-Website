import "./App.css";
import Map from "./components/Map/Map";
import Finder from "./components/Finder/Finder";

function App() {
  return (
    <div className="App">
      <Map />
      <div className="container">
        <Finder />
      </div>
    </div>
  );
}

export default App;
