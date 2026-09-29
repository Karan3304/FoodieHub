import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import RestaurantCard, { withVegLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render RestCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA[0]} />);
  const name = screen.getByText("P. Hotel Bhagat Tarachand");
  expect(name).toBeInTheDocument();
});

it("should render VEG Labelled RestCard component with props data", () => {
  const VegRestaurantCard = withVegLabel(RestaurantCard);
  render(<VegRestaurantCard resData={MOCK_DATA[1]} />);
  const label = screen.getByText(/VEG/);
  expect(label).toBeInTheDocument();
});
