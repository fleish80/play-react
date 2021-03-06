import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AccountsListComponent from './account/accounts-list/accouts-list.component';
import LoginComponent from './account/login/login.component';

const AppRouter: React.FunctionComponent = () =>
    <Switch>
        <Route exact={true} path="/" component={LoginComponent} />
        <Route path="/list" component={AccountsListComponent} />
    </Switch>

export default AppRouter;