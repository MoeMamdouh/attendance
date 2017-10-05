import React, { Component } from 'react';
// import './Chart.css';
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.
const ReactHighstock = require('react-highcharts/ReactHighstock');
import _ from 'lodash';
import Moment from 'moment';
// const

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = { persons: [], employeeName: '', xy: [] };
    }

    componentWillMount() {
        const { type, user, from, to } = this.props;
        fetch(`http://192.168.2.5:5050/records?name=${user}&from=${from}&to=${to}`)
            .then(response => response.json())
            .then(data => {
                // console.log('Data : ', data);
                const name = Object.keys(data);
                this.setState({ persons: data, employeeName: user });
                const employeeyData = data[name[0]].data;
                // console.log(employeeyData);
                const xy = [];
                employeeyData.map(item => {
                    const employeeXY = _.pick(item, ['date', type]);
                    const parsedDate = Moment(employeeXY.date).utc().day();
                    const parsedCheckIn = Moment(employeeXY.checkIn).hour();
                    xy.push([parsedDate, parsedCheckIn]);
                });

                this.setState({ xy: xy.sort() });
            });
    }

    render() {
        var data = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
        const { employeeName, xy } = this.state;

        var config = {
            rangeSelector: {
                selected: 1,
            },
            title: {
                text: employeeName,
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
                    name: 'DAYS',
                    data: xy,
                    tooltip: {
                        valueDecimals: 2,
                    },
                },
            ],
        };

        return <ReactHighcharts config={config} />;
    }
}

export default Charts;
