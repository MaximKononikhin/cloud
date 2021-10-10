import { createSelector } from 'reselect';
import { Collection, List, Stack } from 'immutable';
import { IState } from '..';
import { IFile } from '../../common/types';

export const storedFiles = (store: IState, props: any) => (
    store.file.get('file')
);

export const storedDirStack = (store: IState, props: any) => (
    store.file.get('dirStack')
);

export const getAllFiles = createSelector(storedFiles, (files: any) => Object.values(files.toJS()));

export const getCurrentDir = createSelector(storedDirStack, (dir: Stack<IFile>) => dir.first());