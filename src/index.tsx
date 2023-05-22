/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

// FlagSmith
import flagsmith from 'flagsmith';
import { FlagsmithProvider } from 'flagsmith/react';

// Components
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <FlagsmithProvider
      flagsmith={flagsmith}
      options={{
        environmentID: process.env.REACT_APP_FLAGSMITH_ENVIRONMENT_ID ?? '',
        realtime: true,
        cacheFlags: true,
      }}
    >
      <App />
    </FlagsmithProvider>
  </React.StrictMode>
);
