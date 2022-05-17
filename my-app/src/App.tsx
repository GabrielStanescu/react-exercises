import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Menu from './components/Menu';
import Home from './pages/Home';
import Details from './pages/Details';

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/details" element={<Details />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
