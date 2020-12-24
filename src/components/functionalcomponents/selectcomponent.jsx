import React from 'react';

const SelectComponent=(props)=>{
    const handleSelectionChanged=(value)=>{
        props.selectedItem(value);
    }
    //  value={props.dataField} is used to bind a state-property fromm parent to
    // child component
    return (
        <select className="form-control"
         value={props.dataField}
          onChange={(evt)=> {handleSelectionChanged(evt.target.value)}} >
         {
             props.dataSource.map((val,idx)=>(
                 <option key={idx} value={val}>{val}</option>
             ))
         }
        </select>
    )
}

export default SelectComponent;