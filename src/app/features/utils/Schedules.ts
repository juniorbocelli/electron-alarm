import {
  Time,
  Scheduling,
  SchedulesState,
} from '@/app/features/globalContext/types';

class Schedules {
  static compareTwoTimes(time1: Time, time2: Time): 0 | 1 | -1 {
    // Return 0 if time1 === time2;
    // Return -1 if time1 < time2;
    // Return 1 if time1 > time2.
    if (time1.hour === time2.hour && time1.hour === time2.hour)
      return 0;

    if (time1.hour < time2.hour) {
      return -1;
    } else if (time1.hour === time2.hour && time1.minute < time2.minute) {
      return -1;
    } else {
      return 1;
    };
  };

  static compareTwoSchedules(scheduling1: Scheduling, Scheduling2: Scheduling): number {
    // Return 0 if Scheduling2 === time2;
    // Return -1 if Scheduling2 < time2;
    // Return 1 if Scheduling2 > time2.
    return this.compareTwoTimes(scheduling1.time, Scheduling2.time);
  };

  private static compareToSort(a: [Time, Scheduling], b: [Time, Scheduling]) {
    return this.compareTwoTimes(a[0], b[0]);
  };

  static getTimeFromDate(date: Date): Time {
    const time: Time = {
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
    };

    return time;
  };

  static getOrderedSchedules(schedules: SchedulesState): SchedulesState {
    return new Map<Time, Scheduling>([...schedules.entries()].sort(this.compareToSort));
  };
};

export default Schedules;