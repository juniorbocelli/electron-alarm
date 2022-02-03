import React from 'react';
import {
  SchedulesState,
} from './types';

export interface IUseStates {
  schedules: SchedulesState;
  setSchedules: React.Dispatch<React.SetStateAction<SchedulesState>>;
};

export default function useStates(): IUseStates {
  const [schedules, setSchedules] = React.useState<SchedulesState>(new Map());

  return {
    schedules,
    setSchedules,
  };
};