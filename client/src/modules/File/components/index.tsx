import { css } from '@emotion/react';
import React from 'react'
import { IFile } from '../../../common/types';
import * as styles from '../styles';
import folderIcon from '../../../assets/icons/folderIcon.svg';
import fileIcon from '../../../assets/icons/fileIcon.svg';
import trashIcon from '../../../assets/icons/trash.svg';
import arrowIcon from '../../../assets/icons/arrow.svg';
import { useDispatch } from 'react-redux';
import { deleteFileAction, pushDirStack } from '../../../store/actions/file';

type IProps = {
    file: IFile
}

const File: React.FC<IProps> = ({ file }) => {
    const dispatch = useDispatch();

    const handleDelete = (evt: React.MouseEvent) => {
        evt.stopPropagation();
        deleteFileAction(file._id)(dispatch);
    };

    const handleFileClick = () => {
        dispatch(pushDirStack(file));
    }

    return (
        <div css={css(styles.file)} onClick={handleFileClick}>
            {file.type === 'dir' ? 
                <img src={folderIcon} alt="" width="99" height="69" css={css(styles.iconType)} />
                :
                <img src={fileIcon} alt="" width="60" height="78" css={css(styles.iconType)} />
            }
            <p css={css(styles.name)}>
                {file.name}
            </p>

            <div>
                <button css={css(styles.btnStyles, file.type === 'file' && 'margin-right: 10px;')} onClick={handleDelete} >
                    <img src={trashIcon} width="14" height="15" alt="" />
                </button>
                {file.type === 'file' && <img src={arrowIcon} width="15" height="15" alt="" />}
            </div>
        </div>
    )
}

export default File
