import React, { Component } from "react";
import Search from "./components/Search"
import Table from "./components/TableContainer";
import Head from "./components/Head";
import Body from "./components/Body";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees,
    searchTerm: ''
  };

  sortBy = yearsExperience => {
    // console.log("hi")
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.sort((a, b) =>
      (a > b) ? 1 : -1 ? -1 : 1)
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.employees.filter(employee => employee.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render() {
    return (
      <>
        <Search
          value={this.state.searchTerm}
          name="occupation"
          onChange={this.editSearchTerm}
          type="text"
          placeholder="occupation" />
        <Table>
          <Head
            sortBy={this.sortBy}
            filterBy={this.filterBy}
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
      </>
    );
  }
}

export default App;
