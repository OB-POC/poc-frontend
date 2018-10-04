import React from 'react';
import {render }from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Login from './components/Login';
import AccountOverview from './components/AccountOverview';
import PayOutPlan from './components/PayOutPlan';

render(
<HashRouter>
    <div>
        <Route exact path='/' component={Login} />
        <Route path='/accounts' component={AccountOverview} />
        <Route path='/plan' component={PayOutPlan} />
    </div>
</HashRouter>, document.getElementById('root'));