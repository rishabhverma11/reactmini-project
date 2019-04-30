import React, { Component } from 'react';

class TableRow extends Component {
    constructor(props){
        super(props);
        debugger;
        console.log("sssss");
    }
  render() {
      debugger;
      console.log('---------------')
    return (
        <tr>
          <td>
            {this.props.obj.first_name}
          </td>
          <td>
            {this.props.obj.last_name}
          </td>
          <td>
            {this.props.obj.avatar}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;