import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders without crashing', () => {
  render(<NewTodoForm />);
});

test("it matches the snapshot", () => {
  const { asFragment } = render(<NewTodoForm />)
  expect(asFragment()).toMatchSnapshot();
})