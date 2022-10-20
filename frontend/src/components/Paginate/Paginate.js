import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import {
  Link,
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination
        className="self-center my-6"
        page={page}
        count={pages}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={
              keyword
                ? `/mentors/search/${keyword}/page/${item.page}`
                : `/mentors/page/${item.page}`
            }
            {...item}
          />
        )}
      />
    )
  );
};

export default Paginate;
