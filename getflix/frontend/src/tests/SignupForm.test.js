import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignupForm from '../forms/SignupForm';

describe("SignupForm", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("should throw an error if inputs are empty", () => {
    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );
    const signupBtn = screen.getByTestId("signup-form-btn");
    fireEvent.click(signupBtn);
    expect(screen.getByText("Username must be between 3-16 characters")).toBeInTheDocument();
    expect(screen.getByText("Password must be between 5-20 characters")).toBeInTheDocument();
  });
});