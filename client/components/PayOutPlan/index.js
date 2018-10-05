import React from 'react';
import Header from '../Header';
import './style.css';

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
            <div className="container-fluid" >
            <div className="row">
            <div className="card col-xs-4 match-card">
                <div className="card-header match-header">
                <b className="float-left">Low Rate (Barclays)</b>
                <i className="far fa-check-square fa-2x float-right" style={{color:"#0ACA24"}}></i>
                </div>
                <div className="card-body">
                <div className='row'>
                    <h6 className='col-8 float-left'>Outstandings </h6>
                    <h6><span>&#163;</span> 5200</h6>
                </div>
                <br/>
                <div className='row'>
                    <h6 className='col-8 float-left'>Payoff from : </h6>
                  
                </div>
                <div className='row'>
                    <p className='col-8 float-left'>Hallifax (<span>&#163;</span> 1000)</p>
                    <p>(-) <span>&#163;</span> 200 </p>
                </div>
                <div className='row'>
                    <p className='col-8 float-left'>HSBC (<span>&#163;</span> 6000)</p>
                    <p>(-) <span>&#163;</span> 5000 </p>
                </div>
                </div>
                <div className="card-footer match-footer">
                <div className='row'>
                    <h6 className='col-8 float-left'>Balance Due</h6>
                    <h6 style={{color:'#0ACA24'}} className="float-right"><b> <span>&#163;</span> 0</b></h6>
                </div>
                </div>
            </div>
            <div className="card col-xs-4 match-card">
                <div className="card-header match-header">
                <b className="float-left">Home Loan (HSBC)</b>
                <i className="far fa-check-square fa-2x float-right" style={{color:"#0ACA24"}}></i>
                </div>
                <div className="card-body">
                <div className='row'>
                    <h6 className='col-8 float-left'>Outstandings </h6>
                    <h6><span>&#163;</span> 5200</h6>
                </div>
                <br/>
                <div className='row'>
                    <h6 className='col-8 float-left'>Payoff from : </h6>
                  
                </div>
                <div className='row'>
                    <p className='col-8 float-left'>Hallifax (<span>&#163;</span> 1000)</p>
                    <p>(-) <span>&#163;</span> 800 </p>
                </div>
                <div className='row'>
                    <p className='col-8 float-left'>HSBC (<span>&#163;</span> 6000)</p>
                    <p>(-) <span>&#163;</span> 1000 </p>
                </div>
                </div>
                <div className="card-footer match-footer">
                <div className='row'>
                    <h6 className='col-8 float-left'>Balance Due</h6>
                    <h6 style={{color:'#0ACA24'}} className="float-right"><span>&#163;</span> 0</h6>
                </div>
                </div>
            </div> 
            <div className="card col-xs-4 match-card">
                <div className="card-header match-header">
                <b className="float-left">Home Loan (HSBC)</b>
                <i className="far fa-check-square fa-2x float-right" style={{color:"#0ACA24"}}></i>
                </div>
                <div className="card-body">
                <div className='row'>
                    <h6 className='col-8 float-left'>Outstandings </h6>
                    <h6><span>&#163;</span> 5200</h6>
                </div>
                <br/>
                <div className='row'>
                    <h6 className='col-8 float-left'>Payoff from : </h6>
                  
                </div>
                <div className='row'>
                    <p className='col-8 float-left'>Hallifax (<span>&#163;</span> 1000)</p>
                    <p>(-) <span>&#163;</span> 800 </p>
                </div>
                <div className='row'>
                    <p className='col-8 float-left'>HSBC (<span>&#163;</span> 6000)</p>
                    <p>(-) <span>&#163;</span> 1000 </p>
                </div>
                </div>
                <div className="card-footer match-footer">
                <div className='row'>
                    <h6 className='col-8 float-left'>Balance Due</h6>
                    <h6 style={{color:'#0ACA24'}} className="float-right"><span>&#163;</span> 0</h6>
                </div>
                </div>
            </div>   
            </div>
            <br/>
               <center> <h6 style={{fontSize:'22px'}}> <b style={{color:'#0ACA24',fontSize:'22px'}}>Congratulations</b>, By following the best match practice , you will be saving <span>&#163;</span>200</h6>   </center>     
               <button className="btn btn-info float-right">Make Payment</button>
            </div>
            </div>
        );
    }
}