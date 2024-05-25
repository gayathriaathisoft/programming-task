import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PhotoCard = ({ title, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent style={{ height: 100 }}>
        {" "}
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
