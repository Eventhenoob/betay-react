import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import NotFound from "./Pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import News from "./Pages/News";
import SingleNews from "./Pages/SingleNews"; // Import the component for single news
import AddNews from "./Pages/AddNews";
import Client from "./Pages/Client";
import Initial from "./Pages/Initial";

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addNews" element={<AddNews />} />
        <Route path="/actualites" element={<News />} />
        <Route path="/actualites/:id" element={<SingleNews />} />
        <Route path="/clients" element={<Client />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
