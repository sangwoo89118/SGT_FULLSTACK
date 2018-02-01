import React, { Component } from 'react';

export default class AddForm extends Component {
    render() {
        return (

            <div className="student-add-form col-md-3 col-md-push-9">
                <h4>Add Student</h4>
                <div className="input-group form-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user"></span>
                    </span>
                    <input type="text" className="form-control" name="studentName" id="name" placeholder="Student Name"/>
                </div>
                <div className="input-group form-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-list-alt"></span>
                    </span>
                    <input type="text" className="form-control" name="course" id="course"
                           placeholder="Student Course"/>
                </div>
                <div className="input-group form-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-education"></span>
                    </span>
                    <input type="text" className="form-control" name="studentGrade" id="grade"
                           placeholder="Student Grade"/>
                </div>

                <button type="button" className="btn btn-success add">Add</button>
                <button type="button" className="btn btn-default cancel">Cancel</button>
                <button type="button" className="btn btn-info getData">Get data</button>
            </div>
        );
    }
}
