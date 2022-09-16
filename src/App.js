import { CardSection } from "./components/CardSection/CardSection";
import "./App.css";
import Map from "./components/Map/Map";
import Finder from "./components/Finder/Finder";
import JobSearching from "./components/JobSearching/JobSearching";
import PositionCards from "./components/PositionCards";
import JobResults from "./components/JobResults/JobResults";
import SidebarSearch from "./components/SidebarSearch/SidebarSearch";

function App() {
  return (
    <div className="App">
      <Map />
      <Finder />
      <div className="container">
        <div className="row mt-5 gx-5">
          <div className="col-8">
            <JobResults />
            <PositionCards />
            <CardSection />
          </div>
          <div className="col-4 shadow-sm">
            <SidebarSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
