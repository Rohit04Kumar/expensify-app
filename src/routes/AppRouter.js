import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/dashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
        <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path="/" component={DashboardPage} exact={true} /> 
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={PageNotFound} />
        </Switch>
        </div>
        </BrowserRouter>
);

export default AppRouter;