import React, { useState } from "react";
import {
  Button,
  Filter,
  Loader,
  PokemonCard,
  PokemonModal,
} from "../../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import { pokemonsConstants } from "../../constants/actionTypes";

const Search = () => {
  const dispatch = useDispatch();
  const { filteredPokemons, loading } = useSelector(({ pokemons }) => pokemons);
  const [open, setOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Filter />
      <div className="p-4 flex items-center gap-2">
        <Link
          to="/"
          className="bg-gray-500 hover:bg-gray-600 rounded-full shadow-md p-2"
        >
          <IoMdArrowRoundBack className="w-5 h-5 text-white" />
        </Link>
        <Button
          text="Clear Filter"
          action={() => dispatch({ type: pokemonsConstants.CLEAR_FILTER })}
        />
        <p className="font-semibold text-gray-500">
          {filteredPokemons.length} Search Results found
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <ul className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 pr-7">
          {filteredPokemons?.map((pokemon) => (
            <li
              key={pokemon?.id}
              onClick={() => {
                setPokemonData(pokemon);
                handleOpen();
              }}
            >
              <PokemonCard pokemon={pokemon} />
            </li>
          ))}
        </ul>
      )}
      <PokemonModal
        open={open}
        handleClose={handleClose}
        pokemonData={pokemonData}
      />
    </div>
  );
};

export default Search;
