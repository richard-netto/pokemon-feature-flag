import React from 'react';

// State
import useAppStore from '../../state/useAppStore';

const Application: React.FunctionComponent = (): JSX.Element => {
  const { logIn } = useAppStore();

  return (
    <div>
      <h1>Application</h1>

      <button onClick={logIn} type="button">
        Leave
      </button>
    </div>
  );
};

export default Application;
