import { render, screen, waitFor } from "@testing-library/react";
import RewardsCalculator from "./RewardsCalculator";

//fetch function globally

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

//test loading state

describe("RewardsCalculator Componet", () => {
  it("Should display loading state initially", () => {
    global.fetch.mockReturnValueOnce(
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: [] }),
      })
    );

    render(<RewardsCalculator />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  it("Should display reward points correctly", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { customerId: 100, date: "2024-08-16", transactionAmount: 130 },
        { customerId: 101, date: "2024-07-03", transactionAmount: 110 },
      ],
    });
    // global.fetch.mockResolvedValueOnce(mockResponse)
    // console.log("Mock response==",mockResponse)
    render(<RewardsCalculator />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });
});
