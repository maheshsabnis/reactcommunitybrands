import React, {useContext} from 'react';


import {DataContext} from './datacontext';


const TableComponentContext=()=>{
    
    // subscribe to the DataContext and read data from it
// dataSource will store the data present inside the DataContext
    const dataSource = useContext(DataContext);
       if(dataSource.length >0) {
        return ( 
            <div className="container">
                <table className="table table-bordered table-striped table-dark">
                  <thead>
                    {
                        Object.keys(dataSource[0]).map((col,idx)=>(
                            <th key={idx}>{col}</th>
                        ))
                    }
                  </thead>
                  <tbody>
                    {
                      dataSource.map((row,ridx)=>(
                           <tr key={ridx}>
                           {
                            Object.keys(row).map((col,idx)=>(
                                <td key={idx}>{row[col]}</td>
                            ))
                        }
                           </tr>
                       )) 
                    }
                  </tbody>
                </table>
            </div>
         );
    } else {
        return ( <h6> Not Record Received from Service</h6>)
    }
}

export default TableComponentContext;