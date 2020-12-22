import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import the bootstrap css
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// the componet is imported
import App from './App';

import SimpleComponent from './components/classcomponents/simplecomponent/simplecomponent';

import StateComponent from './components/classcomponents/statecomponent/statecoponent';

import ProductStateComponent from './components/classcomponents/productstatecomponent/productstatecomponent'

import reportWebVitals from './reportWebVitals';


const message = 'I am the data from ReactDOM.render()';


// <App/> is rendered
// ReactDOM.render() method will mount
// the component n <div> element with 'id' as 'root' 

//  <SimpleComponent  msg = {message}/>, the 'msg' is the dynamic attribute appended in 'props'

ReactDOM.render(
  <React.StrictMode>
    <ProductStateComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
