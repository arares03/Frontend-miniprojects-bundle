import { render, screen } from "@testing-library/react";
import App from "./MainApp/App";
import { Provider } from "react-redux";
import store from "./ReduxParts/store/configureStore";

test("renders the page?", () => {
  render(
    <Provider store={store}>
      <App />{" "}
    </Provider>
  );
  const homeText = screen.getByText(/home/i);
  const cartText = screen.getByText(/cart/i);
  expect(homeText).toBeInTheDocument();
  expect(cartText).toBeInTheDocument();
});
