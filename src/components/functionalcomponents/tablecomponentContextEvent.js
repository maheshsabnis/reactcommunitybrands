import React, {useContext} from 'react';


import {DataContext} from './datacontext';


const TableComponentContextEvent=()=>{
    
    // subscribe to the DataContext and read data from it
// dataSource will store the data present inside the DataContext
    const dataContext = useContext(DataContext);


    // read individual values from the DataContext
    // datacontext --> {{employees, updateEmployee}}

    // Object.keys(dataContext) --> {employees, updateEmployee}
    // Object.keys(dataContext)[0] --> employees

    // Object.keys(dataContext)[0] return the 'employees' array ate 0th index
    const dataSource = dataContext[Object.keys(dataContext)[0]]; 
    // updateEmployee
    const event = dataContext[Object.keys(dataContext)[1]]; 



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
                           <tr key={ridx} onClick={()=>event(row)}>
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

export default TableComponentContextEvent;