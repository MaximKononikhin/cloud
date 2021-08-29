import React from 'react'
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom';

import * as styles from './styles';
import logo from '../../../assets/icons/logo.svg';
import profileIcon from '../../../assets/icons/profileIcon.svg';
import { useAuth } from '../../../context/AuthContext';

const Header: React.FC = () => {
    const { user, logout } = useAuth();

    const headerContent = user ? 
        (
            <div css={css(styles.subWrapper)} onClick={async () => {
                await logout();
            }}>
                <span>{user.user.firstName}{` `}{user.user.secondName}</span>
                <img src={profileIcon} width="38" height="38" alt="" />
            </div>
        ) : null;

    return (
        <header css={css(styles.header)}>
            <div css={css(styles.wrapper)}>
                <Link to="/" css={css(styles.logoLink)}>
                    <img src={logo} width="77" height="48" alt="" />
                </Link>
                {headerContent}
            </div>
        </header>
    )
};

export default Header;