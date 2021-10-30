import { css } from '@emotion/react';
import React from 'react';
import Input from '../../Input/components';

import * as styles from '../styles';
import {IProps} from "../types";



const FormField: React.FC<IProps> = ({
    name, type, value, onBlur, onChange, label, ownStyles, error
}) => {
    return (
        <label css={css(styles.inputStyles, ownStyles ? ownStyles : '')}>
            <p>
                {label}
            </p>
            <Input 
                type={type} 
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                css={css(error ? 'border: 1px solid #E13A3A!important' : '')}
            />
            {error && 
                (
                    <span css={css(styles.errorStyle)}>{error}</span>
                )
            }
        </label>
    )
}

export default FormField
