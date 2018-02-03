

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import studentsReducer from './students_reducer';
import addStudentReducer from './add_student_reducer';

export default combineReducers({
  students: studentsReducer,
  addStudent: addStudentReducer,
  form: formReducer
})
