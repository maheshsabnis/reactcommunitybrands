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