import React from 'react';
import ReactDOM from 'react-dom';
import Charts from './src/views/Chart';
import Header from './src/views/Header/';
import UsersList from './Components/UsersList';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <LocaleProvider locale={enUS}>
        <div style={{ width: "80%", margin: '100px auto' }}>
          <Header />
          <UsersList />
          <Charts />
        </div>
      </LocaleProvider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
