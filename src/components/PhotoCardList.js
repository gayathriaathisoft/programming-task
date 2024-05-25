import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PhotosList = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPhotos(page);
  }, [page]);

  const fetchPhotos = (page) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=6`)
      .then((response) => {
        const totalPages = Math.ceil(
          Number(response.headers.get("X-Total-Count")) / 6
        );
        setTotalPages(totalPages);
        return response.json();
      })
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error fetching photos:", error));
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4} lg={3}>
            <PhotoCard title={photo.title} imageUrl={photo.url} />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default PhotosList;
