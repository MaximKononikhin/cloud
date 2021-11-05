import { css } from '@emotion/react';
import React from 'react';

import * as styles from '../styles';
import {IProps} from "../types";



const Input: React.FC<IProps> = ({ name, type, value, onBlur, onChange, ownStyles, error }) => {
    return (
        <input 
            css={css(styles.inputStyles, ownStyles ? ownStyles : '', error ? 'border: 1px solid #E13A3A!important' : '')}
            type={type} 
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            data-testid="input"
        />
    )
}

export default Input
