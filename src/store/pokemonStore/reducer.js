import { pokemonsConstants } from "../../constants/actionTypes";

const {
  GET_ALL_POKEMONS,
  GET_LIMITED_POKEMONS,
  SEARCH_POKEMONS,
  GET_ALL_TYPES,
  TYPE_SELECTED,
  FILTERED_POKEMONS,
  CLEAR_FILTER,
  LOADING,
  ERROR,
} = pokemonsConstants;

const initialState = {
  allPokemonsData: [],
  limitedPokemonsData: [],
  loading: false,
  error: "",
  searchTerm: "",
  allTypes: [],
  typeSelected: "",
  filteredPokemons: [],
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case GET_ALL_POKEMONS:
      return { ...state, allPokemonsData: action.payload };
    case GET_LIMITED_POKEMONS:
      return {
        ...state,
        limitedPokemonsData: [...state.limitedPokemonsData, ...action.payload],
      };
    case SEARCH_POKEMONS:
      return { ...state, searchTerm: action.payload };
    case GET_ALL_TYPES:
      return { ...state, allTypes: action.payload };
    case TYPE_SELECTED:
      return { ...state, typeSelected: action.payload };
    case FILTERED_POKEMONS:
      const filteredArr =
        state.searchTerm.length > 0
          ? state.allPokemonsData.filter((pokemon) =>
              pokemon?.name
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
            )
          : state.allPokemonsData;
      const typeFilter =
        state.typeSelected.length > 0
          ? filteredArr.filter((pokemon) =>
              pokemon?.types.some(
                (obj) => obj.type.name === state.typeSelected.toLowerCase()
              )
            )
          : filteredArr;
      return { ...state, filteredPokemons: typeFilter };
    case CLEAR_FILTER:
      return {
        ...state,
        searchTerm: "",
        typeSelected: "",
        filteredPokemons: [],
      };
    default:
      return state;
  }
};
