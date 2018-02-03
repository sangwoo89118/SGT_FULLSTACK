import React, { Component } from 'react';


export default class Students extends Component {

    render() {

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.course}</td>
                <td>{this.props.grade}</td>
                <td><button className="delete btn btn-danger">Delete</button></td>
            </tr>
        );
    }
}





