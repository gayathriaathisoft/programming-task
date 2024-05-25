import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        bgcolor: "background.paper",
        textAlign: "center",
        mt: "auto",
      }}
    >
      <Typography variant="body1">&copy; 2023 My App</Typography>
    </Box>
  );
};

export default Footer;
