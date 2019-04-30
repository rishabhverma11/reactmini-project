import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import {NavBar, Nav, NavItem} from 'react-bootstrap';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/home">Add Employee</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/list">Employee List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/edit">Edit</a>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}









