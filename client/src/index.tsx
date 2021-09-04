
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { jsx, css } from '@emotion/react'

import './index.css';
import { SessionProvider } from './context/SessionContext';
import Router from './common/services/router';


const Loading = () => <div>Loading chunk..</div>

const App: React.FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <SessionProvider>
                <Router />
            </SessionProvider>

        </Suspense>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('app'),
)
