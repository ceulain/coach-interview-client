import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("App component", () => {
  test("should return component", () => {
    expect(renderer.create(<App />)).toMatchSnapshot();
  });
});
