import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import PhotosList from "../components/PhotoCardList";

const Home = () => {
  return (
    <Fragment>
      <Typography variant="h4">Home Page</Typography>
      <PhotosList />
    </Fragment>
  );
};

export default Home;
