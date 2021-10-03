import { css } from '@emotion/react';
import React from 'react'
import { IFile } from '../../../common/types';
import * as styles from '../styles';
import folderIcon from '../../../assets/icons/folderIcon.svg';
import fileIcon from '../../../assets/icons/fileIcon.svg';
import trashIcon from '../../../assets/icons/trash.svg';
import arrowIcon from '../../../assets/icons/arrow.svg';

type IProps = {
    file: IFile
}

const File: React.FC<IProps> = ({ file }) => {
    return (
        <div css={css(styles.file)}>
            {file.type === 'dir' ? 
                <img src={folderIcon} alt="" width="99" height="69" css={css(styles.iconType)} />
                :
                <img src={fileIcon} alt="" width="60" height="78" css={css(styles.iconType)} />
            }
            <p css={css(styles.name)}>
                {file.name}
            </p>

            <div>
                <img src={trashIcon} width="14" height="15" alt="" css={css('margin-right: 10px;')}/>
                <img src={arrowIcon} width="15" height="15" alt="" />
            </div>
        </div>
    )
}

export default File
