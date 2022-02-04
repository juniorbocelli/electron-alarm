import React from 'react';
import {
  SchedulesState,

  IUseStates,
} from './types';

export default function useStates(): IUseStates {
  const [schedules, setSchedules] = React.useState<SchedulesState>(new Map());

  return {
    schedules,
    setSchedules,
  };
};