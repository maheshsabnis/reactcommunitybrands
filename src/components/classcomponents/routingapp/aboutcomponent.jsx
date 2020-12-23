import React, { Component } from 'react';
class AboutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        console.log('About is mounted');
    }

    componentWillUnmount(){
        console.log('About is unmounted');
    }
    render() { 
        return ( 
            <div>
                <h2>The About Component</h2>
            </div>
         );
    }
}
 
export default AboutComponent;