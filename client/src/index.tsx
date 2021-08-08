
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { jsx, css } from '@emotion/react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';



const Main = React.lazy(() => import('./pages/Main'));
const Catalog = React.lazy(() => import('./pages/Catalog'));
const Entrance = React.lazy(() => import('./pages/Entrance'));




const Loading = () => <div>Loading chunk..</div>

const App: React.FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/catalog" component={Catalog} />
                    <Route exact path="/login" component={Entrance} />
                </Switch>
            </Router>
        </Suspense>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('app'),
)
