// action w/o any payload
// just returning an action type
// that will be monitored by reducer
export const getProducts=()=>{
    return {
        type: 'GET_PRODUCTS'
    }
}

export const saveProduct=(product)=>{
    
    // product.ProductId= 'Prd0034';
    // product.ProductName = 'Desk';
    // product.CategoryName = 'ECT';
    // product.Manufacturer = 'HP';
    // product.Description = 'sss';
    // product.BasePrice = 2333;
    
    //alert(`Product ${product}`);

    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}