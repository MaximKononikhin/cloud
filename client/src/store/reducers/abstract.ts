import { fromJS, Map, List } from 'immutable';

export const fetchGenericList = (entityName: string, state: any, payload: any, shouldMerge = false, flipOrder = false) => {

    let newState = state;

    const currentKeys = shouldMerge ? newState.get('keys') : List([]);
    const { results, count } = payload;

    let entities: any = shouldMerge ? state.get(entityName) : Map({});

    let keys: List<string> = List(currentKeys);

    results.forEach((item: any) => {
        if (!keys.includes(item._id)) {
            const pusher = flipOrder ? 'unshift' : 'push';
            keys = keys[pusher](item._id);
        }
        let itemMap = fromJS(item);
        if (shouldMerge) {
            const currentItem = entities!.get(item._id.toString());

            if (currentItem) {
                itemMap = currentItem.mergeDeep(itemMap);
            }
        }
        entities = entities!.set(item._id, itemMap);
    });

    newState = newState.set(entityName, entities).set('keys', keys).set('count', count);

    return newState;
};



export const fetchGenericEntity = (entityName: string, state: any, payload: any, shouldMerge = false, setKeys = false) => {
    let newState = state;
    const data = payload;

    let entities: any = newState.get(entityName);

    let itemMap = fromJS(data);

    if (shouldMerge) {
        const currentItem = entities.get(data._id);

        if (currentItem) {
            itemMap = currentItem.mergeDeep(itemMap);
        }
    }

    if (setKeys) {
        let keys = newState.get('keys');
        keys = keys.push(data._id);
        newState = newState.set('keys', keys);
    }
    
    entities = entities.set(data._id, itemMap);
    newState = newState.set(entityName, entities).set('count', newState.get('count') + 1);

    return newState;
};

export const deleteGenericEntity = (entityName: string, state: any, payload: any) => {
    let newState = state;

    let entities = newState.get(entityName);
    entities = entities.delete(payload);

    let keys: List<string> = newState.get('keys');
    keys = keys.filter((key) => key !== payload);

    newState = newState.set(entityName, entities).set('keys', keys).set('count', newState.get('count') - 1);

    return newState;
}