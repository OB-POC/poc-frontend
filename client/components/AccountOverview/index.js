import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';

export default class AccountOverview extends React.Component{

render(){
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
                                <tr>
                                    <td>HSBC</td>
                                    <td>PCA</td>
                                    <td>15000</td>
                                    <td>2000</td>
                                    <td>3000</td>
                                    <td>10000</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Broclays</td>
                                    <td>PCA</td>
                                    <td>25000</td>
                                    <td>5000</td>
                                    <td>5000</td>
                                    <td>15000</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Capital One</td>
                                    <td>Savings</td>
                                    <td>10000</td>
                                    <td>0</td>
                                    <td>3000</td>
                                    <td>7000</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td></td>
                                    <td><b>50000</b></td>
                                    <td><b>50000</b></td>
                                    <td><b>50000</b></td>
                                    <td><b>11000</b></td>
                                </tr>
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
