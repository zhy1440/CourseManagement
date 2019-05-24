import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Exercises from './Exercises';

@connect(({ course }) => ({
  course,
}))
class NewPage extends PureComponent {
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
    return <Exercises />;
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

export default connect(mapStateToProps)(NewPage);
