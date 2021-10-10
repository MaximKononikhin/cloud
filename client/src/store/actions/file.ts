import { Dispatch } from "redux";
import { ADD_FILE, DELETE_FILE, POP_DIR_STACK, PUSH_DIR_STACK, SET_FILES_LIST } from "../../common/constants/actions/file";
import { createFile } from "../../common/services/api/rest/files/createFile";
import { deleteFile } from "../../common/services/api/rest/files/deleteFile";
import { getFiles } from "../../common/services/api/rest/files/getFiles";
import { IFile } from "../../common/types";


export const fetchFilesAction = (dirId?: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await getFiles(dirId);

        dispatch({ type: SET_FILES_LIST, payload: data })
    } catch (e) {
        console.log(e);
    }
};

export const addFileAction = (name: string, type: 'file' | 'dir', parent?: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await createFile({ name, type, parent });
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

export const pushDirStack = (dir: IFile) => ({ type: PUSH_DIR_STACK, payload: dir });

export const popDirStack = () => ({ type: POP_DIR_STACK });