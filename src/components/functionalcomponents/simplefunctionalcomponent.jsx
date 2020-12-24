import React, {useState} from 'react';
import SelectComponent from './selectcomponent';
import {DataContext} from './datacontext';
import TableComponentContext from './tablecomponentContext';
import TableComponentContextEvent from './tablecomponentContextEvent';

const SimpleFuncitonalCoponent=()=>{

    // define a state 
    // the syntax uses 'destructuring' of ES 6
    // syntax const {} = obj; // object immutation
    // obj.x=10; obj.y = 20, let obj = {x:0, y:0}
    // employee is a state object and updateEmployee is the action that will update employee
    // {} is the initial state value of the employee
    // let employee = {}; // empty JSON object
    const [employee, updateEmployee] = useState({
        EmpNo:0,EmpName:'',DeptName:'', Designation:''
    });
    // let employees = []; // empty array
    const [employees, addEmployee] = useState([]);
    const departments = ['IT', 'HR', 'ADMIN', 'TRG'];
    const designations = ['Manager', 'Lead', 'Engineer', 'Clerk'];

    const clear=()=>{
        updateEmployee({
            EmpNo:0, EmpName: '', DeptName: '', Designation:''
        });
    }

    const save=()=>{
        // ... is a spread operator of ES 6
        // ...employees means  employees = employees.push();
        addEmployee([...employees, {EmpNo:employee.EmpNo, EmpName: employee.EmpName,
          DeptName:employee.DeptName, Designation: employee.Designation}]);
    }



    return (
        <div className="container">
           <h3>The Simple Component</h3>
           <div className="form-group">
              <label>EmpNo</label>
              <input type="text" className="form-control"
               value={employee.EmpNo}
                onChange={(evt)=> updateEmployee({...employee, EmpNo:parseInt(evt.target.value)})}/>
           </div>
           <div className="form-group">
            <label>EmpName</label>
            <input type="text" className="form-control"
            value={employee.EmpName}
            onChange={(evt)=> updateEmployee({...employee, EmpName:evt.target.value})}/>
           </div>
           <div className="form-group">
               <label>Department</label> 
               {/* the 'dataField' is a props type that is used to comunicate
              the DeptName from parent to child 
            selectedItem: the props type that will emit vale from child to parent 
        base on event*/}
               <SelectComponent dataField={employee.DeptName} dataSource={departments}
               selectedItem={(data)=> updateEmployee({...employee, DeptName: data})}/>
           </div>
           <div className="form-group">
               <label>Designation</label> 
                  {/* the 'dataField' is a props type that is used to comunicate
              the Designation from parent to child  
              selectedItem: the props type that will emit vale from child to parent 
        base on event*/}
               <SelectComponent dataField={employee.Designation} dataSource={designations}
               selectedItem={(data)=> updateEmployee({...employee, Designation: data})}/>
           </div>
           <div className="form-group">
               <input type="button" value="Clear" onClick={clear} className="btn btn-warning"/> 
               <input type="button" value="Save" onClick={save} className="btn btn-success"/> 
            </div>
            <strong>
            {JSON.stringify(employees)}
            </strong>

            <br></br>
            {/* Passing employees array to the child component */}
          {/*  <DataContext.Provider value={employees}>
               <TableComponentContext/>
            </DataContext.Provider> * */}

            <DataContext.Provider value={{employees, updateEmployee}}>
             <TableComponentContextEvent/>
            </DataContext.Provider>



        </div>

    );
}

export default SimpleFuncitonalCoponent;
