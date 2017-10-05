import React from "react";
import ReactDOM from "react-dom";
// import { DatePicker, message, InputGroup, Select, Option, Icon } from 'antd';
import {
  Input,
  Col,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
  message,
  Icon
} from "antd";
import Moment from "moment";
import _ from "lodash";
import UsersList from "./Components/UsersList";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";

const InputGroup = Input.Group;
const Option = Select.Option;

// const options = [{
//   value: 'zhejiang',
//   label: 'Zhejiang',
//   children: [{
//     value: 'hangzhou',
//     label: 'Hangzhou',
//     children: [{
//       value: 'xihu',
//       label: 'West Lake',
//     }],
//   }],
// }, {
//   value: 'jiangsu',
//   label: 'Jiangsu',
//   children: [{
//     value: 'nanjing',
//     label: 'Nanjing',
//     children: [{
//       value: 'zhonghuamen',
//       label: 'Zhong Hua Men',
//     }],
//   }],
// }];

const names = [
  {
    value: "Mamdouh",
    label: "Mamdouh"
  },
  {
    value: "Nabil",
    label: "Nabil"
  },
  {
    value: "Azazy",
    label: "Azazy"
  },
  {
    value: "Islam",
    label: "Islam"
  }
];

const departments = [
  {
    value: "zhejiang",
    label: "Zhejiang"
  },
  {
    value: "jiangsu",
    label: "Jiangsu"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      date: ""
    };
  }

  componentDidMount() {
    fetch("http://0.0.0.0:5050/records")
      .then(response => response.json())
      .then(data => {
        console.log("Data : ", data);
        data = Object.keys(data);
        this.setState({ persons: data });
      });
  }

  handleChange(date) {
    message.info("Selected Date: " + date.toString());
    this.setState({ date });
  }

  render() {
    const { persons } = this.state;
    console.log("persons ", persons);
    return (
      <LocaleProvider locale={enUS}>
        <div style={{ width: "600px", margin: "100px auto" }}>
          <Icon type="question" style={{ fontSize: 16, color: "#08c" }} />

          <InputGroup compact>
            <DatePicker onChange={value => this.handleChange(value)} />
            <DatePicker onChange={value => this.handleChange(value)} />
            <Cascader
              style={{ width: "20%" }}
              options={persons}
              placeholder="Select Name"
            />
            <Cascader
              style={{ width: "20%" }}
              options={departments}
              placeholder="Select Name"
            />
          </InputGroup>
          <div style={{ marginTop: 20 }}>
            Date: {this.state.date.toString()}
          </div>
          <UsersList />
        </div>
      </LocaleProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
