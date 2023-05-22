/* eslint-disable import/no-unresolved */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { sha1 } from 'object-hash';

// Interfaces
import { IState } from './state';
import { IUsersResponse } from '../interfaces/Responses/IUsersResponse';
import { IPokemonResponse } from '../interfaces/Responses/IPokemonResponse';

// Api
import loginAPI from '../apis/loginAPI';
import pokemonAPI from '../apis/pokemonAPI';

const useAppStore = create<IState>()(
  devtools(
    persist(
      (set, get) => ({
        // Login
        isLoggedIn: false,
        logIn: async (username, password) => {
          const { data: users } = await loginAPI.get<IUsersResponse>('users');

          const hashUsername = sha1(username);
          const hashPassword = sha1(password);

          const foundUser = users.find(
            (user) =>
              user.username === hashUsername && user.password === hashPassword
          );

          if (foundUser) set(() => ({ isLoggedIn: true }));
          else throw new Error('Incorrect User or Password');
        },
        logOut: () => {
          set(() => ({ isLoggedIn: false }));
        },
        // Pokemon
        pokemonCache: [],
        getPokemon: async (searchParam) => {
          // Get cached result
          const cachedPokemon = get().pokemonCache.find(
            (pokemonElement) =>
              pokemonElement.id === Number(searchParam) ||
              pokemonElement.name === searchParam
          );
          if (cachedPokemon) return cachedPokemon;

          // Get API result
          const { data: pokemon } = await pokemonAPI.get<IPokemonResponse>(
            `pokemon/${searchParam}`
          );

          // Limit Cache to 5 pokemon
          const cachedPokemonArray = get().pokemonCache;
          if (cachedPokemonArray.length > 4) cachedPokemonArray.shift();

          set(() => ({
            pokemonCache: [...cachedPokemonArray, pokemon],
          }));
          return pokemon;
        },
        // Error
        errorMessage: '',
        showError: false,
        setError: (errorMessage, showError) => {
          set(() => ({ errorMessage, showError }));
        },
      }),
      { name: 'pokemon-app-store', version: 1 }
    ),
    { enabled: process.env.REACT_APP_DEVELOPMENT === 'development' }
  )
);

export default useAppStore;
