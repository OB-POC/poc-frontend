import React from 'react';
import Header from '../Header';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter,Table } from 'reactstrap';
//import './style.css'
import ReactLoading from 'react-loading'

export default class Offerings extends React.Component{

constructor(){
   super();
   this.state= {
       debitMessage : 'You might save more by switching to savings accounts with higher interest rates',
       creditMessage : 'You might realize significant monthly interest savings by transferring your higher rate credit card balances to a lower rate credit card',
       modal: false,
       user:'credit',
       creditInfoHeading : 'Balance Transfer from CitiBank to LBG at introductory 22% APR for 12 months and 24% post introductory offer  ',
       debitInfoHeading : 'Account Transfer from Barclays to LBG with 1.25% Savings interest',
       creditInfo:'By transferring your credit card balance(s) you can save an extra $1,360 over the introductory rate period of 12 month(s) taking into account fees of $0. You can continue to save ',
       debitInfo:'Account Transfer from Barclays to LBG with 1.25% Savings interest',
       debitAccountType : 'Platinum'
   }
   this.toggle = this.toggle.bind(this);

}

componentDidMount(){

}


toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }



   render(){
       const {debitMessage,creditMessage,modal,user,creditInfoHeading,debitInfoHeading,creditInfo,debitInfo,debitAccountType} = this.state
       const message = user == 'debit' ? debitMessage : creditMessage
       const infoHeading = user == 'debit' ? debitInfoHeading : creditInfoHeading
       const info = user == 'debit' ? debitInfo+' '+debitAccountType+' account' : creditInfo
       return(
           <div>
           <Header heading='Offerings' style={{marginBottom:'80px'}}/>
           <br/>
           <div className="container-fluid">
           <div className="row">
                    <div className='col-md-12'>
                    <center style = {{paddingBottom : '15px'}}>
                    <img style = {{height:'150px',width:'150px'}} src = 'images/success.png' />
                    <h1> Payment Successful</h1>
                    </center>
                        <Jumbotron style={{marginLeft:'30px',marginRight:'30px',padding:'0px',backgroundColor:'yellow'}}>

                            <p className="lead" style={{padding:'20px'}}>{message}</p>
                        </Jumbotron>
                        <Jumbotron style={{paddingTop:'20px',marginLeft:'30px',marginRight:'30px'}}>
                              <h3>Offerings</h3>
                                <Jumbotron style={{backgroundColor:'white',marginTop:'20px',paddingTop:'20px'}}>
                                <div className='row'>
                                  <div className='col-10'>
                                    <p style={{color:'#649c00',marginBottom:'10px',fontWeight:'400'}}>LLOYDS BANK PLATINUM CREDIT CARD</p>
                                    <h3 style={{color:'#006a4d'}}>0% Purchase and Balance transfer</h3>
                                    <p className="lead">
                                    </p>
                                  </div>
                                  <div className='col-2'>
                                    <img style = {{width:'110px',height:'96px' }}src = 'images/card.png'/>
                                  </div>

                                </div>
                                <div className = 'row' style={{margin:'20px'}}>
                                  <div className='col-4'>
                                    <p><b>Balance transfer offer</b></p>
                                    <h3 style={{color:"#649c00"}}>0% for up to 20 months</h3>
                                    <p>on balance transfers made within 90 days of account opening</p>
                                  </div>
                                  <div className='col-4'>
                                    <p><b>Balance transfer offer</b></p>
                                    <h3 style={{color:"#649c00"}}>0% for up to 20 months</h3>
                                    <p>on balance transfers made within 90 days of account opening</p>
                                  </div>
                                  <div className='col-4'>
                                    <p><b>Balance transfer offer</b></p>
                                    <h3 style={{color:"#649c00"}}>0% for up to 20 months</h3>
                                    <p>on balance transfers made within 90 days of account opening</p>
                                  </div>
                                </div>
                                <Jumbotron style={{backgroundColor:"#006a4d",color:'#FFFFFF',position:"relative"}}>
                                <div style={{marginLeft:"7px",float:"left",width : '100px',padding:'0px',display:'flex',alignItems:'center',fontSize:'13px'}}>
                                a variable annual
                                purchase rate of
                                </div>
                                <div style={{marginLeft:"7px",float:"left",width : '100px',padding:'0px',display:'flex',alignItems:'center',fontSize:'30px'}}>
                                  19.94%
                                </div>
                                <div style={{marginLeft:"7px",float:"left",width : '100px',padding:'0px',display:'flex',alignItems:'center',fontSize:'13px'}}>
                                and a variable
                                representative
                                </div>
                                <div style={{marginLeft:"7px",float:"left",width : '150px',padding:'0px',display:'flex',alignItems:'center',fontSize:'30px'}}>
                                  19.9%APR
                                </div>
                                <div style={{marginLeft:"7px",float:"left",width : '100px',padding:'0px',display:'flex',alignItems:'center',fontSize:'13px'}}>
                                based on
                                borrowing
                                </div>
                                <div style={{marginLeft:"7px",float:"left",width : '100px',padding:'0px',display:'flex',alignItems:'center',fontSize:'30px'}}>
                                  £1,200
                                </div>
                                <div style={{marginLeft:"7px",float:"left",width : '125px',padding:'0px',display:'flex',alignItems:'center',fontSize:'13px'}}>
                                over 12 months, with
                                an annual fee of
                                </div>
                                <div style={{marginLeft:"7px",float:"left",width : '100px',padding:'0px',display:'flex',alignItems:'center',fontSize:'30px'}}>
                                  £1,200
                                </div>

                                </Jumbotron>
                                </Jumbotron>
                            </Jumbotron>
                        <center>
                            <h6>Estimates Savings Savings:
                                    <b>11000</b></h6>

                                    <br/>
                            <div ><button className="btn btn-info" onClick={this.toggle}>Apply Now</button></div>
                            <div>
                                {
                                    modal?
                                    <div>
                                    {user=='debit' ?

                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                        <ModalHeader toggle={this.toggle} >New savings account plan info</ModalHeader>
                                        <ModalBody>
                                            <div className='headerStyle'>

                                            </div>
                                            <Table bordered>
                                                <thead>
                                                <tr>
                                                    <th>Bank</th>
                                                    <th>Type</th>
                                                    <th>Savings interest</th>
                                                    <th>You save</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>LBG</td>
                                                    <td>Platinum</td>
                                                    <td>1.25 %</td>
                                                    <td>100 <span>&#163;</span></td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button className="btn btn-info" onClick={this.toggle}>okay</Button>{' '}
                                        </ModalFooter>
                                    </Modal>:
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                        <ModalHeader toggle={this.toggle} >New credit accounts plan info</ModalHeader>
                                        <ModalBody>
                                            <div className='headerStyle'>

                                            </div>
                                            <Table bordered>
                                                <thead>
                                                <tr>
                                                    <th>Bank</th>
                                                    <th>Introductory rate(24 months)</th>
                                                    <th>Regular interest rate</th>
                                                    <th>You save</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>LBG</td>
                                                    <td>20%</td>
                                                    <td>24%</td>
                                                    <td>200 <span>&#163;</span></td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button className="btn btn-info" onClick={this.toggle}>okay</Button>{' '}
                                        </ModalFooter>
                                    </Modal>}
                                    </div>:
                                    null
                                }
                            </div>
                        </center>
                    </div>
            </div>

           </div>
           </div>
       );
   }
}
