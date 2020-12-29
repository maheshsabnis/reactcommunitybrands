
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