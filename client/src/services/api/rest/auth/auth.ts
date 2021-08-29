import { AxiosPromise } from "axios";
import { IUser } from "../../../../common/types";
import makeRequest from "../makeRequest";

export const auth = (): AxiosPromise<IUser> =>  makeRequest({url: 'auth/auth'});