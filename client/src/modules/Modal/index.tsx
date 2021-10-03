import React, { ReactNode } from 'react'
import { jsx, css } from '@emotion/react';

import * as styles from './styles';
import cross from '../../assets/icons/cross.svg';

type IProps = {
    handleClose: () => void;
    ownStyles?: string;
    children: ReactNode | ReactNode[]
}

const Modal: React.FC<IProps> = ({ handleClose, children, ownStyles }) => {
    return (
        <div css={css(styles.modal)}>
            <div css={css(styles.wrapper, ownStyles)}>
                <button css={css(styles.buttonClose)} onClick={handleClose}>
                    <img src={cross} width="11" height="11" alt="" />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal
