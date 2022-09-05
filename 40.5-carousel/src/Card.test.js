import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";



it('renders without crashing', () => {
    render(<Card caption="Hello world" src={image1} currNum={1} totalNum={1} />)
})

it('matches expected outcome', () => {
    const { getByText } = render(<Card caption="Hello world" src={image1} currNum={1} totalNum={1} />)
    expect(getByText("Hello world"))
})