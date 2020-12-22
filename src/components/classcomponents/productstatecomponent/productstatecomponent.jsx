import React, { Component } from 'react';
import {Categories,Manufaturers}  from './../../../models/constants';
import {Logic} from './../../../models/logic';
import DropdownComponent from './../reusablecomponents/dropdowncomponent';
class ProductStateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ProductId:'',
            ProductName: '',
            CategoryName: '',
            Manufacturer: '',
            Description: '',
            BasePrice:0,
            categries:Categories,
            manufacturers: Manufaturers,
            products:[],
            isProductIdValid:true,
            isProductNameValid:true,
            isFormValid:true
         };
         this.logic = new Logic();
         this.state.products = this.logic.getProducts();
          
    }

    handleChange=(evt)=>{
        this.setState({[evt.target.name]: evt.target.value}, ()=>{
            // pass values for validatios
            this.validateInputs(evt.target.name, evt.target.value);
        });
       
    }


    validateInputs=(name,value)=>{
        if(name === "ProductId") {
            if(value.length === 0) {
                this.setState({isProductIdValid:false});
                this.setState({isFormValid:false}); 
            } else {

                this.setState({isProductIdValid:true});
                this.setState({isFormValid:true});
            }
        }
        if(name === "ProductName") {
            if(value.length === 0 ) {
                this.setState({isProductNameValid:false});
                this.setState({isFormValid:false}); 
            } else {

                this.setState({isProductNameValid:true});
                this.setState({isFormValid:true});
            }
        }
    }



    // handleCategoryNameChange=(evt)=>{
    //     this.setState({CategoryName: evt.target.value}, ()=>{
    //         console.log(`Selected Category ${this.state.CategoryName}`);
    //     });
    // }

    // handleManufacturerChange=(evt)=>{
    //     this.setState({Manufacturer: evt.target.value}, ()=>{
    //         console.log(`Selected Manufacturer ${this.state.Manufacturer}`);
    //     });
    // }


    receiveCategoryName=(cat)=>{
        this.setState({CategoryName:cat}, ()=>{
            console.log(`Selected Category ${this.state.CategoryName}`);
        });
    }

    reeiveManufacturer=(man)=>{
        this.setState({Manufacturer: man}, ()=>{
            console.log(`Selected Manufacturer ${this.state.Manufacturer}`);
        });
    }

    clear=()=>{
        this.setState({ProductId:''});
        this.setState({ProductName:''});
        this.setState({CategoryName:''});
        this.setState({Manufacturer:''});
        this.setState({Description:''});
        this.setState({BasePrice:0});
    }
    save=()=>{
        const prd = {
              ProductId: this.state.ProductId,
              ProductName: this.state.ProductName,
              CategoryName: this.state.CategoryName,
              Manufacturer: this.state.Manufacturer,
              Description: this.state.Description,
              BasePrice: this.state.BasePrice  
        };

        // Object Mutation (older value of Product is replaced by new Value)
    //    this.products = this.logic.saveProduct(prd);

        // declare a temporary array and ad data in it
        let tempArray = this.logic.saveProduct(prd);

        // React Programming Facts, the state property cannot be updated with Object Mutation
        // instaed use setState() 

        this.setState({products: tempArray},()=>{
            // callback to commit the state  and also update the dependent state properties
           // console.log(`Updates array ${this.state.products}`);
        });

    }
    render() { 
        return (  
            <div className="container">
            <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <td>
                    <form onSubmit={this.save.bind(this)}>
                    <div className="form-group">
                     <label>Product Id</label>
                     <input type="text" name="ProductId" className="form-control" 
                     onChange={this.handleChange.bind(this)}  
                     value={this.state.ProductId}/>
                     <div className="alert alert-danger" hidden={this.state.isProductIdValid}>
                       <p >
                         ProductId is must 
                       </p>
                     </div>
                    </div>
                    <div className="form-group">
                     <label>Product Name</label>
                     <input type="text" name="ProductName" 
                     onChange={this.handleChange.bind(this)}
                     className="form-control" value={this.state.ProductName}/>
                     <div className="alert alert-danger" hidden={this.state.isProductNameValid}>
                     <p >
                       Product Name is must 
                     </p>
                   </div>
                    </div>
                    <div className="form-group">
                     <label>Category Name</label>
                     <DropdownComponent property={this.state.CategoryName}
                       dataSource={this.state.categries}
                        emitValue={this.receiveCategoryName.bind(this)}></DropdownComponent>
                    {/* <select   name="CategoryName" 
                     onChange={this.handleCategoryNameChange.bind(this)}
                     className="form-control" value={this.state.CategoryName}
                     >
                     {
                        this.state.categries.map((cat,idx)=>(
                              <option key={idx}>{cat}</option>  

                        ))
                    }
                </select> */}
                    </div>
                    <div className="form-group">
                     <label>Manufacturer</label>
                     <DropdownComponent property={this.state.Manufacturer}
                     dataSource={this.state.manufacturers}
                     emitValue={this.reeiveManufacturer.bind(this)}
                     ></DropdownComponent>
                   {/**   <select   name="Manufacturer"
                     onChange={this.handleManufacturerChange.bind(this)}
                     className="form-control" value={this.state.Manufacturer}>
                        {
                            this.state.manufacturers.map((man,idx)=>(
                                  <option key={idx}>{man}</option>  

                            ))
                        }
                     </select>*/}
                    </div>
                    <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="Description" 
                    onChange={this.handleChange.bind(this)}
                    className="form-control" value={this.state.Description}/>
                   </div>
                   <div className="form-group">
                   <label>Base Price</label>
                   <input type="text" name="BasePrice" 
                   onChange={this.handleChange.bind(this)}
                   className="form-control" value={this.state.BasePrice}/>
                  </div>
                  <div className="form-group">
                    <input type="button" value="Clear" onClick={this.clear.bind(this)} className="btn btn-warning"/>
                 {/*  <input type="button" value="Save" onClick={this.save.bind(this)} className="btn btn-success"/>*/} 
                    <input type="submit" disabled={!this.state.isFormValid} value="subit"  className="btn btn-success"/>
                 </div>
                  </form>
                    
                    </td>
                     <td>
                     
               
                     <table className="table table-bordered table-striped">
                       <thead>
                         <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Category Name</th>
                            <th>Manufacturer</th>
                            <th>Description</th>
                            <th>Base Price</th>
                         </tr>
                       </thead>
                       <tbody>
                         {
                            
                             this.state.products.map((prd,idx)=>(
                                 <tr key={idx}>
                                    <td>{prd.ProductId}</td>
                                    <td>{prd.ProductName}</td>
                                    <td>{prd.CategoryName}</td>
                                    <td>{prd.Manufacturer}</td>
                                    <td>{prd.Description}</td>
                                    <td>{prd.BasePrice}</td>
                                 </tr>
                             ))
                         }
                       </tbody>
                     </table>
                    
                     </td>
                  </tr>
                </tbody>
            </table>
           
              
            </div>
        );
    }
}
 
export default ProductStateComponent;