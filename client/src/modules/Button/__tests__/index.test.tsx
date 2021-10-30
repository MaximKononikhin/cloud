import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components";
import {IProps} from "../types";

type ITestProps = Omit<IProps, 'type' | 'children'>

const getComponent = (props: ITestProps) => {
    const { getByText } = render (<Button {...props} type="button">Button</Button>);
    const btnElement = getByText(/Button/i);
    return btnElement;
};

describe('Button component', () => {
    it('Renders Button component', () => {
        const btnElement = getComponent({});
        expect(btnElement).toBeInTheDocument();
    });

    it('Change color', () => {
        const btnElement = getComponent({color: "red"});
        expect(btnElement).toHaveStyle({"background": "red"});
    });

    it('Disabled', () => {
        const btnElement = getComponent({disabled: true});
        expect(btnElement).toBeDisabled();
    });

    it('Have own styles', () => {
        const btnElement = getComponent({ownStyles: "color: red"});
        expect(btnElement).toHaveStyle({"color": "red"});
    });

    it('Button click', () => {
        const handleClick = jest.fn();
        const btnElement = getComponent({onClick: handleClick});
        userEvent.click(btnElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('Disabled button click', () => {
        const handleClick = jest.fn();
        const btnElement = getComponent({onClick: handleClick, disabled: true});
        userEvent.click(btnElement);
        expect(handleClick).toHaveBeenCalledTimes(0);
    });
});