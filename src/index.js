import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import the bootstrap css
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';


 
 


import reportWebVitals from './reportWebVitals';

 
import {createStore, applyMiddleware, compose} from 'redux';

import {Provider} from 'react-redux';

import reducer from './sagaapps/reducers/reducers';

// import createSagaMiddleware
// configure the saga mniddleware on the store

import createSagaMiddleware from 'redux-saga';


import MainSagaComponent  from './sagaapps/MainComponent';

// import rootsaga
import rootSaga from './sagaapps/sagas/index';


// 

const appSagaMiddleware = createSagaMiddleware();

// compose-> used to enhance the createStore() method for passing additional
// parameters to store for handling the execution
const parameterEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

// create a store by using reducer and also add the Browser's REDUX plug in, not recommended in Production 

let store =  createStore(reducer, parameterEnhancers(applyMiddleware(appSagaMiddleware)));

// start runing the rootSaga and hence all ist generator funcitons
// when an action is dispatched from View, if the Saga middleware already have
// geberator for the dispatched action then SAGA will be executed and then will generate
// output action and the reducer will monitor the action and update the store
appSagaMiddleware.run(rootSaga);



 
ReactDOM.render(
  <React.StrictMode>
    {/* Provide Redux store to all  react components */}
     <Provider store={store}>
        <MainSagaComponent></MainSagaComponent>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
