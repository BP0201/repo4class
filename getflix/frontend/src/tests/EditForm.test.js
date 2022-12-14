import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EditForm from '../forms/EditForm';

describe("EditForm", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <EditForm />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByLabelText("New Password")).toBeInTheDocument();
  });
});