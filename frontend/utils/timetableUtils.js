import Moment from 'moment';

import { HOLIDAYS } from '../constants/dates';

const self = {
  getRowObjectsFor(startDate, endDate) {
    let dateRowObjects = {};
    const startFromDate = startDate.clone();
    for (startFromDate; startFromDate.isBefore(endDate); startFromDate.add(1, 'days')) {
      const day = startFromDate.format('dddd');
      dateRowObjects[day] = self.createRowObject({
        date: startFromDate.format("MM/DD/YYYY")
      });
    }

    return dateRowObjects;
  },

  createRowObject(args) {
    const timePeriods = {
      morningIn : args.morningIn || '10:00 AM',
      morningOut: args.morningOut || '12:30 PM',
      eveningIn : args.eveningIn || '1:00 PM',
      eveningOut: args.eveningOut || '6:15 PM'
    };
    const total = self.getTotalHours(timePeriods);
    const holiday = self.isHoliday(args.date);

    return Object.assign({}, timePeriods, {
      total: total,
      date: args.date,
      disabled: holiday.isIt,
      comment: holiday.msg
    });
  },

  recomputeRowObject(args) {
    const timePeriods = {
      morningIn : args.morningIn || '10:00 AM',
      morningOut: args.morningOut || '12:30 PM',
      eveningIn : args.eveningIn || '1:00 PM',
      eveningOut: args.eveningOut || '6:15 PM'
    };
    const total = self.getTotalHours(timePeriods);

    return Object.assign({}, args, timePeriods, {total: total});
  },

  getTotalHours(args) {
    const morningIn   = Moment(args.morningIn, 'hh:mm a');
    const morningOut  = Moment(args.morningOut, 'hh:mm a');
    const morningTime = morningOut.diff(morningIn, 'minutes');

    const eveningIn   = Moment(args.eveningIn, 'hh:mm a');
    const eveningOut  = Moment(args.eveningOut, 'hh:mm a');
    const eveningTime = eveningOut.diff(eveningIn, 'minutes');

    return (morningTime + eveningTime)/60;
  },

  isHoliday(dateMMDDYYYY) {
    const dayIndex = Moment(dateMMDDYYYY, "MM/DD/YYYY").get('day');
    let holiday  = { isIt: false, msg: ""};
    if([0,6].indexOf(dayIndex) > -1) {
      holiday.isIt = true;
    } else {
      const holidayCheck = HOLIDAYS[dateMMDDYYYY];
      if (holidayCheck) {
        holiday.isIt = true;
        holiday.msg = holidayCheck;
      }
    }

    return holiday;
  }
};

export default self;
