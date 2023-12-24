import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { pokemonsConstants } from "../../constants/actionTypes";
import { getAllPokemonsType } from "../../store/pokemonStore/action";
import { debounce } from "../../utils/utils";

const Filter = () => {
  const navigate = useNavigate();

  const { searchTerm, allTypes, typeSelected } = useSelector(
    ({ pokemons }) => pokemons
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemonsType());
  }, []);

  const debouncedSearch = debounce(() => {
    dispatch({
      type: pokemonsConstants.FILTERED_POKEMONS,
    });
  }, 500);

  const searchHandler = (event) => {
    navigate("/search");
    const newSearchTerm = event.target.value;
    dispatch({ type: "SEARCH_POKEMONS", payload: newSearchTerm });
    debouncedSearch(newSearchTerm);
  };
  const typeHandler = (event) => {
    navigate("/search");
    const typeSelected = event.target.value;
    console.log(typeSelected);
    dispatch({
      type: pokemonsConstants.TYPE_SELECTED,
      payload: typeSelected,
    });
    dispatch({
      type: pokemonsConstants.FILTERED_POKEMONS,
    });
  };

  return (
    <div className="grid gap-5 sm:grid-cols-3 m-4 mb-0">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search your pokemons..."
        onChange={(e) => searchHandler(e)}
        className="col-span-2 border-2 border-gray-500 p-1 px-4 rounded-full "
      />
      <select
        className="border-2 border-gray-500 p-1 px-4 rounded-full"
        onChange={(e) => typeHandler(e)}
        value={typeSelected}
      >
        <option value="" disabled selected>
          Select Type
        </option>
        {allTypes?.map(({ id, text }) => (
          <option key={id} className="capitalize" value={text}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
