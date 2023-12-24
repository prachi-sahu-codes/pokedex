import { baseURL } from "../../constants/urls";
import axios from "axios";
import { pokemonsConstants } from "../../constants/actionTypes";
const {
  GET_ALL_POKEMONS,
  GET_LIMITED_POKEMONS,
  SEARCH_POKEMONS,
  TYPE_SELECTED,
  GET_ALL_TYPES,
  LOADING,
} = pokemonsConstants;

const limit = 8;

const getLimitedPokemons =
  (offset = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: LOADING, payload: true });

      const response = await axios.get(
        `${baseURL}pokemon?limit=${limit}&offset=${offset}`
      );
      const allPromises = response?.data?.results?.map(
        async ({ url }) => await axios.get(url)
      );
      const data = await axios.all(allPromises);
      const extractArray = data.map((obj) => obj.data);
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: GET_LIMITED_POKEMONS, payload: extractArray });
    } catch (error) {
      dispatch({ type: LOADING, payload: false });
      console.error("Error fetching limited Pokemon data:", error);
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

const getAllPokemons = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });

    const response = await axios.get(`${baseURL}pokemon?limit=100000&offset=0`);
    const allPromises = response?.data?.results?.map(
      async ({ url }) => await axios.get(url)
    );
    const data = await axios.all(allPromises);
    const extractArray = data.map((obj) => obj.data);

    dispatch({ type: LOADING, payload: false });
    dispatch({ type: GET_ALL_POKEMONS, payload: extractArray });
  } catch (error) {
    dispatch({ type: LOADING, payload: false });
    console.error("Error fetching all Pokemon data:", error);
    dispatch({ type: "ERROR", payload: error.message });
  }
};

const getAllPokemonsType = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseURL}type`);
    const typeArr = response?.data?.results.map((obj, index) => ({
      id: index,
      text: obj?.name.charAt(0).toUpperCase() + obj?.name.slice(1),
    }));

    dispatch({ type: GET_ALL_TYPES, payload: typeArr });
  } catch (error) {
    console.error("Error fetching Pokemon types:", error);
    dispatch({ type: "ERROR", payload: error.message });
  }
};

export { getAllPokemons, getLimitedPokemons, getAllPokemonsType };
