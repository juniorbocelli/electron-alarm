export type Time = {
  hour: number;
  minute: number;
};

export type Scheduling = {
  active: boolean;
  time: Time;
};

export type SchedulesState = Map<Time, Scheduling>;

export interface IUseStates {
  schedules: SchedulesState;
  setSchedules: React.Dispatch<React.SetStateAction<SchedulesState>>;
};

export interface IUseSchedules {
  addScheduling: (scheduling: Scheduling) => void;
  removeScheduling: (time: Time) => void;
  desactiveScheduling: (time: Time) => void;
  getNext: () => null | Scheduling;
};

export interface IGlobalContext {
  schedules: SchedulesState;
  scheduling: IUseSchedules;
};