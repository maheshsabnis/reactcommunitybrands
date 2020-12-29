import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import the bootstrap css
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {createStore} from 'redux';
// impport reducer
import  rootReducer from './reduxappfunctionalcomponents/reducers/reducers';

import {Provider} from 'react-redux';


import reportWebVitals from './reportWebVitals';

import MainComponent from './reduxappfunctionalcomponents/maincomponent';


// create a store by using reducer and also add the Browser's REDUX plug in, not recommended in Production 

let store =  createStore(rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());


 
ReactDOM.render(
  <React.StrictMode>
    {/* Provide Redux store to all  react components */}
     <Provider store={store}>
      <MainComponent/>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
