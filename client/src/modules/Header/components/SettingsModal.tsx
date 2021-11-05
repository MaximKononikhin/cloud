import React, { ChangeEvent } from 'react'
import { jsx, css } from '@emotion/react';

import profileIcon from '../../../assets/icons/profileIcon.svg';
import cameraIcon from '../../../assets/icons/camera.svg';

import * as styles from '../styles/SettingsModal';
import { useSession } from '../../../common/services/context/SessionContext';
import { BASE_URL } from '../../../common/constants';
import Modal from '../../Modal/components';
import { ISettingsModalProps } from "../types";



const SettingsModal: React.FC<ISettingsModalProps> = ({ handleClose }) => {
    const { user, uploadAvatar } = useSession();

    const handleChangeAvatar = async (e: any) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        await uploadAvatar(formData);
    }


    return (
        <Modal handleClose={handleClose}>
            <div css={css(styles.subwrapper)} data-testid="settings-modal">
                <div css={css(styles.avatarWrapper)}>
                    {
                        user.user.avatar ?
                            <img src={`${BASE_URL}/${user.user.avatar}`} width="110" height="110" alt="user-avatar" css={css(styles.avatar)} />
                            :
                            <img src={profileIcon} width="110" height="110" alt="no-avatar" css={css(styles.avatar)} />
                    }
                    <label css={css(styles.uploadAvatarWrapper)}>
                        <input type="file" accept="image/*" onChange={handleChangeAvatar} placeholder="Загрузить аватар" data-testid="settings-modal-input"/>
                        <img src={cameraIcon} width="37" height="37" alt="" />
                    </label>
                </div>
                <div>
                    <p css={css(styles.row)}>
                        <span css={css(styles.categoryHeading)}>Имя пользователя</span>
                        <span css={css(styles.name)}>{user.user.firstName} {user.user.secondName}</span>
                    </p>
                    <p css={css(styles.row)}>
                        <span css={css(styles.categoryHeading)}>E-mail</span>
                        <span css={css(styles.email)}>{user.user.email}</span>
                    </p>
                </div>
            </div>
        </Modal>
    )
}

export default SettingsModal
