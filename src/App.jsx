import React from "react";
import { Routes, Route } from "react-router";
import { Home, NotFound } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
