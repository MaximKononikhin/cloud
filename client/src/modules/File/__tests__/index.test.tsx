import File from "../components";
import React from "react";
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import userEvent from "@testing-library/user-event";
import {IFile} from "../../../common/types";
import {renderWithRedux, store} from "../../../store";
import {ADD_FILE, DELETE_FILE} from "../../../common/constants/actions/file";
import { waitFor} from "@testing-library/react";
import {BASE_URL} from "../../../common/constants";

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

const server = setupServer(
    rest.delete(`${BASE_URL}/api/files`, (req, res, ctx) => {
        return res(ctx.json({ message: 'File was deleted'}))
    }),
);

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

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

    it('Click delete button', async () => {
        const { getByTestId } = renderWithRedux(<File file={file} />);
        const deleteBtn = getByTestId('delete-btn');
        expect(deleteBtn).toBeInTheDocument();
        store.dispatch({ type: ADD_FILE, payload: file });
        userEvent.click(deleteBtn);
        await waitFor(() => {
            const newFileState = store.getState().file.toJS().file;
            expect(newFileState[`${file._id}` as keyof typeof newFileState]).toBeUndefined()
        });
    });
});