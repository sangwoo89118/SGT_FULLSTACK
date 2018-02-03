import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../actions/';
import Students from './students';



class StudentListTable extends Component {

    componentWillMount(){
        this.props.getStudents();
    }

    render() {
        console.log('studentList', this.props.students);

        const students = this.props.students.map( (item, index)=>{
            return(
                <tbody key={index}>
                    <Students {...item}/>
                </tbody>

            )
        })


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
                    {students}
                </table>
                <h1 className='text-center'>{this.props.students.length ? '' : 'There are no data'}</h1>
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
