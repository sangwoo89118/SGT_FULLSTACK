import React, { Component } from 'react';

export default class StudentListTable extends Component {
    render() {
        return (
            <div className="student-list-container col-md-9 col-md-pull-3">
                <table className="student-list table">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Student Course</th>
                        <th>Student Grade</th>
                        <th>Operations</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        );
    }
}
