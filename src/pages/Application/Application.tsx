import React, { useState } from 'react';

// State
import useAppStore from '../../state/useAppStore';
import { IPokemon } from '../../interfaces/IPokemon';

const Application: React.FunctionComponent = (): JSX.Element => {
  const { logOut, getPokemon } = useAppStore();
  const [searchParam, setSearchParam] = useState<string>('');
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  const searchPokemon = async (): Promise<void> => {
    const pokemonSearched = await getPokemon(searchParam.toLowerCase());
    setPokemon(pokemonSearched);
  };

  return (
    <div className="grid gap-4 text-left">
      <h4 className="text-2xl  font-extrabold text-red-800">Pokemon search:</h4>

      <input
        type="text"
        placeholder="Pokemon name or number"
        className="w-64 px-3 py-1 text-black"
        onChange={(event) => setSearchParam(event.target.value)}
      />

      <button
        onClick={searchPokemon}
        type="button"
        className="bg-red-500 transition-all hover:scale-105 hover:bg-red-700"
      >
        Search
      </button>

      {pokemon && (
        <img
          src={pokemon.sprites.front_default}
          alt="Pokemon"
          className="aspect-square w-1/2 justify-self-center bg-white"
        />
      )}

      <button
        onClick={logOut}
        type="button"
        className="w-1/2 justify-self-center bg-zinc-500 hover:bg-zinc-700"
      >
        Leave
      </button>
    </div>
  );
};

export default Application;
