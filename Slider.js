import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';



export default class Slider extends Component {
    render() {
        return (
            <div id="demo" class="carousel slide" data-ride="carousel">


                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>


                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.nadams.k12.in.us/cms/lib/IN01906677/Centricity/Domain/29/Online%20Registration.png" alt="Los Angeles" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.pexels.com/photos/2191606/pexels-photo-2191606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Chicago" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.pexels.com/photos/2147272/pexels-photo-2147272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="New York" />
                    </div>
                </div>


                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>

            </div>
        )
    }
}


