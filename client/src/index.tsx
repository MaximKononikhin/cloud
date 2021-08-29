
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { jsx, css } from '@emotion/react'

import './index.css';
import { AuthProvider } from './context/AuthContext';
import Router from './services/router';




const Loading = () => <div>Loading chunk..</div>

const App: React.FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <AuthProvider>
                <Router />
            </AuthProvider>

        </Suspense>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('app'),
)
