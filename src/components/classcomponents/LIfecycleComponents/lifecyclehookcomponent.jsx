import React, { Component } from 'react';
class LifeCycleParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            pValsue:0
        };
    }

    componentDidMount=()=>{
        console.log(`Parent Component did mount called`);
    }

    componentDidUpdate=()=>{
        console.log(`Parent Component did update called`);
    }

    

    render(){ 
        
              if(this.state.pValsue % 2 === 0) {
                return(
                    <div className="container">
                     <h2>The Parent Component</h2>
                     <input type="text" value={this.state.pValsue}
                       onChange={(evt)=> this.setState({pValsue: evt.target.value})}/>
                       <FirstChildComponent data={this.state.pValsue}/>
                    </div>
                );
              } else {
                  return (
                    <div className="container">
                    <h2>The Parent Component</h2>
                    <input type="text" value={this.state.pValsue}
                      onChange={(evt)=> this.setState({pValsue: evt.target.value})}/>
                      <SecondChildComponent data={this.state.pValsue}/>
                   </div>
                  );
              } 

       
    }
}
 

class FirstChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            x:0,
            y:0
        };
    }

    getMousePositions=(evt)=>{
        this.setState({x: evt.clientX});
        this.setState({y: evt.clientY});
        console.log(`Mouse Position x = ${this.state.x} and y = ${this.state.y}`);
    }


    componentDidMount=()=>{
        console.log(`First Child Component did mount called`);
        window.addEventListener('mousemove', this.getMousePositions);
    }

    componentDidUpdate=()=>{
        console.log(`First Child Component did update called`);
    }

    componentWillUnmount=()=>{
        console.log(`First Child Component will unmount  called`);
        window.removeEventListener('mousemove', this.getMousePositions);
    }


    render() { 
        return (  
            <div className="container">
                <h5>The First Child Component</h5>
                <strong>Data Recieved from Parent {this.props.data}</strong>
                <div>
                  X Position = {this.state.x} and Y Position = {this.state.y}
                </div>
            </div>
        );
    }
}
 
 

class SecondChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount=()=>{
        console.log(`Second Child Component did mount called`);
       
    }

    componentDidUpdate=()=>{
        console.log(`Second Child Component did update called`);
    }

    componentWillUnmount=()=>{
        console.log(`Second Child Component will unmount  called`);
    }
    render() { 
        return (  
            <div className="container">
            <h5>The Second Child Component</h5>

            <div>
                 <strong>Data Recieved from Parent {this.props.data}</strong>
            </div>
        </div>

        );
    }
}
 
 

export default LifeCycleParentComponent;