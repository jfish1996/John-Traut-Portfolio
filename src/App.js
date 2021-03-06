import React from "react";
import "./App.css";
import Layout from "./components/containers/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
