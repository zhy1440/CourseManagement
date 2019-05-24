import React, { PureComponent } from 'react';
import { Select, Alert } from 'antd';

const { Option } = Select;
export default class CourseSelector extends PureComponent {
  state = {
    selectedValue: null,
  };

  handleChange = value => {
    this.setState({
      selectedValue: value,
    });
    // console.log(`selected ${value}`);
  };

  render() {
    const { selectedValue } = this.state;
    return (
      <div>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
    );
  }
}
