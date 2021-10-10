import { AxiosPromise } from "axios";
import { IFile } from "../../../../types";
import makeRequest from "../makeRequest";

type IData = {
    name: string;
    type: 'dir' | 'file';
    parent?: string;
}

export const createFile = (data: IData): AxiosPromise<IFile> =>  makeRequest({url: 'files', method: 'POST', data});