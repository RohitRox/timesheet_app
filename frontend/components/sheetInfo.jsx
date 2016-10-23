import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';

import { updateDate } from '../actions/timetable';

export class SheetInfo extends React.Component {
  render() {
    return <tr>
      <td colSpan="2">
        <table className="ts">
          <tr>
            <td>Name</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>For week ending</td>
            <td>
              <DatePicker
                dateFormat="MM/DD/YYYY"
                selected={this.props.currrentDate}
                onChange={this.props.updateDate}
              />
            </td>
          </tr>
          <tr>
            <td>Client</td>
            <td><input type="text" /></td>
          </tr>
        </table>
      </td>
      <td colSpan="2"></td>
    </tr>;
  }
}

function mapStateToProps(state) {
  return { currrentDate: state.timetable.date }
}

function mapDispatchToProps(dispatch) {
  return {
    updateDate: function(date) {
      dispatch(updateDate(date));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SheetInfo);
