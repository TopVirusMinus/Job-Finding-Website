import { CardSection } from "./components/CardSection/CardSection";
import "./App.css";
import Map from "./components/Map/Map";
import Finder from "./components/Finder/Finder";
import PositionCards from "./components/PositionCards";
import JobResults from "./components/JobResults/JobResults";
import SidebarSearch from "./components/SidebarSearch/SidebarSearch";
import JobCarousel from "./components/JobCarousel/JobCarousel";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobs } from "./store/jobSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(
    (_) => {
      dispatch(getJobs());
    },
    [dispatch]
  );

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
          <div className="col-4">
            <SidebarSearch />
            <JobCarousel />
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-center text-white"
        style={{ backgroundColor: "#4f53d2", height: "300px" }}
      >
        <p>Find Top Talents</p>
      </div>
    </div>
  );
}

export default App;
