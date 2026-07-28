import { screen } from "@testing-library/dom";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
    