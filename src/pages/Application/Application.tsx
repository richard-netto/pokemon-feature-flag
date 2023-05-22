import React, { useState } from 'react';

// State
import useAppStore from '../../state/useAppStore';
import { IPokemon } from '../../interfaces/IPokemon';

// Assets
import pokemonLogo from '../../assets/Pokemon_logo.png';

const Application: React.FunctionComponent = (): JSX.Element => {
  const { logOut, getPokemon, setError } = useAppStore();
  const [searchParam, setSearchParam] = useState<string>('');
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  const searchPokemon = async (): Promise<void> => {
    const pokemonSearched = await getPokemon(searchParam.toLowerCase()).catch(
      () => {
        setError('Pokemon not found', true);
      }
    );
    if (pokemonSearched) setPokemon(pokemonSearched);
  };

  const captalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') searchPokemon();
  };

  return (
    <div className="grid gap-4 text-left">
      <div className="w-[200px] justify-self-center">
        <img src={pokemonLogo} alt="Pokemon logo" className="h-auto w-full" />
      </div>

      <h4 className="text-2xl font-extrabold text-white">Search:</h4>

      <input
        type="text"
        placeholder="Pokemon name or number"
        className="w-64 rounded-[4px] bg-neutral-950 px-3 py-1 text-white focus:outline-none"
        onChange={(event) => setSearchParam(event.target.value)}
        onKeyDown={handleSubmit}
      />

      {pokemon && (
        <div className="grid rounded-md bg-neutral-800 px-4 py-2">
          <img
            src={pokemon.sprites.front_default}
            alt="Pokemon"
            className="aspect-square w-1/2 justify-self-center"
          />

          <p>
            <span className="font-bold">Number:</span> {pokemon.id}
          </p>
          <p>
            <span className="font-bold">Name:</span>{' '}
            {captalizeFirstLetter(pokemon.name)}
          </p>
        </div>
      )}

      <button
        onClick={logOut}
        type="button"
        className="w-1/2 justify-self-center rounded-sm bg-neutral-300 py-1 text-sm font-bold text-black transition-all duration-75 hover:bg-white"
      >
        Leave
      </button>
    </div>
  );
};

export default Application;
