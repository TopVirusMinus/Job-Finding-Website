import { SearchForm } from "../SearchForm/SearchForm";
import { useRef } from "react";
import { setState } from "../../store/searchQuerySlice";
import { useDispatch } from "react-redux";

const Finder = () => {
  const dispatch = useDispatch();

  const jobQuery = useRef("");
  const locationQuery = useRef("");

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
      <SearchForm
        handleSearch={handleSearch}
        setJobQuery={setJobQuery}
        setLocationQuery={setLocationQuery}
      />
    </>
  );
};

export default Finder;
