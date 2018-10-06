import React from 'react';
import {Link} from 'react-router-dom';
import Offerings from '../Offerings';
import './style.css';

export default class PayOutPlan extends React.Component{

constructor(props){
    super(props);
    this.state= {
        edit: false,
        creditValue:'200',
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
   
makePaymentClick(){
  this.props.history.push('/offerings')
}
    render(){
        var payOffs = ''
        var payOutData = this.props.payOutData['creditDebitMatch'].map(function (data,i) {
          payOffs = data.senders.map(function (data1, i) {
            return(
              <div className='row'>
                  <p className='col-8 float-left'>{data1.accountTitle} (<span>&#163;</span> {data1.contributingAmount})</p>
                  <p>(-) <span>&#163;</span> {data1.totalAvailableBalance} </p>
              </div>
            )
          });
      
        return(
            <div className="card col-xs-4 match-card">
                <div className="card-header match-header">
                <b className="float-left">{data.accountTitle}</b>
                {data.clearedTotalDue ? <i className="far fa-check-square fa-2x float-right" style={{color:"#0ACA24"}}></i>:null}
                </div>
                <div className="card-body">
                <div className='row'>
                    <h6 className='col-8 float-left'>Outstandings </h6>
                    <h6><span>&#163;</span>{data.totalBalanceDue}</h6>
                </div>
                <br/>
                <div className='row'>
                    <h6 className='col-8 float-left'>Payoff from : </h6><i className='fas fa-pen' style={{paddingLeft:'80px'}}></i>
                </div>
                {payOffs}
                </div>
                <div className="card-footer match-footer">
                <div className='row'>
                    <h6 className='col-8 float-left' style={{color:'#fff'}}>Balance Due</h6>
                    <h6 style={{color:'#0ACA24'}} className="float-right"><span>&#163;</span>{data.clearedTotalDue ? 0 : data.totalAvailableBalance}</h6>
                </div>
                </div>
            </div>
          )
        })

        return(
            <div className="container best-match-layout">
             <center>
             <h4><b style={{color:'#0ACA24'}}>Congratulations</b></h4> <h6 style={{fontSize:'22px'}}>Found the Best Match for you, following which , you will be saving <span>&#163;</span>200</h6>   </center>
            <div className="row">
            {payOutData}
            </div>
            <br/>
              <center> <button className="btn btn-dark" style={{backgroundColor:'#e0405f',paddingTop:'4px'}} onClick = {this.makePaymentClick.bind(this)} >Make Payment</button></center>
            </div>

        );
    }
}
