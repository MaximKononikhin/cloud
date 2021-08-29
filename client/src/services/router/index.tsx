import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Main = React.lazy(() => import('../../pages/Main'));
const Catalog = React.lazy(() => import('../../pages/Catalog'));
const Entrance = React.lazy(() => import('../../pages/Entrance'));
const Registration = React.lazy(() => import('../../pages/Registration'));

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Main} />
                <PrivateRoute exact path="/catalog" component={Catalog} />
                <Route exact path="/login" component={Entrance} />
                <Route exact path="/registration" component={Registration} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
