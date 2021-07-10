
import React from 'react';
import ReactDOM from 'react-dom';
import { jsx, css } from '@emotion/react'

const style = css`
  color: hotpink;
`

import kotik from './assets/images/kotik.jpg';

const App: React.FC = () => {
    return (
        <div>
            <h1 css={style}>Ku</h1>
            <img src={kotik} alt="" />
        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('app'),
)
