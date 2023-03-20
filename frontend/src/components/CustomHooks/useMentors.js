import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMentors } from "../../actions/mentorActions";

function useMentors(optionValue, pageNumber, keyword) {
  const dispatch = useDispatch();
  const mentorList = useSelector((state) => state.mentorList);
  useEffect(() => {
    if (optionValue) {
      dispatch(listMentors(keyword, pageNumber, optionValue));
    }
  }, [dispatch, keyword, pageNumber, optionValue]);

  return mentorList;
}

export default useMentors;
