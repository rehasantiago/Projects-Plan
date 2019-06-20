import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { reduxFirestore,getFirestore } from 'redux-firestore'
import { reactReduxFirebase,getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig,{useFirestoreForProfile:true, userProfile:'users', attachAuthIsReady:true})//allows to access a property on store called firebaseAuthIsReady 
    )    
);//to create a store..thunk is used so that we can return a functions in our actions
//reduxFirestore and reactReduxFirestore connect the config files so getFirebase and getFirestore
//know what to connect to...compose is used to compose more than one store enhancers



store.firebaseAuthIsReady.then(() =>{
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})
//this is done so that the page is loaded after the firebase auth is ready

