import axios from 'axios';

const loginAPI = axios.create({
  baseURL: process.env.REACT_APP_API_POKEMON_USERS,
});

export default loginAPI;
