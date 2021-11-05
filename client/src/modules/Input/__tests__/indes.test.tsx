import { IProps } from "../types";
import { fireEvent, render } from "@testing-library/react";
import Input from "../components";
import userEvent from "@testing-library/user-event";

const getComponent = (props: IProps) => {
    const { getByTestId } = render(<Input {...props} />);
    const inputElement = getByTestId('input');
    return inputElement
};

describe('Input component', () => {
    it('Renders input', () => {
        const handleChange = jest.fn();
        const input = getComponent({type: 'text', value: '', onChange: handleChange});
        expect(input).toBeInTheDocument();
    });

    it('Setting value', () => {
        const handleChange = jest.fn();
        const value = 'Test';
        const input = getComponent({type: 'text', value, onChange: handleChange});
        expect(input).toHaveDisplayValue(value);
    });

    it('Handle change', () => {
        const handleChange = jest.fn();
        const input = getComponent({type: 'text', value: '', onChange: handleChange});
        userEvent.type(input, 'test');
        expect(handleChange).toHaveBeenCalledTimes(4);
    });

    it('Handle blur', () => {
        const handleChange = jest.fn();
        const handleBlur = jest.fn();
        const input = getComponent({ type: 'text', value: '', onChange: handleChange, onBlur: handleBlur });
        fireEvent.blur(input);
        expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('Have own styles', () => {
        const handleChange = jest.fn();
        const input = getComponent({ type: 'text', value: '', onChange: handleChange, ownStyles: 'color: red' });
        expect(input).toHaveStyle({"color": "red"});
    });

    it('Have error', () => {
        const handleChange = jest.fn();
        const input = getComponent({ type: 'text', value: '', onChange: handleChange, error: 'Some error' });
        expect(input).toHaveStyle({"border": "1px solid #E13A3A"});
    });
});