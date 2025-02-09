import { it, expect, describe, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Terms & Conditions component", () => {
  it("renders checkbox and button", () => {
    render(<TermsAndConditions />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("disables button when terms and conditions have not been accepted", async () => {
    // Arrange
    const onSubmit = vi.fn(() => {});
    render(<TermsAndConditions onSubmitPress={onSubmit} />);
    const checkbox = screen.getByRole("checkbox");
    const submitButton = screen.getByRole("button");
    const user = userEvent.setup();

    // Act
    expect(checkbox).not.toBeChecked();
    await user.click(submitButton);

    //Assert
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("enables button when terms and conditions have been accepted", async () => {
    // Arrange
    const onSubmit = vi.fn(() => {});
    render(<TermsAndConditions onSubmitPress={onSubmit} />);
    const checkbox = screen.getByRole("checkbox");
    const submitButton = screen.getByRole("button");
    const user = userEvent.setup();

    //Act
    await user.click(checkbox);
    await user.click(submitButton);

    //Assert
    expect(onSubmit).toHaveBeenCalled();
  });
});
