import { AxiosPromise } from "axios";
import { IFile } from "../../../../types";
import makeRequest from "../makeRequest";

type IData = {
    name: string;
    type: 'dir' | 'file';
    parent?: string;
}

export const createDir = (data: IData): AxiosPromise<IFile> =>  makeRequest({url: 'files', method: 'POST', data});