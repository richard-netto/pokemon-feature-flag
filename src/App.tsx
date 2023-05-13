import React from 'react';

// Components
import Login from './pages/Login/Login';
import Application from './pages/Application/Application';

// State
import useAppStore from './state/useAppStore';

const App = (): JSX.Element => {
  const { isLoggedIn } = useAppStore();
  return (
    // App Container
    <div className="text-center ">
      <div className="flex max-h-screen min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-800 text-lg text-white">
        {/* Login */}
        {!isLoggedIn && (
          <div className="rounded-md bg-red-100 p-4">
            <Login />
          </div>
        )}

        {/* Application */}
        {isLoggedIn && (
          <div className="rounded-md bg-red-100 p-4">
            <Application />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
