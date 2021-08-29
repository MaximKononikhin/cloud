import { css } from '@emotion/react';
import React from 'react';

import * as styles from './styles';

type IProps = {
    type: "button" | "submit" | "reset",
    disabled: boolean,
    onClick?: () => void,
    color?: string,
    ownStyles?: string
}

const Button: React.FC<IProps> = ({ color = 'linear-gradient(105.79deg, #93FFC9 0%, #75DDA4 100%);', onClick, ownStyles, type, disabled, children }) => {
    return (
        <button onClick={onClick} css={css(styles.btnStyles, `background: ${color}`, ownStyles ? ownStyles : '')} type={type} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
