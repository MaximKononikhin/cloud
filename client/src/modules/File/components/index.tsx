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
import { downloadFile } from '../../../common/services/api/rest/files/downloadFile';
import { IProps } from "../types";



const File: React.FC<IProps> = ({ file }) => {
    const dispatch = useDispatch();

    const handleDelete = (evt: React.MouseEvent) => {
        evt.stopPropagation();
        deleteFileAction(file._id)(dispatch);
    };

    const handleFileClick = () => {
        if (file.type === 'dir') {
            dispatch(pushDirStack(file));
            return;
        }
        return;
    }

    const handleDownloadFile = async (evt: React.MouseEvent) => {
        evt.stopPropagation();
        const { data } = await downloadFile(file._id);
        const downloadUrl = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    return (
        <div css={css(styles.file)} onClick={handleFileClick} data-testid="file-element">
            {file.type === 'dir' ?
                <img src={folderIcon} alt="" width="99" height="78" css={css(styles.iconType)} />
                :
                <img src={fileIcon} alt="" width="60" height="78" css={css(styles.iconType)} />
            }
            <p css={css(styles.name)}>
                {file.name}
            </p>

            <div>
                <button css={css(styles.btnStyles, file.type !== 'dir' && 'margin-right: 10px;')} onClick={handleDelete} >
                    <img src={trashIcon} width="14" height="15" alt="" />
                </button>
                {file.type !== 'dir' && (
                    <button css={css(styles.btnStyles)} onClick={handleDownloadFile}>
                        <img src={arrowIcon} width="15" height="15" alt="" />
                    </button>
                )}
            </div>
        </div>
    )
}

export default File