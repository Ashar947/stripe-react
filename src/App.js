import React from "react";
import {
  Route,
  BrowserRouter  as Router,
  Routes
} from "react-router-dom";
import Home from "./Pages/Home";
import ChargeCustomer from "./Pages/ChargeCustomer";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="2" element={<ChargeCustomer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;