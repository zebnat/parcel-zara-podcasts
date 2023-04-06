import React from "react";
import { render, screen } from "@testing-library/react";
import { StatusIndicator } from "../../components/StatusIndicator";

it("renders when loading is true", () => {
  render(<StatusIndicator loading={true} />);
  const spinnerElement = screen.getByRole("status");
  expect(spinnerElement).toHaveTextContent("Loading...");
});

it("never renders when loading is false", () => {
  render(<StatusIndicator loading={false} />);
  const spinnerElement = screen.queryByRole("status");
  expect(spinnerElement).not.toBeInTheDocument();
});
