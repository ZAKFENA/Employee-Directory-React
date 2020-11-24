import React, { Component } from "react";
import API from "../utils/api";
import Header from "./Header";
import Search from "./Search";

class List extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    API.getUsers().then((results) => {
      this.setState({
        users: results.data.results,
      });
    });
  }
  render() {
    console.log("users",this.state.users)
    return (
     
      <React.Fragment>
        <Header />
        <Search />
       
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.login.uuid}>
                <th><img src= {user.picture.medium}/></th>
                <th>{`${user.name.first} ${user.name.last}`}</th>
                <th>{user.cell}</th>
                <th>{user.email}</th>
                <th>DOB</th>
              </tr>
            ))}

         
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default List;
