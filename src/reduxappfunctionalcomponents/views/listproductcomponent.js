import React  from 'react';
import {useDispatch} from 'react-redux';
import selectrow from './../actions/selectreowaction';
const ListProductComponent=(props)=>{

    let dispatch  = useDispatch();

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
                        <tr key={idx} onClick={()=>dispatch(selectrow(prd.product))}>
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
