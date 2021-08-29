import React from 'react';
import { css } from '@emotion/react';

import Header from '../../Header/components';
import bg from '../../../assets/images/background.png';
import * as styles from './styles';

type IProps = {
    children: React.ReactNode,
    maxHeight?: number,
}

const MainLayout: React.FC<IProps> = ({ children, maxHeight = 641 }) => {
    return (
        <>
            <img src={bg} css={css(styles.bgStyles)} />
            <Header />
            <main css={css(styles.mainWrapper)}>
                <section css={css(`max-height: ${maxHeight}px;`)}>
                    {children}
                </section>
            </main>
        </>
    )
}

export default MainLayout
