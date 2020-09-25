import React, { Component } from "react";
import Table from "./components/TableContainer";
import Head from "./components/Head";
import Body from "./components/Body";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees
  };

  render() {
    return (
      <Table>
        <Head />
        {this.state.employees.map(employee => (
          <Body
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            yearsExperience={employee.yearsExperience} />
        ))}
      </Table>
    );
  }
}

export default App;
