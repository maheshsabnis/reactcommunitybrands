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
