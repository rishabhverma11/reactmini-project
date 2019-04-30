import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios'

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            job: '',
        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(`The values are ${this.state.name}, ${this.state.job}`)
        const obj = {
            name: this.state.name,
            job: this.state.job,

        };

        axios.post('https://reqres.in/api/users', obj)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            job: '',
        })
        alert("Successfully")
    }
    render() {
        return (
            <div class = "align-items-center" style={{ marginTop: 10,marginRight:'14%' }}>

                
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add  Name:  </label>
                        <input type="text" style={{'align-items': 'center'}} name="name" className="form-control" value={this.state.name}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Add Job </label>
                        <input type="text" name="job" className="form-control" value={this.state.job}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}