import React, { Component } from 'react';

class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        if(this.props.dataSource.length >0) {
            return ( 
                <div className="container">
                    <table className="table table-bordered table-striped table-dark">
                      <thead>
                        {
                            Object.keys(this.props.dataSource[0]).map((col,idx)=>(
                                <th key={idx}>{col}</th>
                            ))
                        }
                      </thead>
                      <tbody>
                        {
                           this.props.dataSource.map((row,ridx)=>(
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
}
 
export default TableComponent;