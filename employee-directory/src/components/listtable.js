import React, { Component } from "react";
import API from "../utils/api";
import Header from "./Header";
import Search from "./Search.js";
import "../styles/Listtable.css";

class List extends Component {
  state = {
    users: [],
    filteredUsers: []
  };

  handleSearch = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }


  componentDidMount() {
    API.getUsers().then((results) => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  };

 

  render() {
    console.log("users",this.state.users)
    return (
     
      <React.Fragment>
        <Header />
        <Search handleSearch = {this.handleSearch}/>
       
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB <i>(YYYY/MM/DD)</i></th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredUsers.map((user) => (
              <tr key={user.login.uuid}>
                <th><img src= {user.picture.medium}/></th>
                <th>{`${user.name.first} ${user.name.last}`}</th>
                <th>{user.cell}</th>
                <th>{user.email}</th>
                <th>{user.dob.date.slice(0, 10)}</th>
              </tr>
            ))}

         
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default List;
