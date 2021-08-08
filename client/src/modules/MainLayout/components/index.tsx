import React from 'react';

import Header from '../../Header/components';
import bg from '../../../assets/images/background.png';
import { css } from '@emotion/react';

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <img src={bg} css={css('width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: -1;')} />
            <Header />
            {children}
        </>
    )
}

export default MainLayout
