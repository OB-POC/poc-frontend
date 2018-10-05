import React from 'react';
import './style.css';

export default class Header extends React.Component{
  constructor(){
     super();
     if(!sessionStorage.getItem("token"))
      this.props.history.push('login')
   }
    render(){
        return(
            <div className="container-fluid header">
            <div className="card">
                <div className="card-header">
                    <h5 className="float-left">ACCOUNT OVERVIEW</h5>
                    <h6 className="float-right">Logout</h6>
                </div>
            </div>

            </div>
        );
    }
}
