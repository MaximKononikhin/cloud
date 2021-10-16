import { AxiosPromise } from "axios";
import { IFile } from "../../../../types";
import makeRequest from "../makeRequest";


export const getFiles = (dirId?: string): AxiosPromise<IFile[]> =>  makeRequest({url: `files${dirId ? `?parent=${dirId}` : ''}`});