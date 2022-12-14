import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

describe("LoginForm", () => {

  // function successfulLogin() {
  //   return { success: true }
  // }

  function failedLogin() {
    return { success: false }
  }

  it("should match the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("should throw an error if inputs are empty", () => {
    render(
      <MemoryRouter>
        <LoginForm login={failedLogin} />
      </MemoryRouter>
    );
    const loginBtn = screen.getByTestId("login-form-btn");
    fireEvent.click(loginBtn);
    expect(screen.getByText("Username must be between 3-16 characters")).toBeInTheDocument();
    expect(screen.getByText("Password must be between 5-20 characters")).toBeInTheDocument();
  });

  // it("should throw an error if user doesn't exist", () => {
  //   render(
  //     <MemoryRouter>
  //       <LoginForm login={failedLogin} />
  //     </MemoryRouter>
  //   );
  //   const usernameInput = screen.getByLabelText("Username");
  //   const passwordInput = screen.getByLabelText("Password");
  //   const loginBtn = screen.getByTestId("login-form-btn");
  //   fireEvent.change(usernameInput, {target: {value: 'testUser'}})
  //   fireEvent.change(passwordInput, {target: {value: 'password1'}})
  //   fireEvent.click(loginBtn);
  //   expect(screen.getByText("Invalid username/password")).toBeInTheDocument();
  // });
});