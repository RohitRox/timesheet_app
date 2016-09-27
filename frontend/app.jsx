import React from 'react';
import ReactDom from 'react-dom';
import Moment from 'moment';

import Header from 'components/header';
import SheetInfo from 'components/sheetInfo';
import Timetable from 'components/timetable';
import SignatureSection from 'components/signatureSection';

class App extends React.Component {
  constructor(props) {
    super(props);

    this._onDateSelect = this.onDateSelect.bind(this);

    this.state = {
      startOfWeek: Moment().startOf('week'),
      endOfWeek: Moment().endOf('week')
    };
  }

  onDateSelect(date) {
    const startOfWeek = Moment(date).startOf('week');
    const endOfWeek = Moment(date).endOf('week');

    this.setState({
      startOfWeek: startOfWeek,
      endOfWeek: endOfWeek
    });
  }

  render() {
    return <div className="container">
      <table width="100%" className="ts">
        <Header />
        <SheetInfo onDateSelect={this._onDateSelect}/>
        <Timetable startOfWeek={this.state.startOfWeek} endOfWeek={this.state.endOfWeek}/>
        <SignatureSection />
      </table>
    </div>;
  }
}

ReactDom.render(<App />, document.getElementById('app'));
