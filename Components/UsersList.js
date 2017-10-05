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
    // const text = `
    //     A dog is a type of domesticated animal.
    //     Known for its loyalty and faithfulness,
    //     it can be found as a welcome guest in many households across the world.
    //   `;
    return (
      <div>
        <br />
        <h2>Users</h2>
        <Collapse accordion>
          <Panel header={"User Name 1"} key="1">
            <UserTable />
          </Panel>
          <Panel header={"User Name 2"} key="2">
            <UserTable />
          </Panel>
          <Panel header={"User Name 3"} key="3">
            <UserTable />
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default UsersList;
