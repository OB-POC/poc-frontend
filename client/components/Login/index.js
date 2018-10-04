import React from 'react';
import services from '../../services'
export default class PayOutPlan extends React.Component{
  constructor(props){
    super(props);
    this.onLogin = this.onLogin.bind(this)
  }
onLogin(){
  const username = document.getElementById("username").value
  const pass = document.getElementById("pwd").value
  var queryData = {
    username:username,
    password:pass
  }
  services.logincall(queryData,function (response) {
    if(response.authenticated){
      sessionStorage.setItem("username",username)
      sessionStorage.setItem("token",response.token)
    }else {
      console.error("not authourised");
    }
  },function (err) {
    throw(err)
  })
}
    render(){
        return(
            <div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-4">
                 <img src='data:image/png;base64,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'
                 alt="Sample App Logo"/>
                </div>
                <div class="col-7"></div>
              </div>

              <div class="row">
  <div class="col-1"></div>
  <div class="col-7"><hr style = {{
marginTop: "1rem",
marginBottom: "1rem",
border: "0",
borderTop: "1px solid rgba(0, 0, 0, 0.1)"
}}/></div>
  <div class="col-2"></div>
</div>
              <div class="row">
              <div class="col-1"></div>
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
              <div class="col-7"></div>
              </div>
              </div>
        );
    }
}
