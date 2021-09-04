import React, { ReactNode, useRef, useState } from 'react'
import { jsx, css } from '@emotion/react'

import * as styles from './styles';
import logo from '../../../assets/icons/logo.svg';
import profileIcon from '../../../assets/icons/profileIcon.svg';
import carret from '../../../assets/icons/carret.svg';
import { useSession } from '../../../context/SessionContext';
import ModalService from '../../../common/services/ModalService';
import useClickOutside from '../../../common/services/hooks/useClickOutside';
import SettingsModal from '../../SettingsModal/components';
import { BASE_URL } from '../../../common/constants';

const Header: React.FC = () => {
    const { user, logout } = useSession();
    const [isModalOpen, setModalOpen] = useState(false);
    const userModalRef = useRef<HTMLDivElement>(null);
    useClickOutside(userModalRef, () => setModalOpen(false));

    const onExitClickHandler = async () => {
        await logout();
    };

    const onSettingsClickHandler = () => {
        setModalOpen(false);
        ModalService.pushModal(<SettingsModal handleClose={ModalService.modalDone}/>);
    }

    const userModal = (
        <div ref={userModalRef} css={css(styles.modalStyles)}>
            <a onClick={onSettingsClickHandler}>Настройки</a>
            <a onClick={onExitClickHandler}>Выйти</a>
        </div>
    );
    
    if (!user) return null;

    return (
        <header css={css(styles.header)}>
            <div css={css(styles.wrapper)}>
                <span css={css(styles.name)}>
                    {user.user.firstName}
                </span>
                <img src={user.user.avatar ? `${BASE_URL}/${user.user.avatar}` : profileIcon} width="27" height="27" alt="" css={css(styles.avatar)}/>
                <button css={css(styles.btn)} onClick={() => setModalOpen(!isModalOpen)}>
                    <img src={carret} width="6" height="6" alt="" />
                </button>
                {isModalOpen && userModal}
            </div>
        </header>
    )
};

export default Header;