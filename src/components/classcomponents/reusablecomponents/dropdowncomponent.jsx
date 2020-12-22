import React, { Component } from 'react';
class DropdownComponent extends Component {
    constructor(props) {
        super(props);
    }


    handleOptionChanges=(evt)=>{
        // define a props type that will be bound to a method of
        // the container component of this component

        this.props.emitValue(evt.target.value);
    }

    render() { 
        // dataSource, will be received from the parent
        // property, is the property name that is to be updated in parent
        return ( 
           
            <select  onChange={this.handleOptionChanges.bind(this)}   
            className="form-control" value={this.props.property}>
               {
                   this.props.dataSource.map((d,idx)=>(
                         <option key={idx} value={d}>{d}</option>  

                   ))
               }
            </select>
            
         );
    }
}
 
export default DropdownComponent;