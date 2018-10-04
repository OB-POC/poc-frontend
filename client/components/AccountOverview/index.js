import React from 'react';
import {Link} from 'react-router-dom';
import Services from '../../services/index';
import Header from '../Header';

export default class AccountOverview extends React.Component{
constructor(){
    super();
    this.state = {
        debitData : []
    }
}

componentWillMount() {
    Services.debitcall(function(data){
        this.setState({debitData : data.banks});
    }.bind(this),function(err){
        console.log(err);
    })
}


render(){
    var debitData = this.state.debitData.map(function(data,i){
        return(<tr key={i}><td>{data.bankName}</td>
            <td>{data.accounts[0].accountType}</td>
            <td>{data.accounts[0].balance}</td>
            <td>{data.accounts[0].standingInst}</td>
            <td>{data.accounts[0].minBalance}</td>
            <td>{data.accounts[0].interestRate}</td></tr>);
    })

    return(
            <div>
            <Header/>
            <br/>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                  <h5>Saving Balances</h5>
                    <div className="table" style={{backgroundColor:'#f9f9f9'}}>
                            <thead className="table-head">
                                <tr>
                                    <th>Bank Name</th>
                                    <th>Type</th>
                                    <th>Balance</th>
                                    <th>Standing Instructions</th>
                                    <th>Min Balance</th>
                                    <th>Available Balance</th>
                                    <th>Interest%</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                
                                  {debitData}
                              
                            </tbody>
                    </div>
                    <h6>Total Available Balance: <strong>39000</strong></h6>
                </div>
                <div className="col-md-6">
                  <h5>Credit Outstanding</h5>
                    <div className="table" style={{backgroundColor:'#f9f9f9'}}>
                            <thead className="table-head">
                                <tr>
                                    <th>Bank Name</th>
                                    <th>Type</th>
                                    <th>Balance Due</th>
                                    <th>Min Balance Due</th>
                                    <th>APR</th>
                                    <th>Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Capital One</td>
                                    <td>C</td>
                                    <td>5000</td>
                                    <td>300</td>
                                    <td>H</td>
                                    <td>05/10/2018</td>
                                </tr>
                                <tr>
                                    <td>Broclays</td>
                                    <td>C</td>
                                    <td>8000</td>
                                    <td>500</td>
                                    <td>C</td>
                                    <td>08/10/2018</td>
                                </tr>
                                <tr>
                                    <td>Capital One</td>
                                    <td>M</td>
                                    <td>10000</td>
                                    <td>10000</td>
                                    <td>M</td>
                                    <td>08/10/2018</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td></td>
                                    <td><b>23000</b></td>
                                    <td><b>10800</b></td>
                                </tr>
                            </tbody>
                    </div>
                    <h6>Total Balance Due: <strong>23000</strong></h6>
                </div>
            </div>
                <br/>
               <div className="float-right"><Link to='/plan'><button className="btn btn-info">Pay Out Plan</button></Link></div>
            </div>
            </div>
        );
    }
}
