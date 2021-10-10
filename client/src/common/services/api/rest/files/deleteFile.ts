import { AxiosPromise } from "axios";
import { IFile } from "../../../../types";
import makeRequest from "../makeRequest";

type IData = {
    id: string
}

export const deleteFile = (data: IData): AxiosPromise<void> =>  makeRequest({ url: `files?id=${data.id}`, method: 'DELETE' });