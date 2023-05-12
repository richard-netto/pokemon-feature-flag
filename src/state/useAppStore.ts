/* eslint-disable import/no-unresolved */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Interfaces
import { IState } from './state';

const useAppStore = create<IState>()(
  devtools(
    persist(
      (set) => ({
        // Login
        isLoggedIn: false,
        logIn: async () => {
          // const response = await fetch('URL')
          set(({ isLoggedIn }) => ({ isLoggedIn: !isLoggedIn }));
        },
      }),
      { name: 'pokemon-app-store', version: 0 }
    )
  )
);

export default useAppStore;
