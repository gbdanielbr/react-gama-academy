import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Contact";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Dashboard from "./views/Dash"

const ReactRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRoutes;