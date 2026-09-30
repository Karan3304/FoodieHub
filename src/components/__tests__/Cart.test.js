import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Mock_Data from "../mocks/MockResMenu.json";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(Mock_Data),
  }),
);

it("should load Restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
        </Provider>
      </BrowserRouter>,
    ),
  );
  // accessing some food category and clicking on it
  const accordianHeader = await screen.findByText(
    "NEW BK Fusion (Made with KitKat) - 5",
  );
  fireEvent.click(accordianHeader);

  // the length of the items list in the food category should be 5
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(5);

  // expecting 0 cart items before clicking any add button
  const cartItemsBefore = screen.getByText("Cart (0 items)");
  expect(cartItemsBefore).toBeInTheDocument();
});

it("should access the add button and one item should be added in the cart in the header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
        </Provider>
      </BrowserRouter>,
    ),
  );

  // accessing some food category and clicking on it
  const accordianHeader = await screen.findByText(
    "NEW BK Fusion (Made with KitKat) - 5",
  );
  fireEvent.click(accordianHeader);

  // accessing the add buttons and click the first add button
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  // now,on header,find that if there is one item in cart after clicking add button
  const cartItemsAfter = screen.getByText("Cart (1 items)");
  expect(cartItemsAfter).toBeInTheDocument();
});

it("should access the add button and add one more item should be added in the cart in the header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );

  // accessing some food category and clicking on it
  const accordianHeader = await screen.findByText(
    "NEW BK Fusion (Made with KitKat) - 5",
  );
  fireEvent.click(accordianHeader);

  // accessing the add buttons and click the first add button
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[1]);

  // now,on header,find that if there is one item in cart after clicking add button
  const cartItemsAfter = screen.getByText("Cart (2 items)");
  expect(cartItemsAfter).toBeInTheDocument();

  // now check if the cart component have 2 items or cards
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("cartItems").length).toBe(2);
});

it("should clear the cart when Clear Cart is clicked", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );

  fireEvent.click(
    await screen.findByText("NEW BK Fusion (Made with KitKat) - 5"),
  );

  // add two items first so there is something to clear
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);
  expect(screen.getAllByTestId("cartItems").length).toBe(2);

  // clear the cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getByText("Cart is empty")).toBeInTheDocument();
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  expect(screen.queryAllByTestId("cartItems").length).toBe(0);
});
