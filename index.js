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
          <Charts user="Ahmed Nabil Elsayed" type="checkIn" from="2017-09-07T00:00:00" to="2017-9-14T00:00:00" />
          <Charts user="Ahmed Nabil Elsayed" type="checkOut" from="2017-09-07T00:00:00" to="2017-9-14T00:00:00" />
        </div>
      </LocaleProvider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
