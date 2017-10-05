import React from "react";
import {
  Spin,
  Alert,
  Input,
  Col,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
  message,
  Icon,
  Button
} from "antd";
import Moment from "moment";
import _ from "lodash";
import ReactDOM from "react-dom";
import Charts from "./src/views/Chart";
import Header from "./src/views/Header/";
import UsersList from "./Components/UsersList";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
// const
const InputGroup = Input.Group;
const Option = Select.Option;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      departments: [],
      startDate: "",
      endDate: "",
      records: []
    };
    fetch("http://192.168.2.5:5050/name")
      .then(response => response.json())
      .then(data => {
        this.setState({ persons: data });
      });

    fetch("http://192.168.2.5:5050/department")
      .then(response => response.json())
      .then(data => {
        this.setState({ departments: data });
      });
  }

  // handleChange(date) {
  // 	message.info('Selected Date: ' + date.toString());
  // 	this.setState({ date });
  // }

  /**
	 * request records
	 */
  requetRecords() {
    const { startDate, endDate } = this.state;
    console.log("2017-09-01T00:00:00 ", startDate, endDate);
    fetch(`http://192.168.2.5:5050/records?from=${startDate}&to=${endDate}`)
      // fetch(`http://192.168.2.5:5050/records`)
      .then(response => response.json())
      .then(data => {
        console.log("returning records after filteration : ", data);
        this.setState({ records: data });
      });
  }

  handleOptionsData(array) {
    let retunedArray = [];
    _.forEach(array, function (element) {
      let personObject = {};
      personObject.value = element;
      personObject.label = element;
      retunedArray.push(personObject);
    });
    return retunedArray;
  }

  render() {
    const { persons, departments, records } = this.state;
    console.log(
      "RENDEER: persons ",
      persons,
      "departments ",
      departments,
      "records ",
      records
    );
    //if data exist
    if (persons.length && departments.length) {
      let personsArray = this.handleOptionsData(persons);
      let departmentsArray = this.handleOptionsData(departments);
      return (
        <LocaleProvider locale={enUS}>
          <div style={{ width: "80%", margin: "100px auto" }}>
            <InputGroup compact>
              <DatePicker
                onChange={value =>
                  this.setState({ startDate: value.toISOString() })}
              />
              <DatePicker
                onChange={value =>
                  this.setState({ endDate: value.toISOString() })}
              />
              <Cascader
                style={{ width: "30%" }}
                options={personsArray}
                placeholder="Select Name"
              />
              <Cascader
                style={{ width: "30%" }}
                options={departmentsArray}
                placeholder="Select Separtment"
              />
              <Button type="primary" onClick={() => this.requetRecords()}>
                Done
              </Button>
            </InputGroup>
            <div style={{ marginTop: 20 }}>
              Start Date: {this.state.startDate.toString()}
            </div>
            <div style={{ marginTop: 20 }}>
              End Date: {this.state.endDate.toString()}
            </div>

            <UsersList data={records} />
            <Charts user="Ahmed Nabil Elsayed" type="checkIn" from="2017-09-07T00:00:00" to="2017-9-14T00:00:00" />
            <Charts user="Ahmed Nabil Elsayed" type="checkOut" from="2017-09-07T00:00:00" to="2017-9-14T00:00:00" />
          </div>
        </LocaleProvider>
      );
    } else {
      return <Spin tip="Loading..." />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
