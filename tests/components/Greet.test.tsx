// tests/components/Greet.test.tsx
import { it, expect, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import "@testing-library/jest-dom/vitest";

afterEach(cleanup);
describe("Greet component", () => {
  it('renders "Hello" with a name', () => {
    render(<Greet name="John" />);
    expect(screen.getByText("Hello John")).toBeInTheDocument();
  });

  it("renders a login button when no name is provided", () => {
    render(<Greet />);
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("renders a login button when an empty string is provided as name", () => {
    render(<Greet name="" />);
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
});
