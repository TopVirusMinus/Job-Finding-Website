import { ImSearch } from "react-icons/im";
import { InputComponent } from "../InputComponent/InputComponent";
import { CategorySelect } from "../CategorySelect/CategorySelect";
import { SearchButton } from "../SearchButton/SearchButton";
import { setState } from "../../store/searchQuerySlice";
import { useDispatch } from "react-redux";
import Accordion from "../Accordion/Accordion";
import { useRef } from "react";

const SidebarSearch = () => {
  const jobQuery = useRef("");
  const locationQuery = useRef("");
  const dispatch = useDispatch();

  const setJobQuery = (e) => {
    jobQuery.current = e.target.value;
  };

  const setLocationQuery = (e) => {
    locationQuery.current = e.target.value;
  };

  const handleSearch = () => {
    dispatch(
      setState({
        job: jobQuery.current,
        location: locationQuery.current,
      })
    );
  };

  return (
    <>
      <div className="row p-3 border">
        <div className="container">
          <ImSearch />
          <span className="ms-5 fw-bold">Start Searching</span>
        </div>
      </div>
      <div className="row">
        <div className="container border">
          <InputComponent
            handleChange={setJobQuery}
            className="mt-3"
            label={"Job"}
            type="text"
            id={"jobInput"}
            placeholder={"job title, Keywords"}
          />
          <InputComponent
            handleChange={setLocationQuery}
            className="mt-3"
            label={"Location"}
            type="text"
            id={"locationInput"}
            placeholder={"City, province or region"}
          />
          <CategorySelect className="mt-3" />
          <Accordion
            parentId="ContactAccordion"
            id="flush-collapseOne"
            flushId="flush-headingOne"
            title="Contact Type"
            body="UnderConstruction"
            containerClass="mt-2"
          />
          <Accordion
            parentId="SpecialismsAccordion"
            id="flush-collapseTwo"
            flushId="flush-headingTwo"
            title="Specialisms"
            body="UnderConstruction"
          />
          <div className="h-25 mt-3">
            <SearchButton handleSearch={handleSearch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarSearch;
