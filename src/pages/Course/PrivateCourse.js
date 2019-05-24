import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import LeftPane from './PrivateCourse/LeftPane';
import RightPane from './PrivateCourse/RightPane';

@connect(({ course }) => ({
  course,
}))
class PrivateCourse extends PureComponent {
  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'course/fetchPrivateCourse',
    // });
  }

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'course/fetchPrivateCourse' });
    // this.props.setName('Anna');
  };

  render() {
    // const { course } = this.props;
    // const { privateCourse } = course;
    // console.log(privateCourse);
    return (
      <Row>
        <Col span={16}>
          <LeftPane />
        </Col>
        <Col span={8}>
          <RightPane />
        </Col>
      </Row>
    );
    // return (
    //   <div>
    //     <Button type="primary" htmlType="submit" onClick={this.handleClick}>
    //       delete
    //     </Button>

    //     <div>{privateCourse}</div>
    //   </div>
    // );
  }
}
const mapStateToProps = state => {
  return {
    privateCourse: state.privateCourse,
  };
};

export default connect(mapStateToProps)(PrivateCourse);
