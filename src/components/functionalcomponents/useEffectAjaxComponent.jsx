import React, { useState,useEffect } from 'react';

import {HttpService} from './../../services/httpservice';

const UseEffectAjaxComponent=()=>{

    const serv = new HttpService();
    const [products, addProducts] = useState([]);

    // always called at function component level
    useEffect(()=>{
        serv.getData().then((response)=>{
            addProducts(response.data);
        }).catch((error)=>{
            console.log(`Error Occured ${error}`);    
        });
    }, []); // --> Dependency List to inform the useEffect() that the state is changed and rendering is done    

    if(products.length === 0) {
         return( <div>No Record Received</div>)  
    }else{
    return(
        <div className="container">
          {JSON.stringify(products)}
        </div>
    );
    }
}

export default UseEffectAjaxComponent;