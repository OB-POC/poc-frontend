import React from 'react';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom';
import Services from '../../services/index';
import Header from '../Header';
import ReactLoading from 'react-loading'

import './style.css';

export default class AccountOverview extends React.Component{
constructor(props){
    super(props);
    this.state = {
        debitData : [],
        creditData : [],
        arrow: 'fas fa-caret-down',
        downArrow: 'fas fa-caret-up',
        flag: false
    }
   this.handleScrollToElement = this.handleScrollToElement.bind(this);
   this.accClick = this.accClick.bind(this);
}

handleScrollToElement(event) {
    event.preventDefault()
    const tesNode = ReactDOM.findDOMNode(this.inputElement)
     
      tesNode.scrollIntoView();
      
}

componentWillMount() {
    var token = sessionStorage.getItem("token");
    Services.creditCall(token, function(data){
        this.setState({creditData : data.banks});
       console.log(data, "data");
   }.bind(this),function(err){
       console.log(err);
   })
    Services.debitCall(token,function(data){
        this.setState({debitData : data.banks});
    }.bind(this),function(err){
        console.log(err);
    })
}

accClick(obj){
    if(this.state.flag){
    document.getElementById(obj).className = 'fas fa-caret-down';
    this.setState({
        flag: false
    })
    }
    else{
    document.getElementById(obj).className = 'fas fa-caret-up';
    this.setState({
        flag: true
    })
    }
    
}
render(){
    var context = this
    var debitData = this.state.debitData.map(function(data,i){
        return(  <div id="accordion">
        <div className="card">
        <div className="card-header" id="headingOne" data-toggle="collapse" data-target={"#"+i+"d"} aria-expanded="true" 
        aria-controls={i+"d"} onClick={context.accClick.bind(context,i+"dd")} tabIndex='1'>
        <div className='row'>
            <h5 className="col-3">{data.bankName}</h5>
            <h5 className="col-2">{data.accounts[0].accountType}</h5>
            <h5 className="col-3">{data.accounts[0].interestRate}% <small>Interest</small></h5>
            <h5 className="col-2"><span>&#163;</span>{data.accounts[0].availableBalance}</h5>
            <h5 className="col-2"><i id = {i+"dd"} className='fas fa-caret-down'></i></h5> 
          </div>
        </div>
        <div id={i+"d"} className="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
                <div className='row'>
                <h6 className='col-8 float-left'>{data.accounts[0].accountTitle}</h6>
                <p><small>{data.accounts[0].accountNumber}</small></p>
                </div>
                <div className='row'>
                <h6 className='col-8 float-left'>Balance</h6>
                <p className='col-4 float-right'><span>&#163;</span>{data.accounts[0].balance}</p>
                </div>
                <div className='row'>
                <h6 className='col-8 float-left'>Standing Instructions</h6>
                <p className='col-4 float-right'><span>&#163;</span>{data.accounts[0].standingInst}</p>
                </div>
                <div className='row'>
                <h6 className='col-8 float-left'>Minimum Balance</h6>
                <p className='col-4 float-right'><span>&#163;</span>{data.accounts[0].minBalance}</p>
                </div>
                <hr/>
                <div className='row'>
                <h6 className='col-8 float-left'>Available Balance</h6>
                <p className='col-4 float-right'><span>&#163;</span>{data.accounts[0].availableBalance}</p>
                </div>
            </div>
        </div>
    </div>
    </div>);
    })
    var creditData = this.state.creditData.map(function(data,i){
        return(
            <div id="accordion">
            <div className="card">
            <div className="card-header" id="headingOne" data-toggle="collapse" data-target={"#"+i+"c"} aria-expanded="true" aria-controls={i+"c"} 
            onClick={context.accClick.bind(context,i+"cc")} tabIndex='1'>
            <div className='row'>
                <h5 className="col-4">{data.bankName}</h5>
                <h5 className="col-2">{data.accounts[0].accountType}</h5>
                <h5 className="col-2">{data.accounts[0].apr}% <small>APR</small></h5>
                <h5 className="col-2"><span>&#163;</span>{data.accounts[0].totalBalanceDue}</h5>
                <h5 className="col-2"><i id = {i+ "cc"} className='fas fa-caret-down'></i></h5> 
              </div>
            </div>
            <div id={i+"c"} className="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    <div className='row'>
                    <h6 className='col-8 float-left'>{data.accounts[0].accountTitle}</h6>
                    <p><small>{data.accounts[0].accountNumber}</small></p>
                    </div>
                    <div className='row'>
                    <h6 className='col-8 float-left'>Credit Limit</h6>
                    <p className='col-4 float-right'><span>&#163;</span>{data.accounts[0].creditLimit}</p>
                    </div>
                    <div className='row'>
                    <h6 className='col-8 float-left'>Available Credit</h6>
                    <p className='col-4 float-right'><span>&#163;</span>{data.accounts[0].availableCredit}</p>
                    </div>
                    <div className='row'>
                    <h6 className='col-8 float-left'>Minimum Balance Due</h6>
                    <p className='col-4 float-right'><span>&#163;</span>{data.accounts[0].minBalanceDue}</p>
                    </div>
                    <div className='row'>
                    <h6 className='col-8 float-left'>Due Date</h6>
                    <p className='col-4 float-right'><span>&#163;</span>{data.accounts[0].dueDate}</p>
                    </div>


                </div>
            </div>
        </div>
        </div>
        )
    })

    return(
            <div>
            <Header history = {this.props.history}/>
            <br/>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 savings">
                  <h5>Balances</h5>
                    {debitData}
                </div>

                <div className="col-md-6 credits">
                  <h5>Credit Outstanding</h5>
                    {creditData}
                </div>
            </div>
                <br/>
               <div className='row'><div className='col-6'><Link to='/plan'><button className="btn btn-info float-right">Pay Out Plan</button></Link></div>
            <div className='col-6'> <Link to='/'><button className="btn btn-default">Back</button></Link></div></div>
               <div className="float-right"><button className="btn btn-info" onClick={this.handleScrollToElement}>Pay Out Plan</button></div>
            </div>
            <div ref={input => this.inputElement = input}>
                <ReactLoading type='bubbles' color='black' height={'20%'} width={'20%'} />
                
            </div>
            </div>
        );
    }
}
