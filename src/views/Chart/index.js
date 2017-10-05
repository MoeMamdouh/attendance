import React, { Component } from "react";
// import './Chart.css';
const ReactHighcharts = require("react-highcharts"); // Expects that Highcharts was loaded in the code.
const ReactHighstock = require("react-highcharts/ReactHighstock");
import _ from "lodash";
import Moment from "moment";
// const

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [], chartTitle: "", xy: [] };
  }

  componentWillMount() {
    const { data , type } = this.props;
    console.log('Data : ', data);
    const name = Object.keys(data);
    this.setState({ persons: data, chartTitle: type });
    const employeeyData = data.data;
    // console.log(employeeyData);
    const xy = [];
    employeeyData.map(item => {
      const employeeXY = _.pick(item, ["date", type]);
      const parsedDate = Moment(employeeXY.date)
        .utc()
        .day();
      const parsedCheckIn = Moment(employeeXY.checkIn).hour();
      xy.push([parsedDate, parsedCheckIn]);
    });
    this.setState({ xy: xy.sort() });
  }

  render() {
    const { chartTitle, xy } = this.state;

    var config = {
      rangeSelector: {
        selected: 1
      },
      title: {
        text: chartTitle
      },
      // xAxis: {
      //     type: 'datetime',
      //     labels: {
      //         format: '{value:%m-%d}',
      //         rotation: 45,
      //         align: 'left'
      //     }
      // },
      series: [
        {
          name: "DAYS",
          data: xy,
          tooltip: {
            valueDecimals: 2
          }
        }
      ]
    };

    return <ReactHighcharts config={config} />;
  }
}

export default Chart;
