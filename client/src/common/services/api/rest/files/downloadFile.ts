import { AxiosPromise } from "axios";
import makeRequest from "../makeRequest";


export const downloadFile = (fileId: string): AxiosPromise<Blob> =>  makeRequest({url: `files/download?id=${fileId}`, responseType: 'blob'});