import React, {ReactNode, useRef} from 'react'
import { jsx, css } from '@emotion/react';

import * as styles from '../styles';
import cross from '../../../assets/icons/cross.svg';
import useClickOutside from "../../../common/services/hooks/useClickOutside";
import {IProps} from "../types";

const Modal: React.FC<IProps> = ({ handleClose, children, ownStyles }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useClickOutside(modalRef, handleClose);
    return (
        <div css={css(styles.modalOverlay)}>
            <div css={css(styles.modal)} ref={modalRef}>
                <div css={css(styles.wrapper, ownStyles)}>
                    <button css={css(styles.buttonClose)} onClick={handleClose}>
                        <img src={cross} width="11" height="11" alt="" />
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
