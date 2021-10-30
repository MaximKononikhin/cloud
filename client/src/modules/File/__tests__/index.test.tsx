import { render, screen } from "@testing-library/react";
import File from "../components";

import {IFile} from "../../../common/types";
import {store} from "../../../store";
import {Provider} from "react-redux";
import React from "react";



const renderWithRedux = (
    component: JSX.Element,
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};


const file: IFile = {
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
        const { getByTestId } = renderWithRedux(<File file={file} />);
        expect(getByTestId('file-element')).toBeInTheDocument();
    });
});