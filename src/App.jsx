import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Fair } from "./pages";

import "./App.css";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Fair />
    </main>
  );
}

export default App;
