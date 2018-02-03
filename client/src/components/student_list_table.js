import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../actions/';
import Students from './students';



class StudentListTable extends Component {

    componentWillMount(){
        this.props.getStudents();
    }




    render() {

        const students = this.props.students.map( (item, index)=>{
            return <Students key={index} {...item}/>
        })

        if(!this.props.students) return;
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

                <tbody>
                    {students}
                </tbody>
                </table>
            </div>
        );
    }
}



function mapStateToProps(state){
    return{
        students: state.students.list
    }
}

export default connect(mapStateToProps, {getStudents})(StudentListTable);
