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
            return(
                <Students key={index} {...item}/>
            )
        })

        return (
            <div className="col-md-9 col-md-pull-3">
                <table className="table table-striped pull-left">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Student Course</th>
                        <th>Student Grade</th>
                        <th>Operations</th>
                    </tr>
                    </thead>
                    <tbody>
                        {students}
                    </tbody>
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
