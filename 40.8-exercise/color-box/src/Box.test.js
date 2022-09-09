import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

test('renders without crashing', () => {
  render(<Box />);
});

test('it matches snapshot', () => {
  const { asFragment } = render(<Box />)
  expect(asFragment()).toMatchSnapshot();
})