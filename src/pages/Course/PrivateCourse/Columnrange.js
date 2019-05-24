import React from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import moment from 'moment';

class Columnrange extends React.Component {
  render() {
    const title = {
      autoRotate: true, // 是否需要自动旋转，默认为 true
      offset: '0', // 设置标题 title 距离坐标轴线的距离
      textStyle: {
        fontSize: '16',
        textAlign: 'center',
        fill: '#999',
        fontWeight: 'bold',
        //   rotate: {角度}
      }, // 坐标轴文本属性配置
      position: 'start' || 'center' || 'end', // 标题的位置，**新增**
    };
    // 可配置样式
    const line = {
      //   stroke: 'e5e5e5',
      fill: '#e5e5e5',
      //   lineDash: [2, 2, 3],
      lineWidth: 2,
    };
    const label = {
      offset: 40, // 数值，设置坐标轴文本 label 距离坐标轴线的距离
      // 设置文本的显示样式，还可以是个回调函数，回调函数的参数为该坐标轴对应字段的数值
      textStyle: {
        textAlign: 'center', // 文本对齐方向，可取值为： start center end
        fill: '#404040', // 文本的颜色
        fontSize: '12', // 文本大小
        fontWeight: 'bold', // 文本粗细
        textBaseline: 'middle', // 文本基准线，可取 top middle bottom，默认为middle
      },
      formatter(text) {
        const time = moment('06:00:00', 'hh:mm:ss')
          .add(text, 'hours')
          .format('hh:mm:ss');
        console.log(moment('06:00:00', 'hh:mm:ss'));
        return time;
      },
    };

    const scale = {
      time: {
        min: 0, // 定义数值范围的最小值
        max: 18, // 定义数值范围的最大值
        // tickCount: 10,
        // ticks: [100, 1000, 2000, 3000], // 用于指定坐标轴上刻度点的文本信息，当用户设置了 ticks 就会按照 ticks 的个数和文本来显示。
        tickInterval: 1, // 用于指定坐标轴各个标度点的间距，是原始数据之间的间距差值，tickCount 和 tickInterval 不可以同时声明。
        // tickCount: 10, // 定义坐标轴刻度线的条数，默认为 5
      },
    };
    const grid = {
      align: 'center', // 网格顶点从两个刻度中间开始
      type: 'line' || 'polygon', // 网格的类型
      lineStyle: {
        stroke: '#d9d9d9', // 网格线的颜色
        lineWidth: 1, // 网格线的宽度复制代码
        lineDash: [4, 4], // 网格线的虚线配置，第一个参数描述虚线的实部占多少像素，第二个参数描述虚线的虚部占多少像素
      }, // 网格线的样式配置，原有属性为 line
      alternateColor: '#f7f7f7' || ['#fcfcfc', '#f7f7f7'], // 为网格设置交替的背景色，指定一个值则先渲染奇数层，两个值则交替渲染。**代替原有的 odd 和 even 属性**
    };
    const data = [
      {
        name: '张三',
        date: '2015-03-01',
        start_time: '08:30:00',
        end_time: '12:00:00',
        state: 0,
      },
      {
        name: '李四',
        date: '2015-03-01',
        start_time: '07:00:00',
        end_time: '10:00:00',
        state: 0,
      },
      //   {
      //     name: '王五',
      //     time: [9, 12],
      //     state: 0,
      //   },
      //   {
      //     name: '郑六',
      //     time: [13, 16],
      //     state: 0,
      //   },
      //   {
      //     name: '分类五',
      //     time: [8, 11],
      //     state: 1,
      //   },
      //   {
      //     name: '分类六',
      //     time: [9, 10],
      //     state: 0,
      //   },
      //   {
      //     name: '分类七',
      //     time: [7, 11],
      //     state: 2,
      //   },
      //   {
      //     name: '分类八',
      //     time: [6, 8],
      //     state: 0,
      //   },
    ];
    const formatData = data.map(item => {
      const baseTime = moment('06:00:00', 'hh:mm:ss');
      const startTime = moment(item.start_time, 'hh:mm:ss');
      const endTime = moment(item.end_time, 'hh:mm:ss');
      const position = [
        startTime.diff(baseTime, 'minutes') / 60,
        endTime.diff(baseTime, 'minutes') / 60,
      ];
      // eslint-disable-next-line no-param-reassign
      item.position = position;
      return item;
    });
    return (
      <div>
        <Chart height={800} width={400} data={formatData} scale={scale}>
          <Axis name="name" position="top" visible={false} />
          <Axis
            name="position"
            title={title}
            line={line}
            grid={grid}
            label={label}
            //   tickLine={tickLine}
          />
          <Tooltip />
          <Geom
            type="interval"
            position="name*position"
            size="26"
            color={[
              'state',
              state => {
                // some code
                switch (state) {
                  case 0:
                    return '#7eecb3';
                  case 1:
                    return '#35d882';
                  case 2:
                  default:
                    return '#fdabac';
                }
              },
            ]}
            tooltip={[
              'name*startTime',
              (name, startTime) => {
                return {
                  name: 'xxx',
                  value: `${name}:${startTime}`,
                };
              },
            ]}
          />
        </Chart>
      </div>
    );
  }
}

export default Columnrange;
