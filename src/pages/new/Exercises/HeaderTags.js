import React, { PureComponent, Fragment } from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;
export default class HeaderTags extends PureComponent {
  state = { checked: true };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    const { checked } = this.state;
    return (
      <Fragment>
        <CheckableTag {...this.props} checked onChange={this.handleChange}>
          私课表
        </CheckableTag>
        <CheckableTag {...this.props} checked={checked} onChange={this.handleChange}>
          未完成
        </CheckableTag>
      </Fragment>
    );
  }
}
