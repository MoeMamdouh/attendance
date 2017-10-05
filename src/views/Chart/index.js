import React, { Component } from 'react';
// import './Chart.css';
//import { Route } from 'react-router';
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.
const ReactHighstock = require('react-highcharts/ReactHighstock');
import _ from 'lodash';
// const

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = { persons: [], employeeName: '' };
    }

    componentWillMount() {
        fetch('http://192.168.2.5:5050/records?name=Ahmed Nabil Elsayed&from=2017-09-01T00:00:00&to=2017-10-01T00:00:00')
            .then(response => response.json())
            .then(data => {
                // console.log('Data : ', data);
                const name = Object.keys(data);
                data[name[0]].map(record => {
                    console.log(record);
                });
                this.setState({ persons: data, employeeName: name[0] });
            });
    }

    render() {
        var data = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
        const { employeeName, persons } = this.state;

        var config = {
            rangeSelector: {
                selected: 1,
            },
            title: {
                text: employeeName,
            },
            series: [
                {
                    name: 'DAYS',
                    data: data,
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
