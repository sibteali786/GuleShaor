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
  const params = useParams();
  const keyword = params?.keyword;
  const pageNumber = params?.pageNumber || 1;
  console.log(pageNumber);
  useEffect(() => {
    dispatch(listMentors(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="flex flex-col justify-center content-center p-[4rem]">
          <SearchBox />
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
      )}
    </>
  );
};

export default Mentors;
