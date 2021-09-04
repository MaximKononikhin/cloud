import React from 'react';
import { css } from '@emotion/react';

import * as styles from './styles';
import Header from '../../Header/components';

type IProps = {
    children: React.ReactNode,
    maxHeight?: number,
}

const MainLayout: React.FC<IProps> = ({ children, maxHeight = 641 }) => {
    return (
        <main css={css(styles.mainWrapper)}>
            <section css={css(`max-height: ${maxHeight}px; position: relative;`)}>
                <Header /> 
                {children}
            </section>
        </main>
    )
}

export default MainLayout
