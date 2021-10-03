import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

import * as styles from './styles';

type IProps = {
    type: "button" | "submit" | "reset",
    disabled?: boolean,
    onClick?: () => void,
    color?: string,
    ownStyles?: string;
    children: ReactNode | ReactNode[];
}

const Button: React.FC<IProps> = ({ color = 'linear-gradient(267.23deg, #FC6076 5.3%, #FF9944 90.07%)', onClick, ownStyles, type, disabled, children }) => {
    return (
        <button onClick={onClick} css={css(styles.btnStyles, `background: ${color};`, ownStyles ? ownStyles : '')} type={type} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
