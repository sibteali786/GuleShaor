import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Users from "../../components/Users/Users";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { listStudents } from "../../actions/studentActions";
import { useParams } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";
import Paginate from "../../components/Paginate/Paginate";
const Students = () => {
  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.studentList);
  const { loading, error, students, page, pages } = studentList;
  var errorStudent = "";
  if (students?.length === 0) {
    errorStudent = "No Students found";
  }
  const params = useParams();
  const keyword = params?.keyword;
  const pageNumber = params?.pageNumber || 1;
  const [optionValue, setOptionValue] = React.useState("Name");
  useEffect(() => {
    if (optionValue) {
      console.log("Hello");
      dispatch(listStudents(keyword, pageNumber, optionValue));
    }
  }, [dispatch, keyword, pageNumber, optionValue]);
  return (
    <div className="pt-[4rem] flex flex-col justify-center content-center px-[4rem]">
      <SearchBox optionValue={optionValue} setOptionValue={setOptionValue} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : !errorStudent ? (
        <div className="flex flex-col justify-center content-center ">
          <Grid
            container
            spacing={2}
            rowSpacing={4}
            style={{ marginTop: "0" }}
            className="px-[4rem] pt-[2rem] pb-4"
          >
            {students.map((student) => (
              <Grid key={student._id} item xs={12} sm={6} md={4} lg={3}>
                <Users mentor={student} />
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
        <div className="pt-[4rem] h-[100vh] flex flex-col justify-start content-center">
          <SearchBox
            optionValue={optionValue}
            setOptionValue={setOptionValue}
          />
          <div className="flex h-full justify-center content-center ">
            <div className="flex justify-center gap-3 items-center divide-x-2 divide-gray-600">
              <h2 className="text-gray-500 text-lg">404</h2>
              <h2 className="pl-3 text-2xl">{errorStudent}</h2>
            </div>
          </div>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      )}
    </div>
  );
};

export default Students;
