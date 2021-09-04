import { AxiosPromise } from "axios";
import { IRegistration, IUser } from "../../../../types";
import makeRequest from "../makeRequest";

export const register = (data: IRegistration): AxiosPromise<IUser> =>  makeRequest({url: 'auth/registration', method: 'POST', data});