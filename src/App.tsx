import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import NotFound from "./Pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import Cursor from "./components/Cursor";

const App: React.FC = () => {
  return (
    <Router>
      
      <Navigation />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/agence" Component={Agence} />
        <Route path="/contact" Component={Contact} />
        <Route Component={NotFound} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
