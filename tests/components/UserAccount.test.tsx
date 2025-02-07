import { it, expect, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import UserAccount from "../../src/components/UserAccount";

afterEach(cleanup);

describe("UserAccount component", () => {
  it("Doesnt display edit button when user is not an admin", () => {
    render(
      <UserAccount
        user={{
          id: 1,
          name: "John Doe",
          isAdmin: false,
        }}
      />
    );
    expect(
      screen.queryByRole("button", { name: "Edit" })
    ).not.toBeInTheDocument();
  });

  it("Displays edit button when user is an admin", () => {
    render(
      <UserAccount
        user={{
          id: 1,
          name: "John Doe",
          isAdmin: true,
        }}
      />
    );
    expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument();
  });

  it("Display user's name", () => {
    const user = {
      id: 1,
      name: "John Doe",
      isAdmin: false,
    };
    render(<UserAccount user={user} />);
    // test if screen contains user's name
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });
});
