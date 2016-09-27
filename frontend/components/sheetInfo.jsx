import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

export default class SheetInfo extends React.Component {
  constructor(props) {
    super(props);

    this._handleChange = this.handleChange.bind(this);

    this.state = {
      startDate: Moment()
    };
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.props.onDateSelect(date);
  }

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
                selected={this.state.startDate}
                onChange={this._handleChange}
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
