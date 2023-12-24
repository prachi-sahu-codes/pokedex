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
  const [page, setPage] = useState(0);
  const [pokemonData, setPokemonData] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectPageHandler = (selectedPage) => {
    console.log(selectedPage);
    if (
      selectedPage >= 0 &&
      selectedPage <= filteredPokemons.length / 8 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <div>
      <Filter />
      <div className="p-4 flex justify-between items-center gap-2">
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            className="bg-gray-500 hover:bg-gray-600 rounded-full shadow-md p-2"
          >
            <IoMdArrowRoundBack className="w-5 h-5 text-white" />
          </Link>
          <p className="font-semibold text-gray-500">Showing search results</p>
        </div>
        <Button
          text="Clear Filter"
          action={() => dispatch({ type: pokemonsConstants.CLEAR_FILTER })}
        />
      </div>
      {loading ? (
        <Loader />
      ) : filteredPokemons.length > 0 ? (
        <ul className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 pr-7">
          {filteredPokemons
            .slice((page + 1) * 8 - 8, (page + 1) * 8)
            ?.map((pokemon) => (
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
      ) : (
        <div className="relative h-96">
          <p className="absolute text-lg text-gray-500 font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Sorry, we couldn't find any Pokemon matching your search!!
          </p>
        </div>
      )}
      <div className="flex justify-between p-4">
        <Button text="Previous" action={() => selectPageHandler(page - 1)} />
        <Button text="Next" action={() => selectPageHandler(page + 1)} />
      </div>
      <PokemonModal
        open={open}
        handleClose={handleClose}
        pokemonData={pokemonData}
      />
    </div>
  );
};

export default Search;
