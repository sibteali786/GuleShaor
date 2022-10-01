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
          rowSpacing={4}
          style={{ marginTop: "0" }}
          className="px-[4rem] pt-[4rem] pb-5"
        >
          {students.map((student) => (
            <Grid key={student._id} item xs={12} sm={6} md={4} lg={3}>
              <Users mentor={student} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Students;
