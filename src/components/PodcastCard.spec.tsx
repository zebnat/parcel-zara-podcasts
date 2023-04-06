import React from "react";
import { render, screen } from "@testing-library/react";
import { PodcastCard, PodcastCardProps } from "./PodcastCard";

describe("test component rendering", () => {
  let defaultProps: PodcastCardProps;
  beforeAll(() => {
    defaultProps = {
      thumbnail: "",
      title: "My Title",
      author: "Author",
      id: "32552335",
    };
  });
  it("renders title properly", () => {
    render(<PodcastCard {...defaultProps} />);
    const card = screen.getByRole("caption");

    expect(card).toHaveTextContent("My Title");
  });

  it("renders author properly", () => {
    render(<PodcastCard {...defaultProps} />);
    const authorDescription = screen.getByText(/Author/i);

    expect(authorDescription).toBeInTheDocument();
  });

  it("renders image with alt attribute", () => {
    render(<PodcastCard {...defaultProps} />);
    const image: HTMLImageElement = screen.getByAltText("My Title");

    expect(image.alt).toContain("My Title");
  });
});
