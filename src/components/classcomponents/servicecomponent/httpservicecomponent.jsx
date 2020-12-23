import React, { Component } from 'react';
import { HttpService } from '../../../services/httpservice';
import TableComponent from './../reusablecomponents/tablecomponent';
class HttpServiceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            products:[],
            message: ''
        };
        this.serv = new HttpService();
    }


    // subscribe to componentDidMount and perform
    // REST calls 
    componentDidMount=()=>{
       this.laodData();
    }

    laodData=()=>{
        this.serv.getData().then((response)=>{
            this.setState({products:response.data});
            this.setState({message: `Data Received succsessfully`});
        }).catch((error)=>{
            this.setState({message: `Error Occured while receiving data ${error}`});
        });
    }

    save=()=>{
        const prd = {
            ProductId:'Prd003',
            ProductName: 'Biscuts',
            CategoryName: 'Food',
            Manufacturer: 'parle',
            Description: 'Energy',
            BasePrice:20
        };

        this.serv.postData(prd).then((response)=>{
            console.log(JSON.stringify(response.data));
           this.laodData();
            this.setState({message: `Data is Created succsessfully`});
        }).catch((error)=>{
            this.setState({message: `Error Occured while receiving data ${error}`});
        });

    }

    render() { 
        return (  
            <div className="container">
              <input type="button" value="GetData" onClick={this.laodData.bind(this)}/>
              <br/>
              <input type="button" value="PostData" onClick={this.save.bind(this)}/>
              <br/>
                <strong>{this.state.message}</strong>
              <hr/>
              <TableComponent dataSource={this.state.products}></TableComponent>
            </div>    
        );
    }
}
 
export default HttpServiceComponent;