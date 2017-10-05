import React, { Component } from "react";
import { Collapse } from "antd";
import UserTable from "./UserTable";
const Panel = Collapse.Panel;

class UsersList extends Component {
  constructor(props) {
    super(props);
    
  }

  componentWillReceiveProps(nextProps) {
    console.log("UsersList props: ", nextProps)
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <br />
        <h2>Users</h2>
        <Collapse accordion>
          {Object.keys(this.props.data).map((userName, index) => {
            let user = this.props.data[userName];
            return (
              <Panel header={userName} key={index}>
                <UserTable userData={user} />
              </Panel>
            );
          })}
        </Collapse>
      </div>
    );
  }
}

export default UsersList;
