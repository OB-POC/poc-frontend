import React from 'react';
import './style.css';

export default class Header extends React.Component{
    render(){
        return(
            <div className="container-fluid header">
            <div className="card">
                <div className="card-header heading">
                    <h5 className="float-left">ACCOUNT OVERVIEW</h5>
                    <h6 className="float-right">Logout</h6>
                </div>
            </div>
               
            </div>
        );
    }
}