import { css } from '@emotion/react';
import React, { useState } from 'react';
import { createDir } from '../../../common/services/api/rest/files/createDir';
import Button from '../../Button/components';
import Input from '../../Input/components';
import Modal from '../../Modal';

import * as styles from '../styles/NewFolderModal';

type IProps = {
    handleClose: () => void;
}

const NewFolderModal: React.FC<IProps> = ({ handleClose }) => {
    const [name, setName] = useState('');

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setName(evt.target.value)
    }

    const handleClickBtn = async () => {
        const response = await createDir({name, type: 'dir'});
        console.log(response);
        handleClose();
    }

    return (
        <Modal handleClose={handleClose} ownStyles="padding: 36px 45px;">
            <div css={css(styles.wrapper)}>
                <h2 css={css(styles.heading)}>
                    Создать новую папку
                </h2>
                <label css={css(styles.label)}>
                    <p>
                        Название папки
                    </p>
                    <Input type="text" value={name} onChange={handleChange} ownStyles={styles.input} />
                </label>
                <div css={css(styles.btnsWrapper)}>
                    <Button type="button" ownStyles={styles.createBtn} onClick={handleClickBtn}>
                        Создать
                    </Button>
                    <a onClick={handleClose}>
                        Отмена
                    </a>
                </div>
            </div>
        </Modal>
    )
}

export default NewFolderModal
