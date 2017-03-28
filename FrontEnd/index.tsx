// import * as echarts from 'echarts';

// // 基于准备好的dom，初始化echarts实例
// const myChart = echarts.init(document.getElementById('main'));
// // 绘制图表
// myChart.setOption({
//   title: {
//     text: '运动记录'
//   },
//   tooltip: {
//     trigger: 'axis'
//   },
//   legend: {
//     // data:['最高气温','最低气温']
//   },
//   xAxis:  {
//     type: 'category',
//     boundaryGap: false,
//     data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
//   },
//   yAxis: {
//     type: 'value',
//     axisLabel: {
//       formatter: '{value}'
//     }
//   },
//   series: [
//     {
//       name: '最高步数',
//       type: 'line',
//       data: [5000, 10001, 15000, 6000, 20000, 3000, 2004],
//       markPoint: {
//         data: [
//             {type: 'max', name: '最大值'},
//             {type: 'min', name: '最小值'}
//         ]
//       },
//       markLine: {
//         data: [
//             {type: 'average', name: '平均值'}
//         ]
//       }
//     }
//   ]
// });

// import * as moment from 'moment';
// console.log(moment('2017-03-31 00:00:00').fromNow(true))

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import { Hello } from './hello';

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById('example')
// );

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CountDown } from './countdown';
ReactDOM.render(<CountDown currYear="2017"/>, document.getElementById('countDown'));