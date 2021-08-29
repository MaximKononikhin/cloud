import { AxiosPromise } from "axios";
import { ILogin, IUser } from "../../../../common/types";
import makeRequest from "../makeRequest";

export const login = (data: ILogin): AxiosPromise<IUser> =>  makeRequest({url: 'auth/login', method: 'POST', data});