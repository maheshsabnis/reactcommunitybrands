import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            contactNumber:0
        };
    }


    componentDidMount(){
        console.log('Home is mounted');
    }

    componentWillUnmount(){
        console.log('Home is unmounted');
    }

    gotoAbout=()=>{
        // The BrowserRouter will use the 
        // history() object of the Browser 
        // and add the Link expression it
        // to navigate to the component defined in the link expression
        this.props.history.push('/about');
    }



    render() { 
        return ( 
            <div>
                <h2>The Home Component</h2>
                <input type="text" value={this.state.contactNumber}
                  onChange={(evt)=> this.setState({contactNumber:parseInt(evt.target.value)})}/>
                {/* Defining a button that will use the 'Link' object of Router for navigation*/}

                <button className="btn btn-warning">
                   <Link to={`/contact/${this.state.contactNumber}`}>Go to Contact</Link>
                </button>

                <input type="button" value="Go To About" className="btn btn-danger"
                 onClick={this.gotoAbout.bind(this)}/>


            </div>
         );
    }
}
 
export default HomeComponent;