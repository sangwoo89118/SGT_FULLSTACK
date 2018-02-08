

import types from './types';
import axios from 'axios';




export function getStudents(url='node'){

    if(url == 'php'){
        url = 'http://localhost/server.php?resource=students'
    }else if(url === 'node'){
        url = 'http://localhost:5500/students'
    }

    const request = axios.get(url)
    return{
        type:types.GET_STUDENTS,
        payload: request
    }
}



export function addStudent(route='php', name, course, grade){

    if(route === 'php'){
        route = 'http://localhost/server.php?resource=add_student'
    }else if(route === 'node'){
        route = 'http://localhost:5500/addStudent'
    }

    const request = axios.post(route, {
        name: name,
        course: course,
        grade: grade

    })
    return{
        type: types.ADD_STUDENT,
        payload: request
    }
}




export function deleteStudent(route='php', id){

    if(route === 'php'){
        route = 'http://localhost/server.php?resource=delete_student'
    }else if( route === 'node' ) {
        route = 'http://localhost:5500/deleteStudent'
    }

    const request = axios.post(route,{
        id: id
    })
    return{
        type: types.DELETE_STUDENT,
        payload: request
    }
}




export function editStudent(route='php' ,name, course, grade, id){

    if(route === 'php'){
        route = 'http://localhost/server.php?resource=edit_student'
    }else if(route === 'node'){
        route = 'http://localhost:5500/editStudent'
    }

    const request = axios.post(route,{
        name: name,
        course: course,
        grade: grade,
        id: id
    })
    return{
        type: types.EDIT_STUDENT,
        payload: request
    }
}


export function switchBackEndRoute(route){

    return{
        type: types.SWITCH_BACKEND_ROUTE,
        payload:route
    }
}






