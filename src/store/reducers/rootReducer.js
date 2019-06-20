import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
    firestore:firestoreReducer, //retrieves the data in the firestore for us
    firebase:firebaseReducer//for auth  
})

export default rootReducer