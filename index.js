import React from 'react';
import ReactDOM from 'react-dom';
// import { DatePicker, message, InputGroup, Select, Option, Icon } from 'antd';
import { Spin, Alert, Input, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader, message, Icon, Button } from 'antd';
import Moment from 'moment';
import _ from 'lodash';

const InputGroup = Input.Group;
const Option = Select.Option;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      departments: [],
      date: '',
    };
    fetch("http://192.168.2.5:5050/name")
    .then(response => response.json())
    .then(data => {
      this.setState({ persons: data });
    })

  fetch("http://192.168.2.5:5050/department")
    .then(response => response.json())
    .then(data => {
      this.setState({ departments: data });
    })
  }

  componentWillMount() {

    // fetch("http://192.168.2.5:5050/records")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Data : ', data);
    //     data = Object.keys(data)
    //     this.setState({ persons: data });
    //   })

    
  }


  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }

  handleOptionsData(array) {
    let retunedArray = [];
    _.forEach(array, function (element) {
      let personObject = {};
      personObject.value = element
      personObject.label = element
      retunedArray.push(personObject);
    })
    return retunedArray;
  }

  render() {
    const { persons, departments } = this.state;
    console.log('persons ', persons, 'departments ', departments)
    //if data exist
    if (persons.length && departments.length) {
      let personsArray = this.handleOptionsData(persons);
      let departmentsArray = this.handleOptionsData(departments);
      return (
        <div style={{ width: "80%", margin: '100px auto' }}>
          <Icon type="question" style={{ fontSize: 16, color: '#08c' }} />

          <InputGroup compact>
            <DatePicker onChange={value => this.handleChange(value)} />
            <DatePicker onChange={value => this.handleChange(value)} />
            <Cascader style={{ width: '30%' }} options={personsArray} placeholder="Select Name" />
            <Cascader style={{ width: '30%' }} options={departmentsArray} placeholder="Select Separtment" />
            <Button type="primary">Done</Button>
          </InputGroup>
          <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
        </div>
      );
    } else {
      return (
        <Spin tip="Loading..."></Spin>
      )
    }

  }
}

ReactDOM.render(<App />, document.getElementById('root'));
