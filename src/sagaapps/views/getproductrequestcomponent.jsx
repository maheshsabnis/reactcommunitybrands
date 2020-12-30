
import React, { Component } from 'react';

import {getProducts} from './../action/actions';

// connect object is used to connect the Redux object Model with
// React Object model. This is equivalent to useDispatch() and useSelector() combine together 
import {connect} from 'react-redux';

const GetProductRequestComponent=(props)=>{

    return (
        <div>
            <input type="button" onClick={props.getProducts} value="Get Products"/>
        </div>
    );
};

// mape the current compone with props from uits parent so that
// it can dispatch actions from the component

const mapDispatchToProps= {
    // props:action-name
    getProducts: getProducts
};

// connect the props with component using connect() object

export default connect(null, mapDispatchToProps)(GetProductRequestComponent);


// export default GetProductRequestComponent;