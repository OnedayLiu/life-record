/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// import * as echarts from 'echarts';

Object.defineProperty(exports, "__esModule", { value: true });
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
const React = __webpack_require__(0);
const ReactDOM = __webpack_require__(1);
const countdown_1 = __webpack_require__(3);
ReactDOM.render(React.createElement(countdown_1.CountDown, { currYear: "2017" }), document.getElementById('countDown'));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
;
class CountDown extends React.Component {
    render() {
        const { currYear } = this.props;
        const lastDay = new Date(`${currYear}-12-31 23:59:59`).getTime();
        const currTime = new Date().getTime();
        const remainingDays = parseInt((lastDay - currTime) / 1000 / 60 / 60 / 24 + '', 10);
        return React.createElement("h3", null,
            currYear,
            "\u5E74\u8FD8\u5269",
            remainingDays,
            "\u5929");
    }
}
exports.CountDown = CountDown;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map