import React from "react";
import renderer from "react-test-renderer";
import App from "../../App";
import AddProject from "../AddProject";
import { store } from "../Redux/Store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

test("Should match the Snapshot", () => {
  let { container } = render(
    <Provider>
      <AddProject store={store} />
    </Provider>
  );

  expect(container.innerHTML).toMatchSnapshot();
});
