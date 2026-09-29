import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";

it("should render Header component with the login button", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const LoginButton = screen.getByRole("button", { name: "Login" });
  //   const LoginButton = screen.getByText("Login");
  expect(LoginButton).toBeInTheDocument();
});

it("should render Header component with cart items size 0", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartItems = screen.getByText("Cart (0 items)");
  //   const LoginButton = screen.getByText("Login");
  expect(cartItems).toBeInTheDocument();
});

it("should render Header component with cart", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartItems = screen.getByText(/Cart/);
  //   const LoginButton = screen.getByText("Login");
  expect(cartItems).toBeInTheDocument();
});

it("should Toggle the Login to Logout button on click", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
