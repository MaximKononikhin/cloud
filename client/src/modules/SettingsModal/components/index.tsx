import React, { ChangeEvent } from 'react'
import { jsx, css } from '@emotion/react';

import cross from '../../../assets/icons/cross.svg';
import profileIcon from '../../../assets/icons/profileIcon.svg';
import cameraIcon from '../../../assets/icons/camera.svg';

import * as styles from '../styles/index';
import { useSession } from '../../../context/SessionContext';
import { BASE_URL } from '../../../common/constants';

type IProps = {
    handleClose: () => void;
}



const SettingsModal: React.FC<IProps> = ({ handleClose }) => {
    const { user, uploadAvatar } = useSession();

    const handleChangeAvatar = async (e: any) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        await uploadAvatar(formData);
    }


    return (
        <div css={css(styles.modal)}>
            <div css={css(styles.wrapper)}>
                <button css={css(styles.buttonClose)} onClick={handleClose}>
                    <img src={cross} width="11" height="11" alt="" />
                </button>
                <div css={css(styles.subwrapper)}>
                    <div css={css(styles.avatarWrapper)}>
                        <img src={user.user.avatar ? `${BASE_URL}/${user.user.avatar}` : profileIcon} width="110" height="110" alt="" css={css(styles.avatar)} />
                        <label css={css(styles.uploadAvatarWrapper)}>
                            <input type="file" accept="image/*" onChange={handleChangeAvatar} placeholder="Загрузить аватар" />
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
            </div>
            
        </div>
    )
}

export default SettingsModal
