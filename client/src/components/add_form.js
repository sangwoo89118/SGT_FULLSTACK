import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addStudent, getStudents } from '../actions'
import { connect } from 'react-redux';


class AddForm extends Component {

    constructor(props){
        super(props);

        this.state={
            errorMessage: ''
        }
    }

    addStudents(values){
        this.props.addStudent(values.name, values.course, values.grade)
            .then(()=>{
                if(this.props.success){
                    this.props.getStudents();
                    this.setState({
                        errorMessage: ''
                    })
                }else{
                    this.setState({
                        errorMessage:this.props.errorMessage
                    })
                }
            })
    }


    renderInput({input, type, placeholder, meta:{touched, error}}){
        const style = {
            color: 'red'
        }
        const errorMessage = (touched && error) ?
                <p className='form-control' style={style}>{error}</p> : ''

        return (
            <div className={`input-group form-group ${touched && error? 'has-error': ''}`}>

                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-user"></span>
                </span>
                <input {...input} type={type} className="form-control" name={name} placeholder={placeholder}/>
                {errorMessage}
            </div>
        )
    }



    render() {
        return (

            <form className="student-add-form col-md-3 col-md-push-9" onSubmit={this.props.handleSubmit(this.addStudents.bind(this))}>
                <h4>Add Student</h4>
                <Field name='name' placeholder='Student Name' type='text' component={this.renderInput}/>
                <Field name='course' placeholder='Student Course' type='text' component={this.renderInput}/>
                <Field name='grade' placeholder='Student Grade' type='text' component={this.renderInput}/>

                <button type="submit" className="btn btn-success add">Add</button>
                <p className='text-danger'>{!this.state.errorMessage ? '': this.state.errorMessage  }</p>
            </form>
        );
    }
}


function validate(values){
    const error ={}

    if(!values.name){
        error.name = 'Please enter student\'s name';
    }
    if(!values.course){
        error.course = 'Please enter student\'s course';
    }
    if(!values.grade){
        error.grade = 'Please enter student\'s grade';
    }
    if(!/^[1-9][0-9]?$|^100$/.test(values.grade)){
        error.grade = 'Please enter the grade 1 - 100';
    }


    return error;
}



AddForm = reduxForm({
    form: 'add-form',
    validate: validate
})(AddForm);

function mapStateToProps(state){
    return{
        success: state.addStudent.success,
        errorMessage: state.addStudent.errorMessage
    }
}



export default connect(mapStateToProps, {addStudent, getStudents})(AddForm);






