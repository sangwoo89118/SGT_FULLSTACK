import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteStudent, getStudents } from '../actions/'
import { DeleteModal } from '../helpers/';


class Students extends Component {

    constructor(props){
        super(props);


        this.state={
            modalVisible: false
        }


        this.showDeleteModal = this.showDeleteModal.bind(this);
    }


    showDeleteModal(){
        this.setState({
            modalVisible: true
        })
    }

    hideDeleteModal(){
        this.setState({
            modalVisible: false
        })
    }



    deleteStudent(){
        this.props.deleteStudent(this.props.id)
            .then(()=>{
                console.log('in each student success', this.props.success);
                console.log('in each student errorMessage', this.props.errorMessage);
                this.hideDeleteModal();
                this.props.getStudents();
            })
    }



    render() {
        console.log('students');
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.course}</td>
                <td>{this.props.grade}</td>
                <td><button onClick={this.showDeleteModal} className="delete btn btn-danger">Delete</button></td>
                <td>{this.state.modalVisible ? <DeleteModal confirmDeleteStudent={this.deleteStudent.bind(this)} hideModal={this.hideDeleteModal.bind(this)} data={this.props}/> : ''}</td>
            </tr>
        );
    }
}


function mapStateToProps(state){
    return{
        success: state.deleteStudent.success,
        errorMessage: state.deleteStudent.errorMessage
    }
}


export default connect(mapStateToProps, {deleteStudent, getStudents})(Students);



