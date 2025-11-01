import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/user/LandingPage";
import Listing from "./page/user/listing";
import Order from "./page/user/order";
import NavBar from "./components/ui/navbar";


const App = () => {
  return (
    <Router>
      <NavBar />

      <div className="pt-24">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
