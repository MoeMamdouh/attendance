import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { person: [] };
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(results => {
        console.log(results);
        this.setState({ person: results.results });
        // axios.get('https://randomuser.me/api/')
        //   .then(({ results }) => this.setState({ person: results }));
      })
    }

  render() {
    console.log(this.state.person)
    const persons = this.state.person.map((item, i) => (
      <div>
        <h1>{item.name.first}</h1>
        <span>{item.cell}, {item.email}</span>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{persons}</div>
      </div>
    );
  }
}

export default App;
