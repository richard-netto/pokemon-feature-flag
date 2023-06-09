import { IPokemon } from '../interfaces/IPokemon';

export interface IState {
  // Login
  isLoggedIn: boolean;
  logIn: (username: string, password: string) => Promise<void>;
  logOut: () => void;
  // Pokemon
  pokemonCache: IPokemon[];
  getPokemon: (searchParam: string) => Promise<IPokemon>;
  // Errors
  errorMessage: string;
  showError: boolean;
  setError: (errorMessage: string, showError: boolean) => void;
}
