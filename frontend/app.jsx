import React from 'react';
import ReactDom from 'react-dom';

import Header from 'components/header';
import SheetInfo from 'components/sheetInfo';
import Timetable from 'components/timetable';
import SignatureSection from 'components/signatureSection';

class App extends React.Component {
  render() {
    return <div className="container">
      <table width="100%" className="ts">
        <Header />
        <SheetInfo />
        <Timetable />
        <SignatureSection />
      </table>
    </div>;
  }
}

ReactDom.render(<App />, document.getElementById('app'));
