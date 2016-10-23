import React from 'react';
import { TIME_ARRAY } from '../constants/dates';

export default class SelectInput extends React.Component {
  render () {
    const options = TIME_ARRAY.map( (option) => {
      let optionObj = {};
      if (typeof(option) == 'object') {
        optionObj.label = option.label;
        optionObj.value = option.value;
      } else {
        optionObj.label = option;
        optionObj.value = option;
      }
      return <option value={optionObj.value || optionObj.label}>{optionObj.label}</option>
    });

    return <select defaultValue={this.props.selected} onChange={this.props.onChange} name={this.props.name} rel={this.props.rel}>
      { options }
    </select>;
  }
}
