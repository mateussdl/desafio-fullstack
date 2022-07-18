import React from "react";
import { Routes, Route, } from "react-router-dom";
import "./App.css";
import { Container } from "@mui/material";
import { Home, Details } from "./pages";

function App() {
  return(
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Details" element={<Details />} />
      </Routes>
    </Container>
  );
}

export default App;