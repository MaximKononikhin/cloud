import {ReactNode} from "react";

export type IProps = {
    handleClose: () => void;
    ownStyles?: string;
    children: ReactNode | ReactNode[]
}