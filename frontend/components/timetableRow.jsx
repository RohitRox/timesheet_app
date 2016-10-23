import React from 'react';

import SelectInput from '../shared/selectInput';

export default class TimetableRow extends React.Component {
  getSelectField(name, value) {
    return (
      <SelectInput
        rel={this.props.day}
        selected={this.props.rowObject[name]}
        onChange={this.props.onTimeChange}
        name={name} />
    );
  }

  render() {
    const {rowObject, day, toggleRowStatus} = this.props;
    return <tr>
      <td>
        <input type="checkbox" checked={!rowObject.disabled} onClick={toggleRowStatus} className="no-print" />
        {rowObject.date}
      </td>
      <td>{day}</td>
      <td>
        { !rowObject.disabled && this.getSelectField('morningIn') }
      </td>
      <td>
        { !rowObject.disabled && this.getSelectField('morningOut') }
      </td>
      <td className="break"></td>
      <td>
        { !rowObject.disabled && this.getSelectField('eveningIn') }
      </td>
      <td>
        { !rowObject.disabled && this.getSelectField('eveningOut') }
      </td>
      <td>{ !rowObject.disabled && `${rowObject.total} Hr` }</td>
      <td>{ rowObject.comment }</td>
    </tr>;
  }
}
