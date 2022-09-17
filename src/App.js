import { CardSection } from "./components/CardSection/CardSection";
import "./App.css";
import Map from "./components/Map/Map";
import Finder from "./components/Finder/Finder";
import PositionCards from "./components/PositionCards";
import JobResults from "./components/JobResults/JobResults";
import SidebarSearch from "./components/SidebarSearch/SidebarSearch";
import JobCarousel from "./components/JobCarousel/JobCarousel";
import { getJobs } from "./store/jobSlice";
import { getProfiles } from "./store/profileSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CandidatesSection from "./components/CandidatesSection/CandidatesSection";

function App() {
  const dispatch = useDispatch();
  useEffect(
    (_) => {
      dispatch(getJobs());
      dispatch(getProfiles());
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
        <CandidatesSection />
      </div>
    </div>
  );
}

export default App;
