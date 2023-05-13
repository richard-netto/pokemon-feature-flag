/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

// State
import useAppStore from '../../state/useAppStore';

const Login: React.FunctionComponent = (): JSX.Element => {
  const { logIn } = useAppStore();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (): void => {
    logIn(username, password).catch((error) => {
      console.log(error);
    });
  };

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
