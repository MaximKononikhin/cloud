import { AxiosPromise } from "axios";
import { IFile } from "../../../../types";
import makeRequest from "../makeRequest";


export const getFiles = (): AxiosPromise<IFile[]> =>  makeRequest({url: 'files', method: 'GET'});