import { Dispatch } from "redux";
import { ADD_FILE, DELETE_FILE, POP_DIR_STACK, PUSH_DIR_STACK, SET_FILES_LIST } from "../../common/constants/actions/file";
import { createDir } from "../../common/services/api/rest/files/createDir";
import { deleteFile } from "../../common/services/api/rest/files/deleteFile";
import { getFiles } from "../../common/services/api/rest/files/getFiles";
import { uploadFile } from "../../common/services/api/rest/files/uploadFile";
import { IFile } from "../../common/types";


export const fetchFilesAction = (dirId?: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await getFiles(dirId);

        dispatch({ type: SET_FILES_LIST, payload: data })
    } catch (e) {
        console.log(e);
    }
};

export const createDirAction = (name: string, parent?: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await createDir({ name, type: 'dir', parent });
        dispatch({ type: ADD_FILE, payload: data });
    }catch (e) {
        console.log(e);
    }
};

export const deleteFileAction = (id: string) => async (dispatch: Dispatch) => {
    try {
        await deleteFile({ id });
        dispatch({ type: DELETE_FILE, payload: id });
    } catch(e) {
        console.log(e)
    }
};

export const uploadFileAction = (file: File, dirId?: string) => async (dispatch: Dispatch) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        if (dirId) {
            formData.append('parent', dirId)
        }
        
        console.log(formData.getAll('file'));
        const { data } = await uploadFile(formData);
        dispatch({ type: ADD_FILE, payload: data });
    } catch(e) {
        console.log(e)
    }
}

export const pushDirStack = (dir: IFile) => ({ type: PUSH_DIR_STACK, payload: dir });

export const popDirStack = () => ({ type: POP_DIR_STACK });