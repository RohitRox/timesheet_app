import React from 'react';

export default class Timetable extends React.Component {
  render() {
    return  <tr>
      <td colSpan="4">
        <table className="ts">
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>LUNCH BREAK</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Total Hours</th>
            <th>Comments</th>
          </tr>
          <tr>
            <td>08/06/2016</td>
            <td>Sunday</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>08/07/2016</td>
            <td>Monday</td>
            <td>10:00PM</td>
            <td>12:30PM</td>
            <td>LUNCH BREAK</td>
            <td>1:00PM</td>
            <td>6:00PM</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b>Weekly Total</b></td>
            <td><b>39.00</b></td>
            <td></td>
          </tr>
        </table>
      </td>
    </tr>;
  }
}
