import { IProps } from "../types";
import { render } from "@testing-library/react";
import FormField from "../components";

const getComponent = (props: IProps) => {
    const component = render(<FormField {...props} />);
    return component;
};

describe('FormField component', () => {
    it('Renders component', () => {
        const handleChange = jest.fn();
        const {getByTestId} = getComponent({type: 'text', name: 'name', onChange: handleChange, value: '', label: 'Name'});
        expect(getByTestId('form-field')).toBeInTheDocument();
    });

    it('Renders valid name', () => {
        const handleChange = jest.fn();
        const name = 'Name';
        const { getByTestId } = getComponent({type: 'text', name: 'name', onChange: handleChange, value: '', label: name});
        expect(getByTestId('form-field-name')).toHaveTextContent(name);
    });

    it('Renders valid error', () => {
        const handleChange = jest.fn();
        const error = 'Some error';
        const { getByTestId } = getComponent({type: 'text', name: 'name', onChange: handleChange, value: '', label: 'Name', error});
        const errorComponent = getByTestId('form-field-error');
        expect(errorComponent).toBeInTheDocument();
        expect(errorComponent).toHaveTextContent(error);
    });

    it('Have own styles', () => {
        const handleChange = jest.fn();
        const { getByTestId } = getComponent({type: 'text', name: 'name', onChange: handleChange, value: '', label: 'Name', ownStyles: 'color: red'});
        expect(getByTestId('form-field')).toHaveStyle({"color": "red"});
    });
})

