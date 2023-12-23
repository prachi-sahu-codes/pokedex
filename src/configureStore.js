import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { pokemonReducer } from "./store/pokemonStore/reducer";

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
