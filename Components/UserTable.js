import React, { Component } from "react";
import { Table, Icon, Alert } from "antd";
import Chart from './../src/views/Chart';
const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "Check In",
    dataIndex: "checkIn",
    key: "checkIn"
  },
  {
    title: "Check Out",
    dataIndex: "checkOut",
    key: "checkOut"
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration"
  }
];

class UserTable extends Component {
  state = {
    pagination: true
  };
  render() {
    const state = this.state;
    const description = `Total Durations Spent: ${this.props.userData["calculations"]["total_duration"]}  Expected Duration : ${this.props.userData["calculations"]["expected_duration"]}`;
    return (
      <div>
        <Table columns={columns} dataSource={this.props.userData["data"]} />
        <Alert
          message="Calculations"
          description={description}
          type="info"
          showIcon
        >
        </Alert>
        <Chart data= {this.props.userData} type="checkIn" />
				<Chart data= {this.props.userData}  type="checkOut" />
      </div>
    );
  }
}

export default UserTable;
