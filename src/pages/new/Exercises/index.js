import React, { PureComponent } from 'react';

import { Row, Col } from 'antd';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

// const styles = {
//   Paper: {
//     padding: 20,
//     marginTop: 10,
//     marginBottom: 10,
//     height: 700,
//     overflowY: 'auto',
//   },
// };
export default class Exercises extends PureComponent {
  render() {
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
  }
}

// <Grid container className={classes.root} spacing={2}>
// <Grid item xs={12}>
//     <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
//         {[0, 1, 2].map((value) => (
//             <Grid key={value} item>
//                 <Paper className={classes.paper} />
//             </Grid>
//         ))}
//     </Grid>
// </Grid>
//     {/* <Grid item xs={12}>
//         <Paper className={classes.control}>
//             <Grid container>
//                 <Grid item>
//                     <FormLabel>spacing</FormLabel>
//                     <RadioGroup
//                         name="spacing"
//                         aria-label="Spacing"
//                         value={spacing}
//                         onChange={this.handleChange("spacing")}
//                         row>
//                         <FormControlLabel value="0" control={<Radio />} label="0" />
//                         <FormControlLabel value="1" control={<Radio />} label="1" />
//                         <FormControlLabel value="2" control={<Radio />} label="2" />
//                         <FormControlLabel value="3" control={<Radio />} label="3" />
//                         <FormControlLabel value="4" control={<Radio />} label="4" />
//                         <FormControlLabel value="5" control={<Radio />} label="5" />
//                         <FormControlLabel value="6" control={<Radio />} label="6" />
//                         <FormControlLabel value="7" control={<Radio />} label="7" />
//                         <FormControlLabel value="8" control={<Radio />} label="8" />
//                         <FormControlLabel value="9" control={<Radio />} label="9" />
//                         <FormControlLabel value="10" control={<Radio />} label="10" />
//                     </RadioGroup>
//                 </Grid>
//             </Grid>
//         </Paper>
//     </Grid>
// </Grid> */}
