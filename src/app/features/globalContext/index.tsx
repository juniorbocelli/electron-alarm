import React from 'react';

import useStates from './states';
import useSchedules from './schedules';
import {
  IGlobalContext
} from './types';

const GlobalContext = React.createContext({} as IGlobalContext);

interface IProps {
  children?: React.ReactNode
};

export const GlobalContextProvider: React.FC<IProps> = ({ children }) => {
  const states = useStates();

  return (
    <GlobalContext.Provider
      value={
        {
          schedules: states.schedules,
          scheduling: useSchedules(states),
        }
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  const context = React.useContext(GlobalContext);

  return context;
};