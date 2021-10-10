import { List, Map, Stack } from 'immutable';
import { ADD_FILE, DELETE_FILE, POP_DIR_STACK, PUSH_DIR_STACK, SET_FILES_LIST } from '../../common/constants/actions/file';
import { IFile } from '../../common/types';
import { deleteGenericEntity, fetchGenericEntity, fetchGenericList } from './abstract';


export const defaultState = Map({
  file: Map<IFile>({}),
  dirStack: Stack<IFile>([]),
  keys: List([]) as List<string>,
  count: 0
});

const state = (files = defaultState, { type, payload }: any): typeof defaultState => {
    let newState: Map<string, any> = files;

    switch (type) {
        case SET_FILES_LIST: {
            newState = fetchGenericList('file', newState, payload, false);
            break;
        }

        case ADD_FILE: {
            newState = fetchGenericEntity('file', newState, payload, false, true);
            break;
        }

        case DELETE_FILE: {
            newState = deleteGenericEntity('file', newState, payload);
            break;
        }

        case PUSH_DIR_STACK: {
            let dirStack = newState.get('dirStack');
            dirStack = dirStack.push(payload);
            newState = newState.set('dirStack', dirStack);
            break;
        }

        case POP_DIR_STACK: {
            let dirStack = newState.get('dirStack');
            dirStack = dirStack.pop();
            newState = newState.set('dirStack', dirStack);
            break;
        }

        default:
    }
    
    return newState;
};
  
export default state;