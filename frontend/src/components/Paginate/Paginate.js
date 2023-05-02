import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  const location = useLocation();
  const path = location.pathname;
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
              path?.includes("query")
                ? keyword
                  ? `/query/search/${keyword}/page/${item.page}`
                  : `/query/page/${item.page}`
                : keyword
                ? `/students/search/${keyword}/page/${item.page}`
                : `/students/page/${item.page}`
            }
            {...item}
          />
        )}
      />
    )
  );
};

export default Paginate;
