import {
  IUseSchedules,
  IUseStates,

  Scheduling,
  Time,
} from './types';

import Schedules from '@/app/features/utils/Schedules';

export default function useSchedules(states: IUseStates): IUseSchedules {
  const addScheduling = (scheduling: Scheduling) => {
    const {
      schedules,
      setSchedules,
    } = states;

    setSchedules(schedules.set(scheduling.time, scheduling));
  };

  const removeScheduling = (time: Time) => {
    const {
      schedules,
      setSchedules,
    } = states;

    schedules.delete(time);

    setSchedules(schedules);
  };

  const desactiveScheduling = (time: Time) => {
    const {
      schedules,
    } = states;

    let schedule = schedules.get(time);

    if (typeof(schedule) !== 'undefined') {
      schedule.active = false;

      addScheduling(schedule);
    };
  };

  const getNext = (): null | Scheduling => {
    const {
      schedules,
    } = states;

    const arrayOfSchedules = [...Schedules.getOrderedSchedules(schedules).entries()];

    if (arrayOfSchedules.length === 0)
      return null;

    return arrayOfSchedules[arrayOfSchedules.length - 1][1];
  };

  return {
    addScheduling,
    removeScheduling,
    desactiveScheduling,
    getNext,
  }
};