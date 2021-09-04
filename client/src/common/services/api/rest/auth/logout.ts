import { AxiosPromise } from "axios";
import makeRequest from "../makeRequest";

export const logout = (): AxiosPromise<void> =>  makeRequest({url: 'auth/logout'});