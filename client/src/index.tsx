
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { jsx, css } from '@emotion/react'

import './index.css';
import { SessionProvider } from './common/services/context/SessionContext';
import Router from './common/services/router';
import { store } from './store';


const Loading = () => <div>Loading chunk..</div>

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Suspense fallback={<Loading />}>
                <SessionProvider>
                    <Router />
                </SessionProvider>
            </Suspense>
        </Provider>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('app'),
)
