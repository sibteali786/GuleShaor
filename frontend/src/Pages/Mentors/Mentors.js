import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import "./Mentors.scss";
import Users from "../../components/Users/Users";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import { listMentors } from "../../actions/mentorActions";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate/Paginate";
const Mentors = () => {
  const dispatch = useDispatch();
  const mentorList = useSelector((state) => state.mentorList);
  const { loading, error, mentors, page, pages } = mentorList;
  var errorMentor = "";
  if (mentors.length === 0) {
    errorMentor = "No mentors found";
  }
  const params = useParams();
  const keyword = params?.keyword;
  const pageNumber = params?.pageNumber || 1;
  const [optionValue, setOptionValue] = React.useState("Name");
  useEffect(() => {
    if (optionValue) {
      dispatch(listMentors(keyword, pageNumber, optionValue));
    }
  }, [dispatch, keyword, pageNumber, optionValue]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="pt-[5rem] h-[500px] flex flex-col justify-center content-center">
          <Message>{error}</Message>
        </div>
      ) : !errorMentor ? (
        <div className="flex flex-col justify-center content-center p-[4rem]">
          <SearchBox
            optionValue={optionValue}
            setOptionValue={setOptionValue}
          />
          <Grid
            container
            spacing={2}
            rowSpacing={4}
            // className="px-[4rem] pt-[4rem] pb-5"
            style={{ marginTop: "0" }}
          >
            {mentors.map((mentor) => (
              <Grid key={mentor._id} item xs={12} sm={6} md={4} lg={3}>
                <Users mentor={mentor} />
              </Grid>
            ))}
          </Grid>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      ) : (
        <div className="pt-[4rem] h-[500px] flex flex-col justify-start content-center">
          <SearchBox
            optionValue={optionValue}
            setOptionValue={setOptionValue}
          />
          <Message severity="warning">{errorMentor}</Message>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      )}
    </>
  );
};

export default Mentors;
