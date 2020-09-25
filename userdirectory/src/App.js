import React, { Component } from "react";
import Table from "./components/TableContainer";
import Head from "./components/Head";
import Body from "./components/Body";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees
  };

  sortBy = yearsExperience => {
    // console.log("hi")
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.sort((a, b) =>
    (a > b) ? 1 : -1 ? -1: 1)
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };


  render() {
    return (
      <Table>
        <Head 
         sortBy={this.sortBy}
         />
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
