import React, { Component } from "react";
import { Table, Icon } from "antd";

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
  },{
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  }
];

class UserTable extends Component {
  state = {
    pagination: true
  };
  render() {
    const state = this.state;
    return (
      <div>
        <Table columns={columns} dataSource={this.props.userData["data"]} />
      </div>
    );
  }
}

export default UserTable;
