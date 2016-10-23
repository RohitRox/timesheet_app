import React from 'react';
import { connect } from 'react-redux';

import TimetableRow from './timetableRow';
import { updateTimetable, toggleRowStatus } from '../actions/timetable';

export class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.onTimeChange = this._onTimeChange.bind(this);
    this.toggleRowStatus = this._toggleRowStatus;
  }

  getDayRows() {
    let rows = [];
    for(let key in this.props.rowObjects){
      const rowObj = this.props.rowObjects[key];
      rows.push(
        <TimetableRow
          rowObject={rowObj}
          day={key}
          onTimeChange={this.onTimeChange}
          toggleRowStatus={this.toggleRowStatus.bind(this, key)}  />
      );
    }
    return rows;
  }

  _onTimeChange(e) {
    const value = e.target.value;
    const day = e.target.getAttribute('rel');
    const timeFor = e.target.getAttribute('name');
    this.props.updateTimetable({
      value: value,
      day: day,
      timeFor: timeFor
    });
  }

  _toggleRowStatus(day) {
    this.props.toggleRowStatus(day);
  }

  getTotal() {
    const totalsArray = Object.values(this.props.rowObjects).map((row) => {
      return row.disabled ? 0 : row.total;
    });
    return totalsArray.reduce(function(prev,current){
      return prev+current;
    });
  }

  render() {
    return  <tr>
      <td colSpan="4">
        <table className="ts">
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th className="break">LUNCH BREAK</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Total Hours</th>
            <th>Comments</th>
          </tr>
          { this.getDayRows() }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b>Weekly Total</b></td>
            <td><b>{this.getTotal()} Hrs</b></td>
            <td></td>
          </tr>
        </table>
      </td>
    </tr>;
  }
}

function mapStateToProps(state) {
  return { rowObjects: state.timetable.rowObjects }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTimetable: function(args) {
      dispatch(updateTimetable(args))
    },
    toggleRowStatus: function(day) {
      dispatch(toggleRowStatus(day))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timetable);
