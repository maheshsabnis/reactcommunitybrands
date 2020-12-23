import React, { Component } from 'react';
import {Switch, Link, Redirect, Route} from 'react-router-dom';
import HomeComponent from './homecomponent';
import ContactComponent from './contactcomponent';
import AboutComponent from './aboutcomponent';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <div className="container">
            <h2>The React Routing App</h2>
                <table className="table table-bordered table-striped table-dark">
                  <tbody>
                    <tr>
                        <td>
                          {/* Link Definition that will query to route table to load the component */}
                          <Link to="/">Home</Link>
                        </td>
                        <td>
                        {/* Link Definition that will query to route table to load the component */}
                        <Link to="/about">About</Link>
                      </td>
                      <td>
                      {/* Link Definition that will query to route table to load the component */}
                      <Link to="/contact">Contact</Link>
                    </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  {/* Define the Route Table */}
                    <Switch>
                       <Route exact path="/" component={HomeComponent}></Route>
                       <Route exact path="/about" component={AboutComponent}></Route>
                       {/* The Route with Parameter */}
                       <Route exact path="/contact/:id" component={ContactComponent}></Route>
                       {/* Create a Default Route if the Route Does not Match */}
                       <Redirect to="/"/>
                    </Switch>
                </div>
            </div>
         );
    }
}
 
export default MainComponent;