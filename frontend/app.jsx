import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import Header from 'components/header';
import SheetInfo from 'components/sheetInfo';
import Timetable from 'components/timetable';
import SignatureSection from 'components/signatureSection';
import configureStore from './store/configureStore';

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

ReactDom.render(<Provider store={configureStore()}><App /></Provider>, document.getElementById('app'));
