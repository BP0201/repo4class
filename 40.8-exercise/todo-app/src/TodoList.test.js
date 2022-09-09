import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders without crashing', () => {
  render(<TodoList />);
});

test("it matches the snapshot", () => {
  const { asFragment } = render(<TodoList />)
  expect(asFragment()).toMatchSnapshot();
})

test("it can create a new todo", () => {
    const { getByText, getByLabelText } = render(<TodoList />)
    const input = getByLabelText("Todo");
    const submitBtn = getByText("Add Todo!")

    fireEvent.change(input, { target: { value: "finish writing tests" }})
    fireEvent.click(submitBtn)
    expect(getByText("finish writing tests")).toBeInTheDocument();
})

test("it can remove a todo", () => {
    const { getByText, getByLabelText } = render(<TodoList />)
    const input = getByLabelText("Todo");
    const submitBtn = getByText("Add Todo!")

    fireEvent.change(input, { target: { value: "finish writing tests" }})
    fireEvent.click(submitBtn)
    expect(getByText("finish writing tests")).toBeInTheDocument();

    const removeBtn = getByText("X")
    fireEvent.click(removeBtn)
    expect(removeBtn).not.toBeInTheDocument();
})