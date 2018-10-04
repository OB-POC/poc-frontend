import React from 'react';
import Header from '../Header';

export default class PayOutPlan extends React.Component{

constructor(){
    super();
    this.state= {
        edit: false,
        creditValue:'10000',
    }
    this.handleEdit = this.handleEdit.bind(this); 
    this.handleValue = this.handleValue.bind(this); 
}


handleEdit() {
    this.setState({edit:!this.state.edit});
}

handleValue(e) {
    this.setState({creditValue:e.target.value});
}

    render(){
        return(
            <div>
            <Header/>
            <br/>
            <div className="container-fluid">
            <div className="row">
                    <center className="table">
                            <thead className="table-head">
                                <tr>
                                    <th>Savings Accounts</th>
                                    <th>Credit Accounts</th>
                                    <th>Credit Outstandings <i className="fas fa-edit" onClick={this.handleEdit}></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HSBC</td>
                                    <td>Capital One</td>
                                    <td>{this.state.edit?<input type='text' value={this.state.creditValue} onChange={this.handleValue}/>:this.state.creditValue}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Broclays</td>
                                    <td>HSBC</td>
                                    <td>{this.state.edit?<input type='text' defaultValue='5000'/>:5000}</td>
                                    <td></td>
                                  
                                </tr>
                                <tr>
                                    <td>Capital One</td>
                                    <td>Broclays</td>
                                    <td>{this.state.edit?<input type='text' defaultValue='5000'/>:8000}</td>
                                    <td></td>
                                   
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>City Bank</td>
                                    <td>5000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <h6>Accumulated Savings:
                                    <b>11000</b></h6>
                            <br/>
               <div ><button className="btn btn-info">Make Payment</button></div>
            </center>
                
            </div>
              
            </div>
            </div>
        );
    }
}