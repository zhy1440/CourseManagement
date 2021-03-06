import React, { PureComponent } from 'react';
import { Button, Icon, Typography } from 'antd';
import HeaderTags from './HeaderTags';
import Columnrange from './Columnrange';

const { Text } = Typography;
export default class LeftPane extends PureComponent {
  state = {
    size: 'large',
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <HeaderTags />
        <Typography variant="h6">Welcome!</Typography>
        <Button.Group size={size}>
          <Button type="link">
            <Icon type="left" />
          </Button>
          <Button type="link">
            <Text type="secondary">Sunday</Text>
          </Button>
          <Button type="link">
            <Icon type="right" />
          </Button>
        </Button.Group>
        <Columnrange />
      </div>
    );
  }
}
