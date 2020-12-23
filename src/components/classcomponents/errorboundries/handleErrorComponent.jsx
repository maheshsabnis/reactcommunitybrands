import React, { Component } from 'react';

class MyErrorBoundryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            exceptionMessage: ''
        };
    }


    // lifecycle state error method
    // used to listen any crash occured in
    // currently exercuting child coponents 
    static getDerivedStateFromError(error){
        // this.setState({exceptionMessage: error.toString()})
        return {
            exceptionMessage: error.toString()
        }
    }

    // handle exception
    componentDidCatch=(error, logInfo)=>{
        // log it on console
        console.log(`Exception Occured ${error.toString()} and log stack${logInfo.componentStatck}`);
    }



    render() { 
         if(this.state.exceptionMessage) {
             return (
                 <div className="container">
                   Somethomg is is wrong please reload the page by clicking on reload button
                 </div>
             );
         }

         // keep remdering  children components
         return this.props.children;
    }
}
 
 



class MyCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             counter:0   
        };

        for(let i=0; i<10000;i++){
            console.log(`i = ${i}`);
        }
    }
    increament=()=>{
        this.setState({counter: this.state.counter+1});
        
    }

    render() {

        // try {
        if(this.state.counter === 10) {
            throw new Error(`Reached to max limit of counter ${this.state.counter}`);
        }
        return (  
            <div className="container">
                <input type="button" value="Increament" className="btn btn-warning"
                 onClick={this.increament.bind(this)}/>
                 <strong>{this.state.counter}</strong>
            </div>
        );
    // }
    // catch {
    //     return(
    //         <div className="container">
    //           <strong>
    //              Sorry !!! Sothing is wrong
    //           </strong>
    //         </div> 

    //     );

    // }


        
    }
}
 

class RendererComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    reload=()=>{
        window.history.go(0);
    }

    render() { 
        return (
            <div className="container">
                <h3>Showing Counter Component</h3>
                 <MyErrorBoundryComponent>
                     <MyCounterComponent/>
                </MyErrorBoundryComponent>
                <hr/>
                <h3>Some other UI</h3>
                <input type="button" value="reload" onClick={this.reload.bind(this)}/>
            </div>
         );
    }
}
 
export default RendererComponent;

 