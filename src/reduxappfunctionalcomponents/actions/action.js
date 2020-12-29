
// the 'product' is payload parameter send from UI 
const addProduct=(product)=>{
    // any other logic here.....
    return {
        type: "ADD_PRODUCT", /// --> the output action
        product /// ---> the output data from the action 
    }
};

export default addProduct;