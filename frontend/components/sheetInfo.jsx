import React from 'react';

export default class SheetInfo extends React.Component {
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
            <td><input type="text" /></td>
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
