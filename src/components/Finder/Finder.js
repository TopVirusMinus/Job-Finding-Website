import { SearchForm } from "../SearchForm/SearchForm";
import CSS from "./Finder.module.css";
import { useRef } from "react";
import { setState } from "../../store/searchQuerySlice";
import { useDispatch } from "react-redux";

const Finder = () => {
  const dispatch = useDispatch();

  const jobQuery = useRef("");
  const locationQuery = useRef("");
  const categoryQuery = useRef("");

  const handleSearch = (e) => {
    dispatch(
      setState({
        job: jobQuery.current.value,
        location: locationQuery.current.value,
      })
    );
  };

  return (
    <>
      <SearchForm
        jobQuery={jobQuery}
        locationQuery={locationQuery}
        categoryQuery={categoryQuery}
        handleSearch={handleSearch}
      />
    </>
  );
};

export default Finder;
