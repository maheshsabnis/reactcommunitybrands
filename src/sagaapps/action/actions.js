// action w/o any payload
// just returning an action type
// that will be monitored by reducer
export const getProducts=()=>{
    return {
        type: 'GET_PRODUCTS'
    }
}

export const saveProduct=(product)=>{
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}