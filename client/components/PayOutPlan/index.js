import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class PayOutPlan extends React.Component{

constructor(props){
    super(props);
    this.state= {
        // edit0: false,
        // edit1: false,
        // edit2: false,
        edit: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleValue = this.handleValue.bind(this);
}

handleEdit() {
    this.setState({edit: !this.state.edit});
}

handleValue(e) {
    this.setState({creditValue:e.target.value});
}

makePaymentClick(){
  this.props.history.push('/offerings')
}
    render(){
      let context = this
      let contextState = this.state
        var payOffs = ''
        var payOutData = this.props.payOutData['creditDebitMatch'].map(function (data,i) {
          payOffs = data.senders.map(function (data1, j) {
            var dVal = '(-) £ '+data1.contributingAmount
            if(data1.contributingAmount == 0 && !contextState.edit)
            return null
            else{
            return(
              <div className='row'>
                  <p className='col-8 float-left'>{data1.bankName} (<span>&#163;</span> {data1.beforeContributingBalance})</p>
                  {
                    contextState.edit ? <input type='text' style = {{width: '100px', height: '20px'}}
                    defaultValue = {dVal}/>:
                  <p>(-) <span>&#163;</span> {data1.contributingAmount} </p>
                }
              </div>
            )
          }
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
                    <h6 className='col-8 float-left'>Payoff from : </h6>
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
        var savings = this.props.payOutData.totalAvailableBalance < 0 ? 'deficit of' : 'savings'
        var only = this.props.payOutData.totalAvailableBalance < 0 ? 'only' : ''
        console.log(savings,'savings');
        return(
            <div className="container best-match-layout">
             <center>
             <h4><b style={{color:'#0ACA24'}}>Congratulations</b></h4>
             <h6 style={{fontSize:'22px'}}>Found the Best Match for you, following which , you will be {savings} <span>&#163;</span>{this.props.payOutData.totalAvailableBalance} {only}
             {!this.state.edit ?
               <i className='fas fa-pen float-right' style={{paddingLeft:'80px'}} onClick={context.handleEdit}></i>:
               <i className='fas fa-check float-right' style={{paddingLeft:'80px',color: '#0ACA24'}} onClick={context.handleEdit}></i>
             }
             </h6>
             </center>
            <div className="row">
            {payOutData}
            </div>
            <br/>
              <center> <button className="btn btn-dark" style={{backgroundColor:'#e0405f',paddingTop:'4px'}} onClick = {this.makePaymentClick.bind(this)} >Make Payment</button></center>
            </div>

        );
    }
}
