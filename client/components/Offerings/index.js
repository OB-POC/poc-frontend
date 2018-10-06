import React from 'react';
import Header from '../Header';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter,Table } from 'reactstrap';
//import './style.css'
import ReactLoading from 'react-loading'
import services from '../../services'

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
       debitAccountType : 'Platinum',
       type : 0,
       timer : false
   }
   this.toggle = this.toggle.bind(this);

}

componentWillMount(){
var context = this
    var token = sessionStorage.getItem("token");
  services.makePaymentCall(token,function (data) {
    services.offeringCall(token,function (data1) {
      console.log(data1);

      setTimeout(function(){
        context.setState({timer: true,type:data.totalAvailableBalance});
      }.bind(this),2000)
    })
  })

}


toggle() {
   window.location = 'https://www.lloydsbank.com/credit-cards.asp?#all';
  }

render(){
  console.log(this.state.timer)
       const {debitMessage,creditMessage,modal,user,creditInfoHeading,debitInfoHeading,creditInfo,debitInfo,debitAccountType,type} = this.state
       const message = type > 0 ? debitMessage : creditMessage
       const infoHeading = user == 'debit' ? debitInfoHeading : creditInfoHeading
       const info = user == 'debit' ? debitInfo+' '+debitAccountType+' account' : creditInfo

       if(this.state.timer == false)
return(
  <div>
  <Header history = {this.props.history} header='OFFERINGS' style={{marginBottom:'80px'}}/>
  <br/>
<center > <ReactLoading type='bubbles' color='black' height={'20%'} width={'20%'} /></center>
  </div>
)
else{
       return(
             <div>
             <Header history = {this.props.history} header='OFFERINGS' style={{marginBottom:'80px'}}/>
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
                                  {this.state.type < 0?<Jumbotron style={{backgroundColor:'white',marginTop:'20px',paddingTop:'20px'}}>
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
                                      <p><b>Balance transfer fee</b></p>
                                      <h3 style={{color:"#649c00"}}>3%</h3>
                                      <p>on balance transfers made within 90 days of account opening</p>
                                    </div>
                                    <div className='col-4'>
                                      <p><b>Purchase rate offer</b></p>
                                      <h3 style={{color:"#649c00"}}>0% for up to 20 months</h3>
                                      <p>from account opening</p>
                                    </div>
                                  </div>
                                  <Jumbotron style={{backgroundColor:"#006a4d",color:'#FFFFFF',position:"relative",paddingTop:'15px'}}>
                                  <p>Representative example</p>
                                  <p>Most successful applicants will get:</p>
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
                                  <center>
                                      <h6>Estimates Savings:
                                              <b>11000</b></h6>

                                              <br/>
                                      <div ><button className="btn btn-dark" style={{backgroundColor:'#e0405f'}} onClick={this.toggle}>Apply Now</button></div>

                                  </center>
                                  </Jumbotron>:<Jumbotron style={{backgroundColor:'white',marginTop:'20px',paddingTop:'20px'}}>
                                  <div className='row'>
                                    <div className='col-9'>
                                      <p style={{color:'#649c00',marginBottom:'0px',fontWeight:'400',marginTop:'17px'}}>LLOYDS BANK CURRENT ACCOUNT</p>
                                      <h1 style={{marginTop:'7px'}}>Club Lloyds Platinum Account</h1>
                                      <p style={{fontSize: '22px',color: "#505050",marginTop:'7px'}} >Packed with insurance benefits and variable credit interest when you pay at least two separate Direct Debits each month</p>
                                    </div>
                                    <div className='col-3'>
                                      <img style = {{width:'200px',height:'174px' }}src = 'images/debit.png'/>
                                    </div>
                                  </div>
                                  <hr style = {{border: '0', borderTop: '1px solid #eee'}}/>
                                  <div className = 'row'>
                                  <div className = 'col-6'>
                                  <h2 style = {{fontSize:'24px',fontWeight:'400',marginBottom:'23px'}}>Features and benefits</h2>
                                  <div style = {{ display: 'flex'}}>
                                  <i style = {{ color:'#649c00',fontSize:'50px'}} className = "fas fa-check-circle" />
                                    <div style = {{marginLeft:'10px'}}>
                                <p style = {{marginBottom:'10px'}}><strong>Worldwide travel insurance provided and underwritten by AXA Insurance UK plc.</strong></p>
                                <p>
                                Up to 80 years of age, cover for you and your family (if eligible) for up to 45 consecutive days per trip (for Winter Sports maximum 31 days cover in any calendar year).
                                </p>
                                    </div>
                                  </div>
                                  <div style = {{ display: 'flex'}}>
                                  <i style = {{ color:'#649c00',fontSize:'50px'}} className = "fas fa-check-circle" />
                                    <div style = {{marginLeft:'10px'}}>
                                <p style = {{marginBottom:'10px'}}><b>1.5% AER variable credit interest</b></p>
                                <p>Earn credit interest (paid monthly) on balances between £1 and £5,000 if you pay two separate Direct Debits each month.</p>
                                    </div>
                                  </div>
                                  <div style = {{ display: 'flex'}}>
                                  <i style = {{ color:'#649c00',fontSize:'50px'}} className = "fas fa-check-circle" />
                                    <div style = {{marginLeft:'10px'}}>
                                <p style = {{marginBottom:'10px'}}><b>Choose your lifestyle benefit</b>
                                As a Club Lloyds customer you can choose a different lifestyle benefit every year per account from:
                                <ul>
                                <li>6 cinema tickets,</li>
                                <li>an annual magazine subscription, or</li>
                                <li>annual Gourmet Society membership.</li>
                                </ul>
                                </p>
                                    </div>
                                  </div>
                                  <div style = {{ display: 'flex'}}>
                                  <i style = {{ color:'#649c00',fontSize:'50px'}} className = "fas fa-check-circle" />
                                    <div style = {{marginLeft:'10px'}}>
                                <p style = {{marginBottom:'10px'}}><b>Send Money Abroad</b></p>
                                <p>Use your current account to make an International Payment.</p>
                                    </div>
                                  </div>
                                  </div>
                                  <div className = 'col-6'>
                                  <h2 style = {{fontSize:'24px',fontWeight:'400',marginBottom:'23px'}}>Keep in mind</h2>
                                  <div style = {{ display: 'flex',marginBottom:'20px'}}>
                                  <i style = {{ color:'#d24702',fontSize:'50px'}} className = "fas fa-exclamation-circle" />
                                    <div style = {{marginLeft:'10px'}}>
                                <p style = {{marginBottom:'10px'}}><b>Monthly fee</b></p>
                                The Club Lloyds Platinum monthly account fee comprises of:
                                <ul>
                                <li>Platinum Account monthly account fee of £19 per month</li>
                                <li>Club Lloyds monthly account fee is Free or £3 per month.</li>
                                </ul>
                                The £3 fee is waived for each month you pay in at least £1,500 into your account.  If in any month you don't pay in this amount, you will need to pay the £3 monthly account fee.
  Maximum combined monthly account fee of £22 per month.
                                    </div>
                                  </div>
                                  <div style = {{ display: 'flex',marginBottom:'20px'}}>
                                  <i style = {{ color:'#d24702',fontSize:'50px'}} className = "fas fa-exclamation-circle" />
                                    <div style = {{marginLeft:'10px'}}>
                                <p style = {{marginBottom:'10px'}}><b>Planned Overdrafts</b></p>
                                <p>All Planned Overdraft applications are subject to approval after our assessment of your circumstances.</p>
                                    </div>
                                  </div>
                                  <div style = {{backgroundColor:'#f1f1f1',padding:'17px'}}>
                                    <p style = {{marginBottom:'0px'}}><b>Representative example</b></p>
                                    <p style = {{marginBottom:'0px'}}>If you use a Planned Overdraft of <b>£1,200</b> on your Classic Account, then we’ll charge you <b>a daily overdraft fee of £1.28.</b> For Club Lloyds Platinum accounts, the daily overdraft fee <b>on the first £300 is 0p</b>.</p>
                                  </div>
                                  </div>
                                  </div>
                                  <div style = {{marginTop : '35px',display:'flex',backgroundColor:'#005f45',padding:'30px 20px',color:'#ffff',justifyContent:'space-between'}}>
                                    <div style = {{paddingLeft:'20px',display:'flex'}}>
                                    <i class="fas fa-stopwatch" style = {{fontSize:'23px',color:'#649c00'}}></i>
                                    <p style = {{paddingLeft:'20px'}}>The application process typically takes about 10 mins</p>
                                    </div>
                                    <button onClick={function () {
                                      window.location = 'https://apply.lloydsbank.co.uk/sales-content/cwa/l/pca/index-app.html?product=clubplatinumaccountLTB#!'
                                    }} className = 'btn btn-dark' style = {{backgroundColor:'#649c00',border:'none'}} >Apply Now </button>
                                  </div>
                                  </Jumbotron>}
                              </Jumbotron>

                      </div>
              </div>

             </div>
             </div>
         );
       }

   }
}



/* <div>
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
</div> */
