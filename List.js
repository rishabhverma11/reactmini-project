import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import TableRow from './TableRow';
import Navbar from './Navbar.js'
export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Emp_dtl: []
    }
    this.tabRow = this.tabRow.bind(this);
  }
  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => {
        this.setState({ Emp_dtl: response.data.data })
        console.log("response", response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  tabRow() {
    console.log("dddd", this.state.Emp_dtl);
    return (this.state.Emp_dtl.map((object, index) => {
      console.log("aaa", object)
      return (
        <TableRow obj={object} key={index} />)
        ;

    })
    )
  }


  render() {
    return (
      <div>
      <Navbar/>
        <div class="jumbotron">
          <h1 style={{'text-align' : 'center'}}>Employee Details</h1>
         
        </div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    )
  }

}
