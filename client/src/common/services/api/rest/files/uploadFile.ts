import { AxiosPromise } from "axios";
import { IFile } from "../../../../types";
import makeRequest from "../makeRequest";


export const uploadFile = (formData: FormData): AxiosPromise<IFile> =>  makeRequest({url: 'files/upload', method: 'POST', data: formData});