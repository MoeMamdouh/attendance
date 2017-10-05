import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { persons: [] };
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    fetch("http://0.0.0.0:5050/records")
      .then(response => response.json())
      .then(data => {
        console.log('Data : ', data);
        this.setState({ persons: data });
        // axios.get('https://randomuser.me/api/')
        //   .then(({ results }) => this.setState({ person: results }));
      })
    }

  render() {
    const personsObject = this.state.persons;
    const persons = Object.keys(personsObject)
    if(persons.length) {
      console.log('persons ', persons)
      const personsData = persons.map((item, i) => (
        <div>
          <h1>{item}</h1>
          <span>{this.state.persons[item].calculations.expected_duration}</span>
        </div>
      ));
  
      return (
        <div id="layout-content" className="layout-content-wrapper">
          <div className="panel-list">{personsData}</div>
        </div>
      );
    } else {
      return (
        <span>Loading...</span>
      )
    }
    
  }
}

export default App;
