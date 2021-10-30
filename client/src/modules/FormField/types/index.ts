import React from "react";

export type IProps = {
    type: 'text' | 'password',
    name: string,
    value: string,
    label: string,
    onChange: (e: string | React.ChangeEvent<any>) => void,
    onBlur?: (e: any) => void,
    ownStyles?: string,
    error?: string
}