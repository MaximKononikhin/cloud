import { css } from '@emotion/react';
import React from 'react';

import * as styles from './styles';

type IProps = {
    type: 'text' | 'password',
    name: string,
    value: string,
    label: string,
    onChange: (e: string | React.ChangeEvent<any>) => void,
    onBlur: (e: any) => void,
    ownStyles: string,
}

const Input: React.FC<IProps> = ({
    name, type, value, onBlur, onChange, label
}) => {
    return (
        <label css={css(styles.inputStyles)}>
            <span>
                {label}
            </span>
            <input 
                type={type} 
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
        </label>
    )
}

export default Input
