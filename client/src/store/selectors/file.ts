import { createSelector } from 'reselect';
import { Collection, List } from 'immutable';
import { IState } from '..';

export const storedFiles = (store: IState, props: any) => (
    store.file.get('files')
);

export const getAllFiles: any = createSelector(storedFiles, (files: any) => Object.values(files.toJS()));