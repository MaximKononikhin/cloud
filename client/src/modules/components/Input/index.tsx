import React from 'react';

type IProps = {
    value: string,
    onChange: (val: string) => void,
}

const Input: React.FC<IProps> = ({value, onChange}) => {
    return (
        <div>
            <input data-testid="input" value={value} onChange={(evt) => onChange(evt.target.value)}/>
        </div>
    )
};

export default Input;
