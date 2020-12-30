import React from 'react';
 
import {connect} from 'react-redux';

import TableComponent from './../../components/classcomponents/reusablecomponents/tablecomponent';

const ListProductsComponent=({products})=> 
products?(<TableComponent dataSource={products}></TableComponent>):null;
// products?(
//         <div>
//            <table>
//                 <thead>
//                       <tr>
//                           <th>Product Row Id</th>
//                           <th>Product  Id</th>
//                           <th>Product name</th>
//                           <th>Category Name</th>
//                           <th>Manufacturer</th>
//                           <th>Description</th>
//                           <th>Base Price</th>
//                       </tr>
//                     </thead>   
//                     <tbody>
//                         {
//                             products.map((prd,idx)=>(
//                                 <tr key={idx}>
//                             <td> {prd.ProductRowId}</td>
//                             <td> {prd.ProductId}</td>
//                             <td> {prd.ProductName}</td>
//                             <td> {prd.CategoryName}</td>
//                             <td> {prd.Manufacturer}</td>
//                             <td> {prd.Description}</td>
//                             <td> {prd.BasePrice}</td>
//                         </tr>
//                             ))
//                         }
//                     </tbody>
//             </table> 

//         </div>):null;
    
     

// use connect() object to read the state from from the store and
// pass it to the props of the ListProductsComponent

const mapStateToProps=(state)=>({
    // props: the state that will be updated in store based on the GET_PRODUCTS_SUCCESS action        
    products: state.products
});


export default connect(mapStateToProps, null)(ListProductsComponent);
// export default ListProductsComponent;