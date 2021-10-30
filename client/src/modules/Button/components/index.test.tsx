import {render, screen} from "@testing-library/react";
import Button from "./index";

test('renders button', () => {
    render (<Button type="button">тест</Button>);
    const btnElement = screen.getByText('тест');
    expect(btnElement).toBeInTheDocument();
})