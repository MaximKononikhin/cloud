import React from 'react'
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom';

import * as styles from './styles';

const Header: React.FC = () => {
    return (
        <header css={css(styles.header)}>
            <div css={css(styles.wrapper)}>
                <Link to="/" css={css(styles.logoLink)}>CLOUD</Link>
                <div css={css(styles.subWrapper)}>
                    <Link to="/login" css={css(styles.linkStyles)}>Войти</Link>
                    <Link to="/registartion" css={css(styles.linkStyles)}>Регистрация</Link>
                </div>
            </div>
        </header>
    )
};

export default Header;