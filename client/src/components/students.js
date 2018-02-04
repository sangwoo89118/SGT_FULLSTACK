import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteStudent, getStudents, editStudent } from '../actions/'
import { DeleteModal } from '../helpers/';


class Students extends Component {

    constructor(props){
        super(props);


        this.state={
            modalVisible: false,
            edit: false,
            form: {
                name: this.props.name,
                course: this.props.course,
                grade: this.props.grade
            },
            changed: false
        }
        this.showDeleteModal = this.showDeleteModal.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentWillReceiveProps(nextProps){
        this.setState({
            form:{
                name:nextProps.name,
                course: nextProps.course,
                grade: nextProps.grade
            }
        })
    }


    toggleEdit(){
        this.setState({
            edit: !this.state.edit,
            changed: false
        })

        if( this.state.changed){
            const {name, course, grade} = this.state.form
            this.props.editStudent(name, course, grade, this.props.id)
                .then(()=>{ this.props.getStudents()})
        }
    }

    showDeleteModal(){
        this.setState({
            modalVisible: true,
        })
    }
    hideDeleteModal(){
        this.setState({
            modalVisible: false,
            edit: !this.state.edit
        })
    }


    deleteStudent(){
        this.props.deleteStudent(this.props.id)
            .then(()=>this.props.getStudents())
                .then(()=>this.hideDeleteModal())
    }

    handleChange(e){
        const {value, name} = e.target;
        const {form} = this.state;
        form[name]= value;
        this.setState({
            form: {...form},
            changed: true
        });
    }

    render() {
        const button = (
            this.state.edit ?
            <td>
                <button onClick={this.showDeleteModal} className="delete btn btn-danger">DELETE</button>
                <button onClick={this.toggleEdit} className="delete btn btn-warning">Okay</button>
            </td>
            :
            <td>
                <button onClick={this.toggleEdit} className="delete btn btn-info">EDIT</button>
            </td>
        )

        const students = (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.course}</td>
                <td>{this.props.grade}</td>
                {button}
            </tr>
        )

        const editInputs= (
            <tr>
                <td><input name='name' onChange={this.handleChange} type="text" value={this.state.form.name}/></td>
                <td><input name='course' onChange={this.handleChange} type="text" value={this.state.form.course}/></td>
                <td><input name='grade' onChange={this.handleChange} type="text" value={this.state.form.grade}/></td>
                {button}
                <td>
                    {this.state.modalVisible ?
                        <DeleteModal
                            confirmDeleteStudent={this.deleteStudent.bind(this)}
                            hideModal={this.hideDeleteModal.bind(this)}
                            data={this.props}/>
                        :
                        ''
                    }
                </td>
            </tr>
        )

        return (
            <tbody>
                {this.state.edit ? editInputs : students}
            </tbody>
        );
    }
}


function mapStateToProps(state){
    return{
        success: state.deleteStudent.success,
        errorMessage: state.deleteStudent.errorMessage
    }
}


export default connect(mapStateToProps, {deleteStudent, getStudents, editStudent})(Students);



