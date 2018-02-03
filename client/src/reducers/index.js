

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import studentsReducer from './students_reducer';

export default combineReducers({
  students: studentsReducer,
  form: formReducer
})
