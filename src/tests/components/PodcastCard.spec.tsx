import React from "react";
import { render, screen } from "@testing-library/react";
import { PodcastCard } from "../../components/PodcastCard";
import { BrowserRouter } from "react-router-dom";

describe("test component rendering", () => {
  let renderComponent: JSX.Element;
  beforeAll(() => {
    const defaultProps = {
      thumbnail: "",
      title: "My Title",
      author: "Author",
      id: "32552335",
    };

    renderComponent = (
      <BrowserRouter>
        <PodcastCard {...defaultProps} />
      </BrowserRouter>
    );
  });
  it("renders title properly", () => {
    render(renderComponent);
    const card = screen.getByRole("caption");

    expect(card).toHaveTextContent("My Title");
  });

  it("renders author properly", () => {
    render(renderComponent);
    const authorDescription = screen.getByText(/Author/i);

    expect(authorDescription).toBeInTheDocument();
  });

  it("renders image with alt attribute", () => {
    render(renderComponent);
    const image: HTMLImageElement = screen.getByAltText("My Title");

    expect(image.alt).toContain("My Title");
  });
});
