import { it, expect, describe, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";
afterEach(cleanup);

const text257 = new Array(257).fill("A").join("");
const text256 = new Array(256).fill("A").join("");
const text255 = new Array(255).fill("A").join("");
const text250 = new Array(250).fill("A").join("");

describe("ExpandableText", () => {
  it("Displays complete text when it's within limit(<=255) without see more/see less button", () => {
    let text = text250;
    render(<ExpandableText text={text} />);

    expect(screen.getByText(text, { exact: true })).toBeInTheDocument();

    cleanup();

    text = text255;
    render(<ExpandableText text={text} />);

    expect(screen.getByText(text, { exact: true })).toBeInTheDocument();

    cleanup();
  });

  it("Displays incomplete text when it's above limit(>255)", () => {
    const text = text256;
    render(<ExpandableText text={text} />);

    expect(screen.queryByText(text, { exact: true })).not.toBeInTheDocument();
  });

  it("Displays button when text is above limit(>255)", () => {
    const text = text256;
    render(<ExpandableText text={text} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Pressing see more displays full text", async () => {
    const text = text256;
    render(<ExpandableText text={text} />);

    const seeMoreButton = screen.getByRole("button");
    expect(seeMoreButton).toHaveTextContent(/more/i);

    const user = userEvent.setup();

    await user.click(seeMoreButton);

    expect(screen.queryByText(text, { exact: true })).toBeInTheDocument();
  });

});
