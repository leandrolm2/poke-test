import React from "react";
import { Routes, Route } from "react-router-dom";

import Pokedex from "./pages"
import Details from "./pages/details"

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default App;
