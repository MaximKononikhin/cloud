import { List, Map } from 'immutable';
import { FETCH_FILES_LIST } from '../../common/constants/actions/file';
import { IFile } from '../../common/types';
import { fetchGenericEntity, fetchGenericList } from './abstract';

export const defaultState = Map({
  files: Map<IFile>({}),
  keys: List([]) as List<string>,
  count: 0
});

const state = (starships = defaultState, { type, payload }: any): typeof defaultState => {
    let newState: Map<string, any> = starships;
    
    switch (type) {
        case FETCH_FILES_LIST: {
        newState = fetchGenericList('files', newState, payload, true);
        break;
    }

        default:
    }
    
    return newState;
};
  
export default state;