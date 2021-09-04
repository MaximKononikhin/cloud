import { AxiosPromise } from "axios";
import { IUser } from "../../../../types";
import makeRequest from "../makeRequest";

export const uploadAvatar = (data: FormData): AxiosPromise<IUser> =>  makeRequest({url: 'files/avatar', method: 'POST', data});