import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from './Board'

it('renders without crashing', () => {
    render(<Board />)
})