/* eslint-disable import/no-unresolved */
import React from 'react';

// Components
import Login from './pages/Login/Login';
import Application from './pages/Application/Application';
import Toast from './components/Toast/Toast';

// State
import useAppStore from './state/useAppStore';
import AppContainer from './components/AppContainer/AppContainer';

const App = (): JSX.Element => {
  const { isLoggedIn } = useAppStore();

  return (
    // App Container
    <div className="relative text-center">
      <Toast />
      <div className="flex max-h-screen min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-800 text-lg text-white">
        {/* Login */}
        {!isLoggedIn && (
          <AppContainer>
            <Login />
          </AppContainer>
        )}

        {/* Application */}
        {isLoggedIn && (
          <AppContainer>
            <Application />
          </AppContainer>
        )}
      </div>
    </div>
  );
};

export default App;
