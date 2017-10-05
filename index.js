import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  componentDidMount() {
    fetch("http://0.0.0.0:5050/records")
      .then(response => response.json())
      .then(data => {
        console.log('Data : ', data);
        // this.setState({ persons: data });
      })
  }


  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }

  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
