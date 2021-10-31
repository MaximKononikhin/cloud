import File from "../components";
import React from "react";
import userEvent from "@testing-library/user-event";
import {IFile} from "../../../common/types";
import {renderWithRedux, store} from "../../../store";
import {ADD_FILE} from "../../../common/constants/actions/file";
import {fireEvent, screen} from "@testing-library/react";


const file: IFile = {
    type: 'file',
    _id: '1',
    name: 'Text.txt',
    accessLink: '',
    parent: '',
    children: [],
    size: 0,
    path: '',
    user: "1"
};

const dir: IFile = {
    type: 'dir',
    _id: '0',
    name: 'Folder',
    accessLink: '',
    parent: '',
    children: [],
    size: 0,
    path: '',
    user: "1"
};

describe('File component', () => {
    it('Renders File component', () => {
        const { getByTestId } = renderWithRedux(<File file={dir} />);
        expect(getByTestId('file-element')).toBeInTheDocument();
    });

    it('Renders folder icon', () => {
        const { getByAltText } = renderWithRedux(<File file={dir} />);
        expect(getByAltText('folder')).toBeInTheDocument();
    });

    it('Renders file icon', () => {
        const { getByAltText } = renderWithRedux(<File file={file} />);
        expect(getByAltText('file')).toBeInTheDocument();
    });

    it('Renders download button', () => {
        const { getByTestId } = renderWithRedux(<File file={file} />);
        expect(getByTestId('download-btn')).toBeInTheDocument();
    });

    it('Click delete button', () => {
        const { getByTestId } = renderWithRedux(<File file={file} />);
        const deleteBtn = getByTestId('delete-btn');
        expect(deleteBtn).toBeInTheDocument();
        store.dispatch({ type: ADD_FILE, payload: file });
        let fileState = store.getState().file.toJS().file;
        fireEvent.click(deleteBtn,
            new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
        // expect(fileState[`${file._id}` as keyof typeof fileState]).toBeUndefined();
    });
});