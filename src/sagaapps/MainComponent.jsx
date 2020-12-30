import React from 'react';

import GetProductRequestComponent from './views/getproductrequestcomponent';
import ListProductsComponent from  './views/ListProductsComponent';

const MainSagaComponent=()=>{
    return (
        <div>
           <GetProductRequestComponent></GetProductRequestComponent>
             <ListProductsComponent></ListProductsComponent> 
        </div>
    )
   
}
export default MainSagaComponent;

