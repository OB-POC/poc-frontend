import React from 'react';
import Header from '../Header';

export default class AccountOverview extends React.Component{
    render(){
        return(
            <div>
                <Header/>
            <div className="container">
            <div>
            <div className="table" style={{fontFamily:'WiproAkkurat-Regular'}}>
                            <thead className="table-head">
                                <tr>
                                    <th>Poll Name</th>
                                    <th>Votes</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>What task do you want to accomplish on this wipboard??</td>
                                    <td>647</td>
                                    <td><i className="fas fa-edit fa-2x edit-button"></i><i className="fas fa-trash-alt fa-2x delete-button"></i></td>

                                </tr>
                                <tr>
                                    <td>How can we improve Wipboard?</td>
                                    <td>589</td>
                                    <td><i className="fas fa-edit fa-2x edit-button"></i><i className="fas fa-trash-alt fa-2x delete-button"></i></td>

                                </tr>
                                <tr>
                                    <td>How visually appealing is our website?</td>
                                    <td>235</td>
                                    <td><i className="fas fa-edit fa-2x edit-button"></i><i className="fas fa-trash-alt fa-2x delete-button"></i></td>
                                </tr>
                                <tr>
                                    <td>Artificial Intelligence: Can it replace humans in industrial jobs?</td>
                                    <td>765</td>
                                    <td><i className="fas fa-edit fa-2x edit-button"></i><i className="fas fa-trash-alt fa-2x delete-button"></i></td>
                                </tr>
                                <tr>
                                    <td>How easy is it to navigate our website?</td>
                                    <td>543</td>
                                    <td><i className="fas fa-edit fa-2x edit-button"></i><i className="fas fa-trash-alt fa-2x delete-button"></i></td>
                                </tr>
                                <tr>
                                    <td>What do you think about the story we tell through our website?</td>
                                    <td>385</td>
                                    <td><i className="fas fa-edit fa-2x edit-button"></i><i className="fas fa-trash-alt fa-2x delete-button"></i></td>
                                </tr>
                            </tbody>
                        </div>
            </div>
               
            </div>
            </div>
        );
    }
}