import React, {Component} from 'react';

// the class componet must use 'render()' method from 
// Component base class to return HTML

class SimpleComponent extends Component {
    constructor(props){
         // the comstructor must call the 'super()' the base class constructor for props object
        super(props);
    }
    render(){
        return (
            <div className="container">
               {/* read value(s) from props */}
                <strong>The First Class Component {this.props.msg} </strong>
                <br/>
                <MyChildComponent msg1 = {this.props.msg}></MyChildComponent>
            </div>
        )
    }
}


class MyChildComponent extends Component{
      render(){
          return (
              <div className="container">
                  <h2>The MyChildComponent</h2>
                  
                  <strong>{this.props.msg1}</strong>
              </div>
          )
      }  
}


export default SimpleComponent;