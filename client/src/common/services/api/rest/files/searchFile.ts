import { AxiosPromise } from "axios";
import { IFile } from "../../../../types";
import makeRequest from "../makeRequest";


export const searchFile = (search: string): AxiosPromise<IFile[]> =>  makeRequest({url: `files/search?search=${search}`});