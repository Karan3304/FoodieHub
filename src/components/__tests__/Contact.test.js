import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load submit button inside contact component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  //   const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Should load placeholder in the name input inside contact component", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("name");
  expect(inputName).toBeInTheDocument();
});

test("Should load placeholder in the name input inside contact component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  //   console.log(inputBoxes);
  console.log(inputBoxes.length);
  expect(inputBoxes.length).toBe(2); // Assertion
});
