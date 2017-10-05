import React, { Component } from "react";
import { Table, Icon } from "antd";

const columns = [
  {
    title: "checkIn",
    dataIndex: "checkIn",
    key: "checkIn"
  },
  {
    title: "checkOut",
    dataIndex: "checkOut",
    key: "checkOut"
  },{
    title: "duration",
    dataIndex: "duration",
    key: "duration",
  }
];

const data = [
  {
    "date": "2017-09-11T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-11T09:56:50",
    "records": [
      "2017-09-11T09:56:50",
      "2017-09-11T09:56:52",
      "2017-09-11T19:01:13"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-11T19:01:13",
    "duration": 9.1
  },
  {
    "date": "2017-09-12T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "records": [
      "2017-09-12T09:14:09"
    ],
    "checkIn": "2017-09-12T09:14:09",
    "department": "Courier / Cloud Solution",
    "duration": 0
  },
  {
    "date": "2017-09-28T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-28T10:19:45",
    "records": [
      "2017-09-28T10:19:45",
      "2017-09-28T19:21:26"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-28T19:21:26",
    "duration": 9.0
  },
  {
    "date": "2017-09-07T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-07T09:49:45",
    "records": [
      "2017-09-07T09:49:45",
      "2017-09-07T18:18:06"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-07T18:18:06",
    "duration": 8.5
  },
  {
    "date": "2017-09-13T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-13T08:43:01",
    "records": [
      "2017-09-13T08:43:01",
      "2017-09-13T18:04:07",
      "2017-09-13T18:04:28",
      "2017-09-13T18:04:30"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-13T18:04:30",
    "duration": 9.4
  },
  {
    "date": "2017-09-06T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-06T13:18:45",
    "records": [
      "2017-09-06T13:18:45",
      "2017-09-06T13:18:59",
      "2017-09-06T13:19:10"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-06T13:19:10",
    "duration": 0.0
  },
  {
    "date": "2017-09-26T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-26T10:21:25",
    "records": [
      "2017-09-26T10:21:25",
      "2017-09-26T19:48:24"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-26T19:48:24",
    "duration": 9.4
  },
  {
    "date": "2017-10-01T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "records": [
      "2017-10-01T11:24:39"
    ],
    "checkIn": "2017-10-01T11:24:39",
    "department": "Courier / Cloud Solution",
    "duration": 0
  },
  {
    "date": "2017-09-20T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-20T10:05:13",
    "records": [
      "2017-09-20T10:05:13",
      "2017-09-20T21:23:55",
      "2017-09-20T21:24:06"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-20T21:24:06",
    "duration": 11.3
  },
  {
    "date": "2017-09-27T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-27T10:35:19",
    "records": [
      "2017-09-27T10:35:19",
      "2017-09-27T19:13:26"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-27T19:13:26",
    "duration": 8.6
  },
  {
    "date": "2017-09-17T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-17T09:59:56",
    "records": [
      "2017-09-17T09:59:56",
      "2017-09-17T20:10:48"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-17T20:10:48",
    "duration": 10.2
  },
  {
    "date": "2017-09-18T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "records": [
      "2017-09-18T10:37:15"
    ],
    "checkIn": "2017-09-18T10:37:15",
    "department": "Courier / Cloud Solution",
    "duration": 0
  },
  {
    "date": "2017-09-19T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-19T10:20:48",
    "records": [
      "2017-09-19T10:20:48",
      "2017-09-19T20:29:43"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-19T20:29:43",
    "duration": 10.1
  },
  {
    "date": "2017-09-14T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-14T09:29:16",
    "records": [
      "2017-09-14T09:29:16",
      "2017-09-14T21:26:24",
      "2017-09-14T21:26:26"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-14T21:26:26",
    "duration": 12.0
  },
  {
    "date": "2017-09-10T00:00:00+00:00",
    "name": "Ahmed Nabil Elsayed",
    "checkIn": "2017-09-10T09:39:20",
    "records": [
      "2017-09-10T09:39:20",
      "2017-09-10T18:58:45"
    ],
    "department": "Courier / Cloud Solution",
    "checkOut": "2017-09-10T18:58:45",
    "duration": 9.3
  }
];

class UserTable extends Component {
  state = {
    pagination: false
  };
  render() {
    const state = this.state;
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default UserTable;
