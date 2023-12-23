import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";
import "./App.css";
import { Home, NotFound } from "./pages";
import {
  getAllPokemons,
  getLimitedPokemons,
} from "./store/pokemonStore/action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getLimitedPokemons());
  }, []);

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
