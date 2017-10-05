import React from 'react';
import ReactDOM from 'react-dom';
import Charts from './src/views/Chart';
import Header from './src/views/Header/';
import UsersList from './Components/UsersList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ width: "80%", margin: '100px auto' }}>
        <Header />
        <UsersList/>
        <Charts />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
