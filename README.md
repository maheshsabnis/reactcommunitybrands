# Creating React Application
# Installing React-CLI

npm install -g create-react-app

# IF mac or linux
sudo npm install -g create-react-app

# Creating React App
create-react-app <APP-NAME>

# Programming With React

1. Understanding React Object Model
- Package.json
    - "dependencies", runtime depednencies for Application
        - They will be included in Production Build
        - React
            - Base object model of React
        - ReactDom
            - Object Model for creating and managing react rendering
        - react testing with jest
            - Testing object model that is used to test React application    
    - "devDependencies", dev. time dependencies
    -   "scripts": {
        "start": "react-scripts start", --> npm run start
        "build": "react-scripts build", --> npm run build 
        "test": "react-scripts test", --> npm run test
        "eject": "react-scripts eject" --> npm run eject
    },
- React Core Concepts
    - JSX
        - A new Parser for HTML DOM
        - Written the new JSX attribute System for HTML DOM elements    
            - e.g. For HTML DOM  <input type="text" value="xyz" class="c1">, this is error for JSX
                    - class is replaced by 'className', because in ES 6 'class' is a keyword
                    - JSX uses XML parser this means the HTML element msut have end-tag 
                        e.g. <input type="text" value="xyz" className="c1"/>
                    - The 'value' is JSX Attrbute property
                    - Event properties of JSX
                        - onClick, onChange, etc. These properties will execute component's method 
        - JSX provides "Compiler-Error" for HTML and DOM will not be generated
        - JSX / ES 6 --- ES 6 Transpiler ---- generate ES 3 / ES 5 Browser Compatible JavaScript
            - ES 6 Transpilar used by React.js is 'Babel'
2. Creating Components
    - Heart of React App
    - Autonomous and provides an abstration layer on
        - UI / DOM
        - Data Properties aka the 'state' properties
            - These properties will be bound to UI to generate UI dynamically
        - Logc Methods / calls to method from Logic Classes
        - Events for DOM elements
            - These will execute methods of component 
            - These methods may update data proeprties or 'state' of the component
    - They are reusable 
    - COmponents can communicate with each other with Parent-Child Relationship
    - FInal object that is delivered to customer for UI interaction    
    - The 'Virtual-DOM'
        - Update the DOM element that needs to be changed based on Data / Event
    - The 'Class' Components
        - ES 6 class derived from the 'Component' class from React library
        - Define local 'State' using the 'state={}' object
        - Accepts data from Parent Component using the 'props' 
    - The 'Functional' Components, from React 16.0+ 
        - React Hooks, from React 16.8     
    - The 'Component<P,S>' is a base class for class components
        - The 'P' is the 'props' object
            - The 'props' is an 'immutable' object of React to pass data across components
                - This object will dynamically populated with 'properties' across components
        - The 'S' is the 'state' object
            - The 'mutable' object. This is scopped to the component (means live within the declarig component)       
    - The State or Props can be bound with HTML elements to its JSX properties
        - <input type="text" value={this.state.<PROPERTY-NAME>}>   
        - <input type="text" value={this.props.<PROPERTY-NAME>}>        
        - This binding will make the field 'read-only'
                - This is known as 'UniDirectional-DataFlow'
                    - STATE PROPERTY --> UI ELEMENT      
    - To update the State properties bind the HTML element to its event by a method of component.
        - This method will update the state using 'setState()' method of the base component class.                  
        - <input type="text" value={this.state.<PROPERTY-NAME>} onChange={this.<METHOD>.bind(this)}> 
    - To define a single method to update states of component for all input elements, define the 'name' attribute for each input element having same name as the state property
        .e.g. if state is  'fname' then <input type="text" name="fname" value={this.state.fname}>
        - the single method to update all elemets will be
            this.setSate({[evt.target.name]: evt.target.value});    
    - UI Composition
        - Create Re-Usable Component as Generic Components
        - Defne Data properties for Data Binding      
        - Methods to emit events for components to communicate each other   
    - React 16.0+ 
        - Error Boundry
            - Container component that is sued to manage lifecycle of all children if any child child component crash or thows exception the error boundry is responsinble to render fallback UI
            - THis component will manage the DOM crash prevention    

3. Service Calls
    - The 'axios' library to make external AJAX calls
    - The axios is promise(?) based library
        - This manages a pipeline of Async messaging programs with implicit async statesubscription
    - The get requests must be implemented using 'componentDidMount' lifecycle hook of the component
    - npm install --save axios

4. Single  Page Application using Routing
    react-router-dom
    npm install --save react-router-dom

    BrowserRouter  --> The main component that is used to mount the Routing Object Model so that
        the souting will e handdled
    Link --> Provide the URL to the component to redirect
    Route --> USed to define Route Table
    Redirect --> Default redirct
    Swicth --> Query mechanism to route table
5. The WebComponent
    - The Custom element having
        - UI
        - Data Properties
        - Events
        - Logic
    - Functionl Components
        - The ES 6 Functions Expression that returns HTML and ReactDom.render() takes a repsonsibility of rendering it by mounting it on DOM
        - Programming has become easy from React 16.0+
        - Code became maintainable and readable
        - Hooks
            - React's predefined functions for performing Lifecycle hooks operations, state handling and data sharing acrosss components
            - They can be accessed only at Function Component level aka component level
            - useState()
                - Used for managing State Properties with initial value and callback function to update the state. Alternative for this.state={} and this.setState()
                -  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
                    - initialState, could be string, null, number, array, object
                    - Dispatch<SetStateAction<S>>
                        - Dispatch is going to listen to an event on element 
                        - read a new value for state
                        - update the initalValue of state with new value by executing the 'SetStateAction' which is a baclback function
            - useContext()
                - Used to share data across components 
                - The 'createContext()' method of React, used to define a 'Provider' object to provide 'value' to other component. The other component must 'consume' the 'value' to read data from it.
            - useEffect()
                - Combination of componentDidMount() and componentWillUnMount()
                    - componentDidMount()
                        - Contain resource intensive operations e.f. REST Calls
                    - componentWillUnMount()
                        - CLeanup operations     
                function useEffect(effect: EffectCallback, deps?: DependencyList): void;
                    -  EffectCallback
                        - The function to be executed for first loading of the component
                    -  DependencyList
                        - The ReadOnly Array, that instructs the useEffect() that the 'state' is modified the rendering is completed so stop execution          
            - Additional Hooks
                - useMemo()
                    - Used for Caching the state values for better performance
                - useCallback()
                    - use by memoization, returns a memoized callback
                - useReducer()
                    - State Management in React w/o using Redux
                    - Alternative to useState()
                - useRef()
                    - Used to refer UI element with its 'ref' name
                        - Un-Controlled component    
5. State Management

6. Deployment



let obj1 ={x:10};
let obj2 = obj1;// equality

obj1.x --> 10;
obj2.x --> 10;

obj2.x =100;

obj2.x --> 100;
obj1.x --> 100; 







Hands-on Lab: CREATE A TableComponent that will generate rows and columns based on ‘dataSource’ props passed to it.  The table rows should generate ‘Delete’ button if the ‘canDelete’ props is ‘true’ passed from parent component.   Once this delete button clicked then the record displayed in table must be deleted from the collection of parent component. 
The selected row data must be displayed in Text / Selecte elements of parent.  
(Mandatory)

Optional: The TableComponent should accept props ‘canSort’ if this is true, then pass the ‘sortKey’ props as property from the collection based n which the table is sorted.

Create a "Validation Summary" component that will display error messages immediately when error occure (Mandatory) 


Hands-on Lab
1. CReate a ErrorBoundry like funcationality for Functiona Components so that the fallback UI can be created.
2. Create a INPUT functional component that will accept only Email. If the Email is invalidated then the component will change the backcolor of INPUT to RED
==============================================================================================================================================================================================================
Redux for React
1. Using class components and redux APIs for classes
2. Using functional Components using Redux Hooks

Step 1: Install packages
npm install --save redux react-redux saga redux-saga

redux: The redux Object Model. Contains 'store' object using 'createStore()' method. The 'combineReducers()' object to create a collection of multiple reducres are ceate a store object from all these redecurs at once

let store = createStore(<COMBINE-REDUCERS-OBJECT>, additional parameters);

react-redux: The join between react object model with redux object model.
useSelector() hooks to subscribe the store from react components
useDispacth() hooks, to dispatch action from View aka react component
react-redux joins two object models for Application State management

saga: The saga middleware for performing AJAX calls from react-redux app and subscribe to promises.
redux-saga, a combine object model to integrate redux store with saga middleware and configure store to directly receive data from REST calls.


Step 2: create components aka views

Step 3: Create Action. 
This is a function that accepts 'payload' (data send from view), execute the logic and returns the output action and the updated payload values.


// the 'product' is payload parameter send from UI 
const addProduct=(product)=>{
    // any other logic here.....
    return {
        type: "ADD_PRODUCT", /// --> the output action
        product /// ---> the output data from the action 
    }
};

export default addProduct;


Step 4: Creating reducer

It is a pure function in JavaScript. Accepts the 'state' and 'action' as input parameters and return state (updated in store) as output parameter. 
'state'--> the  initial state and 'action' --> the action the is output (or dispatched) actionStorage.

CAUTION: Please fo  not write any resource intensive logic in reducer function e.g. ajax calls, DateTime operations, slow executing loops, collection manipulation.



import {combineReducers} from 'redux';

// adding new product in store
export const addProductReducer=(state, action)=>{
    // monitor which action is dispatched
    switch(action.type){
        case 'ADD_PRODUCT':
            return {
                product:action.product // the output that is generated after the action is executed. This will be added in store
            }
        default: 
            return state; // the original state     
    }  
};

// list all product data from store
export const listproductreducer=(state=[], action)=>{
 // monitor which action is dispatched
 switch(action.type){
    case 'ADD_PRODUCT':   // the monent ADD_PRODUCT is dispatch take the product information and add it in store and return it
        return  [...state, addProductReducer(undefined, action)]; 
    default: 
        return state; // the original state     
    }  
};

// combining all the reducers in one object
// this object will be used to update the store when an action is dispatched and monitoted by reducer.
const rootReducer = combineReducers({listproductreducer});
export default rootReducer;


Step 5: At the root level of the application create a store. Provide this store to the React Application so that it can use the Redux's applciation state management.

index.js

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


Step 6: Subscribe to Store using views.

MainComponent.jsx

import React from 'react';
// useSelector: subscribe to the store
// useDispacth: Disdpatch the action
import {useSelector, useDispatch} from 'react-redux';
import AddProductComponent from './views/addproductcomponent';
import ListProductComponent from './views/listproductcomponent';
import addProduct from './actions/action';

const MainComponent=()=>{

    // read products from the store which is monitiored and manilulated by reducer
    let products = useSelector(state=>state.listproductreducer);

    // initialize the dispatcher object
    let dispatch = useDispatch(); 


    return(
        <div className="container">
          <h2>The Redux with Fucntional Components</h2>
          {/* Dispatch the action and pass its reference to the AddProductComponent */}
          <AddProductComponent AddClick={(product)=>dispatch(addProduct(product))}/>
          <hr/>
          {/* pass the products from the store to the ListProductComponent */}
          <ListProductComponent listProducts={products}/>
        </div>
    );
};

export default  MainComponent;

Modify the AddProductComponent
addproductcomponent.jsx

import React, { useState } from 'react';

const AddProductComponent=(props)=>{

    const [product,updateProduct]= useState({ProductId:0,ProductName:''});

    const clear=()=>{
        updateProduct({ProductId:0, ProductName:''});
    }
    const save=()=>{
        // the product state is passed to the AddClick() props type
        props.AddClick(product);
    }
    return(
        <div className="container">
            <div className="form-group">
                <label>Product Id</label>
                <input  type="text" value={product.ProductId} className="form-control"
                 onChange={(evt)=> updateProduct({...product, ProductId:parseInt(evt.target.value)})}></input>
            </div>
            <div className="form-group">
                <label>Product Name</label>
                <input  type="text" value={product.ProductName} className="form-control"
                 onChange={(evt)=> updateProduct({...product, ProductName:evt.target.value})}></input>
            </div>
            <div className="form-group">
                <input type="button" className="btn btn-warning" value="Clear" onClick={clear}></input>
                <input type="button" className="btn btn-success" value="Save" onClick={save}></input>
            </div>
        </div>
    );
};

export default AddProductComponent;

Modify the ListProductComponent
listproductcomponent.jsx
import React  from 'react';

const ListProductComponent=(props)=>{

    if(props.listProducts === undefined || props.listProducts.length === 0) {
        return (<div>No Record Found</div>)
    } else {
        return(
            <table className="table table-bordered table-striped table-dark">
                <thead>
                    <tr>
                        <td>Product Id</td>
                        <td>Product Name</td>
                    </tr>
                </thead>
                <tbody>
                  {
                      props.listProducts.map((prd,idx)=>(
                        <tr key={idx}>
                          <td>
                          {prd.product.ProductId}
                          </td>
                          <td>
                          {prd.product.ProductName}</td>
                        </tr>
                      ))
                  }
                </tbody>
            </table>
        );
    }
};

export default ListProductComponent;





