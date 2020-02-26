import React, { Component } from "react";

import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel"
const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];
class Dashboard extends Component {
  state = { loading: false, focused: null }
  selectPanel(id) {
    this.setState({
      focused: id
    });
    if (this.state.focused) {
      this.setState({
        focused: null
        });
    }
  }
  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
     });
    if (this.state.loading) {
      return <Loading />;
    }
    const panels = data
      .filter(panel => this.state.focused === null || this.state.focused === panel.id)
      .map(panel => 
       (
        <Panel 
          key={panel.id}
          label={Panel.label}
          value={panel.value}
          onSelect={event => this.selectPanel(panel.id)}
        />
      )
    )
    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;
