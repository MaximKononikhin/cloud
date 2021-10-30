import {ReactNode} from "react";

export type IProps = {
    type: "button" | "submit" | "reset",
    disabled?: boolean,
    onClick?: () => void,
    color?: string,
    ownStyles?: string;
    children: ReactNode | ReactNode[];
}