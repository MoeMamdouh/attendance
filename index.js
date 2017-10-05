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
			startDate: '',
			endDate: '',
			records: [],
			name: '',
			department: '',
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

		this.requetRecords()
	}

	// handleChange(date) {
	// 	message.info('Selected Date: ' + date.toString());
	// 	this.setState({ date });
	// }

	requetRecords() {
		const { startDate, endDate, name, department } = this.state;
		console.log('name ', name, 'department ', department)
		fetch(`http://192.168.2.5:5050/records?from=${startDate}&to=${endDate}&name=${name}&department${department}`)
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
		//if data exist
		// if (persons.length && departments.length) {
		let personsArray = this.handleOptionsData(persons);
		let departmentsArray = this.handleOptionsData(departments);
		return (
			<LocaleProvider locale={enUS}>
				<div style={{ width: "80%", margin: "100px auto" }}>
					<InputGroup compact>
						<DatePicker
							onChange={value => this.setState({ startDate: value.toISOString() })}
						/>
						<DatePicker
							onChange={value => this.setState({ endDate: value.toISOString() })}
						/>
						<Cascader
							style={{ width: "30%" }}
							options={personsArray}
							placeholder="Select Name"
							onChange={value => this.setState({ name: value[0] })}
						/>
						<Cascader
							style={{ width: "30%" }}
							options={departmentsArray}
							placeholder="Select Separtment"
							onChange={value => this.setState({ department: value[0] })}
						/>
						<Button type="primary" onClick={() => this.requetRecords()}>Done</Button>
					</InputGroup>
					{/* <div style={{ marginTop: 20 }}>
						Start Date: {this.state.startDate.toString()}
					</div>
					<div style={{ marginTop: 20 }}>
						End Date: {this.state.endDate.toString()}
					</div> */}

					<UsersList data={records} />
				</div>
			</LocaleProvider>
		);
		// } else {
		// 	return <Spin tip="Loading..." />;
		// }
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
