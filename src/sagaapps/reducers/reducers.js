export const reducer=(state=[], action)=>{
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'GET_PRODUCTS':
            // original state
            return {...state, loading:false};
        case 'GET_PRODUCTS_SUCCESS':
            // return the state will data received from external service
            return {...state, products:action.products,loading:false}; 
        default:
             return state; // the default state       
    }
}

export default reducer;