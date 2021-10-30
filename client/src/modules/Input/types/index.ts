import React from "react";

export type IProps = {
    type: string,
    name?: string,
    value: string,
    onChange: (e: string | React.ChangeEvent<any>) => void,
    onBlur?: (e: any) => void,
    ownStyles?: string,
    error?: string
}