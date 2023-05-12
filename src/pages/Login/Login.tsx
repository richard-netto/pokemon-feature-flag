import React from 'react';

// State
import useAppStore from '../../state/useAppStore';

const Login: React.FunctionComponent = (): JSX.Element => {
  const { logIn } = useAppStore();

  return (
    <div>
      <h1>Login</h1>

      <button onClick={logIn} type="button">
        Enter
      </button>
    </div>
  );
};

export default Login;
