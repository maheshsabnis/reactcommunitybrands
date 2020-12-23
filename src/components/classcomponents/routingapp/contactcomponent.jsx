import React, { Component } from 'react';
class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            receivedContactNumber:0
        };
    }

    componentDidMount(){
        console.log('Contact is mounted');

        // subscribe to the parameter received through route
        // BrowserRouter will provide .match.params propertieds 
        // to the props. The id is the actual rouute parameter name
        // that is containing value from <Link> 
        // .match.params will actually map with the '/contac/:id'
        // and read id
        let val = this.props.match.params.id;
        this.setState({receivedContactNumber: val})

    }

    componentWillUnmount(){
        console.log('Contact is unmounted');
    }
    render() { 
        return ( 
            <div>
                <h2>The Contact Component</h2>
                 <div>
                   <strong>
                    Received value = {this.state.receivedContactNumber}
                   </strong>
                 </div>
            </div>
         );
    }
}
 
export default ContactComponent;