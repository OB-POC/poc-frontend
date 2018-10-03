import React from 'react';

export default class Header extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    <h5 className="float-left">Account Overview</h5>
                    <h6 className="float-right">Logout</h6>
                </div>
            </div>
               
            </div>
        );
    }
}