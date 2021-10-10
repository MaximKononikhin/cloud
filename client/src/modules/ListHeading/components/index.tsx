import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';


import Button from '../../Button/components';
import * as styles from '../styles';
import arrow from '../../../assets/icons/arrowBack.svg';
import searchIcon from '../../../assets/icons/search.svg';
import addFolderIcon from '../../../assets/icons/addFolderIcon.svg';
import addDocIcon from '../../../assets/icons/addDocIcon.svg';
import Input from '../../Input/components';
import ModalService from '../../../common/services/ModalService';
import NewFolderModal from './NewFolderModal';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDir } from '../../../store/selectors/file';
import { IState } from '../../../store';
import { IFile } from '../../../common/types';
import { popDirStack } from '../../../store/actions/file';

const ListHeading: React.FC = () => {
    const currentDir: IFile = useSelector<IState, any>((state) => getCurrentDir(state, {}));
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const handleBackClick = () => {
        dispatch(popDirStack());
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(evt.target.value)
    };

    const onClick =  () => {
        ModalService.pushModal(<NewFolderModal handleClose={ModalService.modalDone}/>)
    }

    return (
        <div css={css(styles.wrapper)}>
            <h2 css={css(styles.foldername)}>{currentDir ? currentDir.name : ''}</h2>
            <div css={css(styles.subWrapper)}>
                <div css={css(styles.leftWrapper)}>
                    <Button type="button" ownStyles={styles.backBtn} onClick={handleBackClick}>
                        <img src={arrow} alt="" width="10" height="8" />
                    </Button>
                    <div css={css(styles.searchWrapper)}>
                        <Input type="text" value={search} onChange={handleChange} ownStyles={styles.searchInput}/>
                        <img src={searchIcon} alt="" />
                    </div>
                </div>
                <div css={css(styles.btnWrapper)}>
                    <Button type="button" ownStyles={styles.btn}>
                        <input type="file" />
                        <img src={addDocIcon} alt="" width="14" height="11" />
                    </Button>
                    <Button type="button" ownStyles={styles.btn} onClick={onClick}>
                        <img src={addFolderIcon} alt="" width="14" height="11" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ListHeading
