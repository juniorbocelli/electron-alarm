export type Time = {
    hour: number;
    minute: number;
    second: number;
};

export type Scheduling = {
    active: boolean;
    time: Time;
};

export type SchedulesState = Map<Date, Scheduling>;