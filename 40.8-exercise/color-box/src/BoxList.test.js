import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('renders without crashing', () => {
  render(<BoxList />);
});

test('it matches snapshot', () => {
  const { asFragment } = render(<BoxList />)
  expect(asFragment()).toMatchSnapshot();
})

test('it can create a new box', () => {
    const { getByText, getByLabelText } = render(<BoxList />)

    const btn = getByText("Add Box")
    fireEvent.click(btn)
    expect(getByText("X")).toBeInTheDocument();
})

test("it can remove a box", () => {
    const { getByText, getByLabelText } = render(<BoxList />)

    const submitBtn = getByText("Add Box")
    fireEvent.click(submitBtn)
    const removeBtn = getByText("X")
    expect(removeBtn).toBeInTheDocument();
    fireEvent.click(removeBtn)
    expect(removeBtn).not.toBeInTheDocument();
})