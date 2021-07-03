import  { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '..';

const onChange = jest.fn();

const props = {
    value: "3",
    onChange,
};

const setup = () => {
    const utils = render(<Input {...props} />);
    const input = utils.getByTestId("input");
    return {
      input,
      ...utils
    };
};

test('renders input', () => {
    const { input } = setup();
    
    expect((input as HTMLInputElement).value).toBe("3");
});

test('onChange works', () => {
    const { input } = setup();

    userEvent.type(input, '5');

    expect(onChange).toHaveBeenCalledTimes(1);
})