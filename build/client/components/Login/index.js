import React from 'react';
import services from '../../../services'
export default class PayOutPlan extends React.Component{
  constructor(props){
    super(props);
    this.onLogin = this.onLogin.bind(this)
  }
onLogin(){
  const username = document.getElementById("username").value
  const pass = document.getElementById("pwd").value
    if(services.logincall(username,pass).authorised)
      console.log("loged");
}
    render(){
        return(
            <div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">              <div class="card">
                              <div class="card-header">
                              LBG
                              </div>
                              </div></div>
                <div class="col-6"></div>
              </div>

              <div class="row">
  <div class="col-2"></div>
  <div class="col-7"><hr style = {{
marginTop: "1rem",
marginBottom: "1rem",
border: "0",
borderTop: "1px solid rgba(0, 0, 0, 0.1)"
}}/></div>
  <div class="col-1"></div>
</div>
              <div class="row">
              <div class="col-2"></div>
              <div class="col-4">
              <h2>Login</h2>
              <div class="form-group">
                <label for="email">Username</label>
                <input type="email" class="form-control" id="username"/>
              </div>
              <div class="form-group">
                <label for="pwd">Password </label>
                <input type="password" class="form-control" id="pwd"/>
              </div>
              <div class="form-group form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox"/> Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary" onClick = {this.onLogin} >Login</button>
              </div>
              <div class="col-6"></div>
              </div>
              </div>
        );
    }
}
