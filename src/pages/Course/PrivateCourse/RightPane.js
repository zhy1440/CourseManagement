import React, { PureComponent } from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import CourseSelector from './CourseSelector';

export default class RightPane extends PureComponent {
  state = {
    selectedValue: moment('2017-01-25'),
  };

  onSelect = value => {
    this.setState({
      selectedValue: value,
    });
  };

  render() {
    const { selectedValue } = this.state;
    return (
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar fullscreen={false} onSelect={this.onSelect} />
        <CourseSelector />
      </div>
    );
  }
}
