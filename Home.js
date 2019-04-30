import React, { Component } from 'react';
import { render } from 'react-dom';
import { Jumbotron } from 'react-bootstrap'
import MainContent from './MainContent.js'
import Navbar from './Navbar.js'
import Slider from './Slider.js'
import Create from './Create.js'





export default class List extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Slider/>
         <h3 align="center">Welcome </h3>
          <h2 style ={{'text-align': 'center'}} >Add Employee Details</h2>
          <Create/>
                 
      </div>
      
    )
  }
}
