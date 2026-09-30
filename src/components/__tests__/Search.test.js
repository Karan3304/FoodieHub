import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import Mock_Data from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

it("should Search Res List for buger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  // before the search test begins,confirm that our screen renders 20 cards
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  // access the search button and search input
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  // put burger in the input and click the search button
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  // confirm that only 1 card rendered after search
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

it("should Filter the top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  // before the search test begins,confirm that our screen renders 20 cards
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  // access the top rated search button
  const TopRatedBtn = screen.getByRole("button", {
    name: "Top rated Restaurants",
  });

  fireEvent.click(TopRatedBtn);

  // confirm that only 14 card rendered after search
  const cardsAfterTopBtn = screen.getAllByTestId("resCard");
  expect(cardsAfterTopBtn.length).toBe(14);
});
