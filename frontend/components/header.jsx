import React from 'react';

export default class Header extends React.Component {
  render() {
    return <tr className="text-left">
      <th width="50%" colSpan="2"><h1>IIT</h1></th>
      <th width="25%">
        <div>Tel: (631) 254-8600</div>
        <div>www.iit-inc.com</div>
      </th>
      <th width="25%">
        <div>Fax: (877)-624-7510</div>
        <div>accounting@iit-inc.com</div>
      </th>
    </tr>;
  }
}
