import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFile } from '../../../common/types';
import { IState } from '../../../store';
import { createDirAction } from '../../../store/actions/file';
import { getCurrentDir } from '../../../store/selectors/file';
import Button from '../../Button/components';
import Input from '../../Input/components';
import Modal from '../../Modal/components';

import * as styles from '../styles/NewFolderModal';
import {INewFolderProps} from "../types";

const NewFolderModal: React.FC<INewFolderProps> = ({ handleClose }) => {
    const currentDir: IFile = useSelector<IState, any>((state) => getCurrentDir(state, {}));
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setName(evt.target.value)
    }

    const handleClickBtn = async () => {
        createDirAction(name, currentDir ?  currentDir._id : undefined)(dispatch);
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
