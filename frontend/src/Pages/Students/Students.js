import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Users from "../../components/Users/Users";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { listStudents } from "../../actions/studentActions";
const Students = () => {
  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.studentList);
  const { loading, error, students } = studentList;
  useEffect(() => {
    dispatch(listStudents());
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
          style={{ padding: "4rem 2rem", marginTop: "0" }}
        >
          {students.map((student) => (
            <Grid key={student._id} item sm={6} md={4} lg={3}>
              <Users mentor={student} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Students;
