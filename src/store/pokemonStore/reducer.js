import { pokemonsConstants } from "../../constants/actionTypes";

const {
  GET_ALL_POKEMONS,
  GET_LIMITED_POKEMONS,
  SEARCH_POKEMONS,
  TYPE_SELECTED,
  LOADING,
} = pokemonsConstants;

const initialState = {
  allPokemonsData: [],
  limitedPokemonsData: [],
  loading: false,
  searchTerm: "",
  typeSelected: "",
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.types) {
    case LOADING:
      return { ...state, loading: action.payload };
    case GET_ALL_POKEMONS:
      return { ...state, allPokemonsData: action.payload };
    case GET_LIMITED_POKEMONS:
      return { ...state, limitedPokemonsData: action.payload };
    case SEARCH_POKEMONS:
      return { ...state, searchTerm: action.payload };
    case TYPE_SELECTED:
      return { ...state, typeSelected: action.payload };
    default:
      return state;
  }
};
