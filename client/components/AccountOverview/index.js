import React from 'react';
import {Link} from 'react-router-dom';
import Services from '../../services/index';
import Header from '../Header';

import './style.css';

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
    console.log(this.state.debitData)
    var debitData = this.state.debitData.map(function(data,i){
        return(  <div id="accordion">
        <div className="card">
        <div className="card-header" id="headingOne">
        <div className='row'>
            <h5 className="col-3">{data.bankName}</h5>
            <h5 className="col-2">PCA</h5>
            <h5 className="col-3">0.25% <small>Interest</small></h5>
            <h5 className="col-2"><span>&#163;</span>43345</h5>
            <h5 className="col-2"><i className="fas fa-caret-down" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"></i></h5> 
          </div>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
                <div className='row'>
                <h6 className='col-8 float-left'>Club Current Account</h6>
                <p><small>(1234567543345)</small></p>
                </div>
                <div className='row'>
                <h6 className='col-8 float-left'>Balance</h6>
                <p className='col-4 float-right'><span>&#163;</span>43345</p>
                </div>
                <div className='row'>
                <h6 className='col-8 float-left'>Standing Instructions</h6>
                <p className='col-4 float-right'><span>&#163;</span>43345</p>
                </div>
                <div className='row'>
                <h6 className='col-8 float-left'>Minimum Balance</h6>
                <p className='col-4 float-right'><span>&#163;</span>43345</p>
                </div>
                <hr/>
                <div className='row'>
                <h6 className='col-8 float-left'>Available Balance</h6>
                <p className='col-4 float-right'><span>&#163;</span>43345</p>
                </div>
              
     
            </div>
        </div>
    </div>
    </div>);
    })

    return(
            <div>
            <Header/>
            <br/>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 savings">
                  <h5>Balances</h5>
                    {debitData}
                </div>

                <div className="col-md-6 credits">
                  <h5>Credit Outstanding</h5>
                  <div id="accordion">
                    <div className="card">
                    <div className="card-header" id="headingOne">
                    <div className='row'>
                        <h5 className="col-4">Hallifax</h5>
                        <h5 className="col-2">CC</h5>
                        <h5 className="col-2">25% <small>APR</small></h5>
                        <h5 className="col-2"><span>&#163;</span>43345</h5>
                        <h5 className="col-2"><i className="fas fa-caret-down" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"></i></h5> 
                      </div>
                    </div>
                    <div id="collapseTwo" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            <div className='row'>
                            <h6 className='col-8 float-left'>Low Rate</h6>
                            <p><small>(1234567543345)</small></p>
                            </div>
                            <div className='row'>
                            <h6 className='col-8 float-left'>Credit Limit</h6>
                            <p className='col-4 float-right'><span>&#163;</span>43345</p>
                            </div>
                            <div className='row'>
                            <h6 className='col-8 float-left'>Available Credit</h6>
                            <p className='col-4 float-right'><span>&#163;</span>43345</p>
                            </div>
                            <div className='row'>
                            <h6 className='col-8 float-left'>Minimum Balance Due</h6>
                            <p className='col-4 float-right'><span>&#163;</span>43345</p>
                            </div>
                            <div className='row'>
                            <h6 className='col-8 float-left'>Due Date</h6>
                            <p className='col-4 float-right'><span>&#163;</span>43345</p>
                            </div>
                          
                 
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
                <br/>
               <div className="float-right"><Link to='/plan'><button className="btn btn-info">Pay Out Plan</button></Link></div>
            </div>
            </div>
        );
    }
}
