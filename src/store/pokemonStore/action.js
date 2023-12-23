import { baseURL } from "../../constants/urls";
import axios from "axios";

const offset = 0;

const getAllPokemons =
  (limit = 40) =>
  async (dispatch) => {
    const response = await axios.get(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );

    const allPromises = response?.data?.results?.map(
      async ({ url }) => await axios.get(url)
    );

    const data = await axios.all(allPromises);

    const extractArray = data.map((obj) => obj.data);
    console.log(extractArray);
  };

const getLimitedPokemons = () => async (dispatch) => {
  const response = await axios.get(`${baseURL}pokemon?limit=100000&offset=0`);

  const allPromises = response?.data?.results?.map(
    async ({ url }) => await axios.get(url)
  );

  const data = await axios.all(allPromises);

  const extractArray = data.map((obj) => obj.data);
  console.log(extractArray);
};

export { getAllPokemons, getLimitedPokemons };
