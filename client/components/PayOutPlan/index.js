import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class PayOutPlan extends React.Component{

constructor(props){
    super(props);
    this.state= {
        edit: false,
        creditValue:'200'
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
      let context = this
        var payOffs = ''
        var payOutData = this.props.payOutData['creditDebitMatch'].map(function (data,i) {
          payOffs = data.senders.map(function (data1, i) {
            return(
              <div className='row'>
                  <p className='col-8 float-left'>{data1.bankName} (<span>&#163;</span> {data1.beforeContributingBalance})</p>
                  <p>(-) <span>&#163;</span> {data1.contributingAmount} </p>
              </div>
            )
          });

        return(
            <div className="card col-xs-4 match-card">
                <div className="card-header match-header">
                <b className="float-left">{data.accountTitle} ({data.bankName})</b>
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
                    <h6 style={{color:'#0ACA24'}} className="float-right"><span>&#163;</span>{data.clearedTotalDue ? 0 : context.props.payOutData.totalAvailableBalance}</h6>
                </div>
                </div>
            </div>
          )
        })
        console.log(this.props, 'props');
        var savings = this.props.payOutData.totalAvailableBalance < 0 ? 'deficit of' : 'savings'
        var only = this.props.payOutData.totalAvailableBalance < 0 ? 'only' : ''
        console.log(savings,'savings');
        return(
            <div className="container best-match-layout">
             <center>
             <h4><b style={{color:'#0ACA24'}}>Congratulations</b></h4> <h6 style={{fontSize:'22px'}}>Found the Best Match for you, following which , you will be {savings} <span>&#163;</span>{this.props.payOutData.totalAvailableBalance} {only}</h6></center>
            <div className="row">
            {payOutData}
            </div>
            <br/>
              <center> <button className="btn btn-dark" style={{backgroundColor:'#e0405f',paddingTop:'4px'}} onClick = {this.makePaymentClick.bind(this)} >Make Payment</button></center>
            </div>

        );
    }
}
