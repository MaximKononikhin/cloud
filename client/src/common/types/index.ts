import { Method } from "axios";

export type IMakeRequest = {
    url: string,
    method?:  Method,
    headers?: any;
    params?: any;
    data?: any;
};

export type IUser = {
    user: {
        email: string;
        firstName: string;
        secondName: string;
        password: string;
        diskSpace: number;
        usedSpace: number;
        avatar: string;
        files: any[],
    }
}

export type IFile = {
    _id: string;
    name: string;
    type: 'dir' | 'file';
    accessLink: string;
    size: number;
    path: string;
    user: string;
    parent: string;
    children: string[];
}

export type IRegistration = {
    email: string
    firstName: string
    secondName: string
    password: string
}

export type ILogin = {
    email: string,
    password: string
}


