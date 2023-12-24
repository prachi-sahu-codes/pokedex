import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Filter,
  Loader,
  PokemonCard,
  PokemonModal,
} from "../../components";
import { pokemonsConstants } from "../../constants/actionTypes";
import { getLimitedPokemons } from "../../store/pokemonStore/action";

const Home = () => {
  const dispatch = useDispatch();
  const { limitedPokemonsData, loading } = useSelector(
    ({ pokemons }) => pokemons
  );
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  useEffect(() => {
    // dispatch(getLimitedPokemons(page * 8));
  }, [page]);
  return (
    <div>
      <Filter />
      <div className="p-2 pl-6 flex justify-between items-center gap-2">
        <p className="font-semibold text-lg text-gray-600">Pokemons</p>
        <Button
          text="Clear Filter"
          action={() => dispatch({ type: pokemonsConstants.CLEAR_FILTER })}
        />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <ul className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 pr-7">
          {limitedPokemonsData
            ?.slice(page * 8 - 8, page * 8)
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
      )}
      <div className="flex justify-between p-4">
        <Button text="Previous" onClick={() => selectPageHandler(page - 1)} />
        <Button text="Next" onClick={() => selectPageHandler(page + 1)} />
      </div>
      <PokemonModal
        open={open}
        handleClose={handleClose}
        pokemonData={pokemonData}
      />
    </div>
  );
};

export default Home;
