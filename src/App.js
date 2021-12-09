import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes path="/" component={LandingPage}></Routes>
      </Router>
    </div>
  );
}

export default App;
