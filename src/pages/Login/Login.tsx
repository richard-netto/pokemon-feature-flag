/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

// Hooks
import { useFlags } from 'flagsmith/react';

// State
import useAppStore from '../../state/useAppStore';

const Login: React.FunctionComponent = (): JSX.Element => {
  // Custom hooks
  const { logIn, setError } = useAppStore();
  const flags = useFlags(['application_layout_update_v2']);

  // States
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Functions
  const handleLogin = (): void => {
    logIn(username, password).catch(() => {
      setError('Username or Password invalid', true);
    });
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') handleLogin();
  };

  if (flags.application_layout_update_v2.enabled)
    return (
      <div className="grid gap-4 text-left">
        <h4 className="text-2xl font-extrabold uppercase text-white">Login</h4>

        <div className="grid gap-4">
          <label htmlFor="username" className="grid gap-1">
            <p className="font-medium text-white">Username</p>
            <input
              id="username"
              name="username"
              placeholder="Username"
              type="text"
              className="w-64 rounded-[4px] bg-neutral-950 px-3 py-1 text-white focus:outline-none"
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>

          <label htmlFor="password" className="grid gap-1">
            <p className="font-medium text-white">Password</p>
            <input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              className="w-64 rounded-[4px] bg-neutral-950 px-3 py-1 text-white focus:outline-none"
              onChange={(event) => setPassword(event.target.value)}
              onKeyDown={handleSubmit}
            />
          </label>
        </div>

        <button
          onClick={handleLogin}
          type="button"
          className="w-1/2 justify-self-center rounded-sm bg-neutral-300 py-1 text-sm font-bold text-black transition-all duration-75 hover:bg-white"
        >
          Enter
        </button>
      </div>
    );

  return (
    <div className="grid gap-4 text-left">
      <h4 className="text-2xl  font-extrabold text-red-800">Login:</h4>

      <div className="grid gap-4">
        <label htmlFor="username" className="grid gap-1">
          <p className="font-medium text-red-700">Username</p>
          <input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            className="w-64 px-3 py-1 text-black"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>

        <label htmlFor="password" className="grid gap-1">
          <p className="font-medium text-red-700">Password</p>
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            className="w-64 px-3 py-1 text-black"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      <button
        onClick={handleLogin}
        type="button"
        className="w-1/2 justify-self-center bg-red-500 transition-all hover:scale-105 hover:bg-red-700"
      >
        Enter
      </button>
    </div>
  );
};

export default Login;
