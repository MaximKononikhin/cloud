
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { jsx, css } from '@emotion/react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const Main = React.lazy(() => import('./pages/Main'));
const Catalog = React.lazy(() => import('./pages/Catalog'));

const style = css`
  color: hotpink;
`



const Loading = () => <div>Loading chunk..</div>

const App: React.FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/catalog" component={Catalog} />
                </Switch>
            </Router>
        </Suspense>

    )
}

ReactDOM.render(<App/>,
    document.getElementById('app'),
)
