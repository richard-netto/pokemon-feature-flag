import axios from 'axios';

const pokemonAPI = axios.create({
  baseURL: process.env.REACT_APP_API_POKEMON,
});

export default pokemonAPI;
