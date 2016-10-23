import Moment from 'moment';

import TimetableUtils from '../utils/timetableUtils';

let initialState = {
  date: Moment(),
  rowObjects: TimetableUtils.getRowObjectsFor(Moment().startOf('week'), Moment().endOf('week'))
}

function upateAndGetRows(state, action) {
  const day = action.payload.day;
  const payload = action.payload;
  const dayRow = Object.assign({}, state.rowObjects[day], payload[day]);
  const recomputedDayRow = TimetableUtils.recomputeRowObject(dayRow);
  return Object.assign({}, state.rowObjects, {
    [day]: recomputedDayRow
  });
}

export default function timetable(state = initialState, action) {
  switch (action.type)
  {
    case 'UPDATE_TIMETABLE':
      return Object.assign({}, state, {
        rowObjects: upateAndGetRows(state, action)
      });
    case 'UPDATE_DATE':
      return Object.assign({}, state, {
        date: action.date.clone(),
        rowObjects: TimetableUtils.getRowObjectsFor(action.date.clone().startOf('week'), action.date.clone().endOf('week'))
      });
    case 'TOGGLE_ROW':
      const day = action.day;
      const rowObject = state.rowObjects[day];
      const newRowObject = Object.assign({}, rowObject, {disabled: !rowObject.disabled});
      const newRowObjects = Object.assign({}, state.rowObjects, {
        [day]: newRowObject
      });
      return Object.assign({}, state, {
        rowObjects: newRowObjects
      });
    default:
      return state;
  }
}
