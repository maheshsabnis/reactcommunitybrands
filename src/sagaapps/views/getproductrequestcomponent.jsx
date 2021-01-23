
import React, { Component } from 'react';

import {getProducts, saveProduct} from './../action/actions';

// connect object is used to connect the Redux object Model with
// React Object model. This is equivalent to useDispatch() and useSelector() combine together 
import {connect} from 'react-redux';

const GetProductRequestComponent=(props)=>{

    return (
        <div>
            <input type="button" onClick={props.getProducts} value="Get Products"/>
            <hr/>
          
            <input type="button" onClick={()=>props.saveProduct({
                ProductId: 'Prd0092', ProductName: 'Desk',
                Manufacturer: 'HP', CategoryName: 'ECT',
                Description:'sssssss', BasePrice:38838
            })} value="Save Product"/>
        </div>
    );
};

// mape the current compone with props from uits parent so that
// it can dispatch actions from the component

const mapDispatchToProps= {
    // props:action-name
    getProducts: getProducts,
    saveProduct: saveProduct
};



// connect the props with component using connect() object

export default connect(null, mapDispatchToProps)(GetProductRequestComponent);


// export default GetProductRequestComponent;