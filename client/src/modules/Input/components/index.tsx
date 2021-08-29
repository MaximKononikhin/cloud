import { css } from '@emotion/react';
import React from 'react';

import * as styles from './styles';

type IProps = {
    type: 'text' | 'password',
    name: string,
    value: string,
    label: string,
    onChange: (e: string | React.ChangeEvent<any>) => void,
    onBlur?: (e: any) => void,
    ownStyles?: string,
    error?: string
}

const Input: React.FC<IProps> = ({
    name, type, value, onBlur, onChange, label, ownStyles, error
}) => {
    return (
        <label css={css(styles.inputStyles, ownStyles ? ownStyles : '')}>
            <p>
                {label}
            </p>
            <input 
                type={type} 
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            <span css={css(styles.errorStyle)}>{error}</span>
        </label>
    )
}

export default Input
