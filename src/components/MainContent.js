import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MainContent = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: isMobile ? 8 : 10,
        ml: isMobile ? 0 : 30,
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
