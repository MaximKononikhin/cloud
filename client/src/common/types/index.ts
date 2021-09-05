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


