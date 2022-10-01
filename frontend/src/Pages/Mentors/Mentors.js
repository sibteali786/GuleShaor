import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import "./Mentors.scss";
import Users from "../../components/Users/Users";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import { listMentors } from "../../actions/mentorActions";
import Loader from "../../components/Loader/Loader";
const Mentors = () => {
  const dispatch = useDispatch();
  const mentorList = useSelector((state) => state.mentorList);
  const { loading, error, mentors } = mentorList;
  useEffect(() => {
    dispatch(listMentors());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Grid
          container
          spacing={2}
          rowSpacing={4}
          className="px-[4rem] pt-[4rem] pb-5"
          style={{ marginTop: "0" }}
        >
          {mentors.map((mentor) => (
            <Grid key={mentor._id} item xs={12} sm={6} md={4} lg={3}>
              <Users mentor={mentor} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Mentors;
