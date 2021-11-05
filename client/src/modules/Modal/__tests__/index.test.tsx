import {render} from "@testing-library/react";
import Modal from "../components";
import userEvent from "@testing-library/user-event";

describe('Modal component', () => {
    it('Renders modal', () => {
        const handleClose = jest.fn();
        const { getByTestId } = render(<Modal handleClose={handleClose}><h2>Test</h2></Modal>);
        expect(getByTestId('modal-overlay')).toBeInTheDocument();
    });

    it('Click outside modal', () => {
        const handleClose = jest.fn();
        const { getByTestId, unmount, queryByTestId } = render(<Modal handleClose={handleClose}><h2>Test</h2></Modal>);
        userEvent.click(getByTestId('modal-overlay'));
        unmount();
        expect(handleClose).toHaveBeenCalledTimes(1);
        expect(queryByTestId('modal-overlay')).not.toBeInTheDocument();
    });

    it('Click close btn', () => {
        const handleClose = jest.fn();
        const { getByTestId, unmount, queryByTestId } = render(<Modal handleClose={handleClose}><h2>Test</h2></Modal>);
        userEvent.click(getByTestId('close-btn'));
        unmount();
        expect(handleClose).toHaveBeenCalledTimes(1);
        expect(queryByTestId('modal-overlay')).not.toBeInTheDocument();
    });
})