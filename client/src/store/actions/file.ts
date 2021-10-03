import { Dispatch } from "redux";
import { FETCH_FILES_LIST } from "../../common/constants/actions/file";
import { getFiles } from "../../common/services/api/rest/files/getFiles";


export const fetchFiles = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await getFiles();

        return dispatch({ type: FETCH_FILES_LIST, payload: data })
    } catch (e) {
        console.log(e);
    }
}