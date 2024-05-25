import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import MainContent from "./components/MainContent";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <CssBaseline />
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <SideMenu
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          <MainContent>
            <Routes>
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />

              <Route path="/" element={<Home />} />
            </Routes>
          </MainContent>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
