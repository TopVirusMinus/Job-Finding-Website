import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setState } from "../store/searchQuerySlice";

const useSearch = () => {
  const dispatch = useDispatch();

  const handleSearch = (jobQuery, locationQuery) => {
    //console.log(jobQuery);
    dispatch(
      setState({
        job: jobQuery.current.value,
        location: locationQuery.current.value,
      })
    );
  };
  return handleSearch;
};

export default useSearch;
