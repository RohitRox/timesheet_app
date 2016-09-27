import React from 'react';

export default class Timetable extends React.Component {
  getDayRows() {
    const startDate = this.props.startOfWeek;
    const endDate = this.props.endOfWeek;
    let dayRows = [];

    for (startDate; startDate.isBefore(endDate); startDate.add(1, 'days')) {
      dayRows.push(
        <tr>
          <td>{startDate.format("MM/DD/YYYY")}</td>
          <td>{startDate.format('dddd')}</td>
          <td></td>
          <td></td>
          <td className="break"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
    return dayRows;
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
            <td><b>40.00</b></td>
            <td></td>
          </tr>
        </table>
      </td>
    </tr>;
  }
}
