import React from 'react';
import ReactDOM from 'react-dom';
import Charts from './src/views/Chart';
import Header from './src/views/Header/';

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
        <Charts />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
