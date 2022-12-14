import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Favorites from '../components/Favorites';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './testUtils';

describe("Favorites", () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
          <Favorites />
        </UserProvider>
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot();
  });
});