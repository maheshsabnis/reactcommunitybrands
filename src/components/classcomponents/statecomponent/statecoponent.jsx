import React, { Component } from 'react';

class StateComponent extends Component {
    constructor(props) {
        super(props);
        // the state object to declare the 
        //  local state
        this.state = { 
            firstName: '',
            middleName: '',
            lastName: '',
            city: '',
            cities:['Pune','Mumbai', 'Nagpur', 'Kolhapur', 'Nashik', 'Aurangabad']
        };
    }

    // method to update the state properties
    // ES 6 syntaxt for method expression
    handleFirstNameChange(evt){
        this.setState({firstName: evt.target.value});
    }
    handleMiddleNameChange(evt){
        this.setState({middleName: evt.target.value});
    }

    handleLastNameChange(evt){
        this.setState({lastName: evt.target.value});
    }

    handleStateChange(evt) {
        this.setState({city: evt.target.value});
    }

    // single method to handle changes for all input elements
    // and update the state 
    handleInputChanges(evt) {
        this.setState({[evt.target.name]:evt.target.value});
    }


    render() { 
        return (
            <div className="container">
              <h2>The State Component</h2>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control"
                 value={this.state.firstName} name="firstName"
                  onChange={this.handleInputChanges.bind(this)}/>
              </div>
              <div className="form-group">
                <label>Middle Name</label>
                <input type="text" className="form-control"
                value={this.state.middleName} name="middleName"
                onChange={this.handleInputChanges.bind(this)}/>
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control"
                value={this.state.lastName} name="lastName"
                onChange={this.handleInputChanges.bind(this)}/>
              </div>
              <hr/>
              <strong>
                {this.state.firstName} {this.state.middleName} {this.state.lastName}
              </strong>  

              <div className="from-group">
                {/* generate option using the state array 
                   if a DOM element is generated dynamically using array
                   then each element initeration must have 'key'
                   this is an identityfication of DOM element in Virtual DOM
                */}
              <strong>Selected Value of City = {this.state.city}</strong>
              <br/>
                <select value={this.state.city}
                 onChange={this.handleStateChange.bind(this)}>
                  {
                       this.state.cities.map((c,idx)=>(
                           <option key={idx} value={c}>{c}</option>
                       )) 
                  }
                </select>
              </div>

            </div>
        );
    }
}
 
export default StateComponent;