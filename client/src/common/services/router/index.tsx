import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ModalProvider from '../../../modules/ModalProvider/components';
import PrivateRoute from './PrivateRoute';

const Main = React.lazy(() => import('../../../pages/Main'));
const Entrance = React.lazy(() => import('../../../pages/Entrance'));
const Registration = React.lazy(() => import('../../../pages/Registration'));

const Router = () => {
    return (
        <BrowserRouter>
            <ModalProvider />
            <Switch>
                <PrivateRoute exact path="/" component={Main} />
                <Route exact path="/login" component={Entrance} />
                <Route exact path="/registration" component={Registration} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
