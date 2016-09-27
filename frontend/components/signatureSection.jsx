import React from 'react';

export default class SignatureSection extends React.Component {
  render() {
    return <tr className="sign">
      <td colSpan="2">
        <h2>Consultant&apos;s Signature</h2>
        <span>By signing above, the consultant agrees to the hours worked in the week</span>
      </td>
      <td colSpan="2">
        <h2>Client Manager&apos;s Signature</h2>
        <span>By signing above, the client agrees to the services rendered
        and authorizes release of payments  to IIT
        </span>
      </td>
    </tr>;
  }
}
