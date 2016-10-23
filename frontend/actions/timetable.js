export function updateTimetable(args) {
  let rowPayload = {
    day: args.day
  };
  rowPayload[args.day] = {
    [args.timeFor]: args.value
  };
  return {
    type: 'UPDATE_TIMETABLE',
    payload: rowPayload
  }
}

export function updateDate(date) {
  return {
    type: 'UPDATE_DATE',
    date: date
  }
}

export function toggleRowStatus(day) {
  return {
    type: 'TOGGLE_ROW',
    day: day
  }
}
